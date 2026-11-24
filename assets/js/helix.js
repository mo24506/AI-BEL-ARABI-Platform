/* AI Bel Araby — animated DNA helix + neural network canvas */
(function () {
  "use strict";
  const RED = [191, 24, 42], RED_L = [232, 96, 110], WHITE = [245, 242, 238];
  const rgba = (c, a) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function Helix(canvas, opts) {
    const o = Object.assign({
      angle: -0.38, cx: 0.7, cy: 0.5, length: 1.25, amp: 0.12, turns: 3.4, pairs: 46,
      speed: 0.32, particles: 46, link: 120, interactive: true, glow: true, seed: 1
    }, opts || {});
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0, dpr = 1, raf = 0, running = false, visible = true;
    let mouse = { x: -9999, y: -9999 };
    let seed = o.seed * 9301 + 49297;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    let parts = [];

    function size() {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(o.particles * Math.min(1.4, (W * H) / (1200 * 700) + 0.35));
      parts = Array.from({ length: n }, () => ({
        x: rnd() * W, y: rnd() * H,
        vx: (rnd() - 0.5) * 0.25, vy: (rnd() - 0.5) * 0.25,
        r: 1 + rnd() * 1.6
      }));
      if (!running) draw(performance.now());
    }

    function draw(now) {
      const t = now / 1000;
      ctx.clearRect(0, 0, W, H);
      const D = Math.min(W, H), diag = Math.hypot(W, H);
      const cx = o.cx * W, cy = o.cy * H;
      const dx = Math.cos(o.angle), dy = Math.sin(o.angle);
      const nx = -dy, ny = dx;
      const amp = o.amp * D * 1.6;

      // helix points
      const A = [], B = [];
      for (let i = 0; i < o.pairs; i++) {
        const u = i / (o.pairs - 1);
        const s = (u - 0.5) * o.length * diag;
        const ph = u * o.turns * Math.PI * 2 + t * o.speed * (reduce ? 0 : 1);
        const off = Math.sin(ph) * amp, z = Math.cos(ph);
        const ax = cx + dx * s, ay = cy + dy * s;
        A.push({ x: ax + nx * off, y: ay + ny * off, z, i });
        B.push({ x: ax - nx * off, y: ay - ny * off, z: -z, i });
      }

      // particles (neural net)
      for (const p of parts) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; }
        if (o.interactive) {
          const mx = mouse.x - p.x, my = mouse.y - p.y, md = Math.hypot(mx, my);
          if (md < 160 && md > 1) { p.x += (mx / md) * 0.35; p.y += (my / md) * 0.35; }
        }
        if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        for (let j = i + 1; j < parts.length; j++) {
          const q = parts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < o.link) { ctx.strokeStyle = rgba(WHITE, (1 - d / o.link) * 0.13); ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        }
        // synapse to helix nodes
        for (let k = 0; k < A.length; k += 3) {
          const h = A[k].z > 0 ? A[k] : B[k];
          const d = Math.hypot(p.x - h.x, p.y - h.y);
          if (d < o.link * 0.9) { ctx.strokeStyle = rgba(RED_L, (1 - d / (o.link * 0.9)) * 0.28); ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(h.x, h.y); ctx.stroke(); }
        }
        if (o.interactive) {
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (d < 170) { ctx.strokeStyle = rgba(RED_L, (1 - d / 170) * 0.45); ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
        }
        ctx.fillStyle = rgba(WHITE, 0.45);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      }

      // glow behind helix
      if (o.glow) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, D * 0.7);
        g.addColorStop(0, "rgba(191,24,42,0.16)"); g.addColorStop(1, "rgba(191,24,42,0)");
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }

      // rungs (base pairs) — every 4th is a "circuit" rung
      for (let i = 0; i < A.length; i++) {
        const a = A[i], b = B[i];
        const depth = (Math.abs(a.z) * 0.5 + 0.5);
        const circuit = i % 4 === 1;
        if (circuit) {
          // right-angled trace like a PCB
          const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
          ctx.strokeStyle = rgba(RED_L, 0.35 + 0.35 * depth);
          ctx.lineWidth = 1.4;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mx + dx * 6, my + dy * 6); ctx.lineTo(b.x, b.y); ctx.stroke();
          ctx.fillStyle = rgba(RED_L, 0.9);
          ctx.beginPath(); ctx.arc(mx + dx * 6, my + dy * 6, 2.4, 0, 6.283); ctx.fill();
        } else {
          const gr = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          gr.addColorStop(0, rgba(WHITE, 0.08 + 0.22 * (a.z * 0.5 + 0.5)));
          gr.addColorStop(1, rgba(RED, 0.1 + 0.3 * (b.z * 0.5 + 0.5)));
          ctx.strokeStyle = gr; ctx.lineWidth = 1.2;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }

      // backbones
      const strand = (pts, col, w) => {
        for (let i = 0; i < pts.length - 1; i++) {
          const p = pts[i], q = pts[i + 1];
          const z = (p.z + q.z) / 2;
          ctx.strokeStyle = rgba(col, 0.18 + 0.72 * (z * 0.5 + 0.5));
          ctx.lineWidth = w * (0.6 + 0.6 * (z * 0.5 + 0.5));
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      };
      ctx.lineCap = "round";
      strand(A, WHITE, 2.4);
      strand(B, RED, 2.4);

      // nodes, depth-sorted
      const nodes = A.map((p) => ({ p, c: WHITE })).concat(B.map((p) => ({ p, c: RED_L })));
      nodes.sort((m, n) => m.p.z - n.p.z);
      for (const { p, c } of nodes) {
        const k = p.z * 0.5 + 0.5;
        const r = 1.6 + 3 * k;
        ctx.fillStyle = rgba(c, 0.25 + 0.75 * k);
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, 6.283); ctx.fill();
        if (k > 0.85 && p.i % 4 === 1) {
          ctx.strokeStyle = rgba(c, 0.5); ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(p.x, p.y, r + 4, 0, 6.283); ctx.stroke();
        }
      }
    }

    function loop(now) {
      if (!running) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    }
    function start() { if (reduce || running || !visible) return; running = true; raf = requestAnimationFrame(loop); }
    function stop() { running = false; cancelAnimationFrame(raf); }

    if ("ResizeObserver" in window) new ResizeObserver(size).observe(canvas); else window.addEventListener("resize", size);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((e) => { visible = e[0].isIntersecting; visible ? start() : stop(); }).observe(canvas);
    }
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    if (o.interactive) {
      const host = canvas.parentElement;
      host.addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
      host.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
    }
    size();
    start();
    return { start, stop, redraw: () => draw(performance.now()) };
  }

  window.AIBHelix = Helix;
})();
