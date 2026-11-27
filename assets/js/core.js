/* AI Bel Araby — shared helpers (header, footer, progress, video links) */
(function () {
  "use strict";
  const SITE = window.SITE || {};
  const COURSES = window.COURSES || [];

  /* ---------- tiny utils ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const qs = (k) => new URLSearchParams(location.search).get(k);

  /* ---------- icons (inline SVG, stroke-based) ---------- */
  const P = {
    play: '<path d="M7 4.5v15l13-7.5z"/>',
    check: '<path d="M4.5 12.5l5 5 10-11"/>',
    file: '<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 3v5h5"/>',
    download: '<path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5"/><path d="M4.5 19.5h15"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    layers: '<path d="M12 3.5l9 4.5-9 4.5-9-4.5z"/><path d="M3 12.5l9 4.5 9-4.5"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/>',
    flask: '<path d="M9.5 3h5M10 3v6L4.8 18.2A1.8 1.8 0 0 0 6.4 21h11.2a1.8 1.8 0 0 0 1.6-2.8L14 9V3"/><path d="M7.2 14h9.6"/>',
    dna: '<path d="M6 3c0 6 12 6 12 12s-12 6-12 6"/><path d="M18 3c0 6-12 6-12 12"/><path d="M8 6.5h8M7 10h10M7 14h10M8 17.5h8"/>',
    chip: '<rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/><path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21"/>',
    chevron: '<path d="M9 5l7 7-7 7"/>',
    chevronDown: '<path d="M5 9l7 7 7-7"/>',
    left: '<path d="M15 5l-7 7 7 7"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    arrow: '<path d="M4.5 12h15m0 0l-6-6m6 6l-6 6"/>',
    notes: '<path d="M5 4h14v16H5z"/><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4"/>',
    expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    list: '<path d="M9 6.5h11M9 12h11M9 17.5h11"/><circle cx="4.5" cy="6.5" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="17.5" r="1"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 3.6 5.4 3.6 8.5s-1.1 6.1-3.6 8.5c-2.5-2.4-3.6-5.4-3.6-8.5S9.5 5.9 12 3.5z"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    users: '<circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 5.2a3.5 3.5 0 0 1 0 6.6M18 14.8c2 .7 3.2 2.4 3.5 5.2"/>',
    mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="M4 6.5l8 6.5 8-6.5"/>',
    link: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
    code: '<path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5"/>',
    data: '<ellipse cx="12" cy="6" rx="7.5" ry="2.8"/><path d="M4.5 6v12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8V6"/><path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8"/>',
    slides: '<rect x="3.5" y="4" width="17" height="12" rx="1.2"/><path d="M12 16v4M8 20h8"/>',
    zip: '<path d="M6.5 3h8L19 7.5v12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3z"/><path d="M10 3v2h2v2h-2v2h2v2h-2"/>',
    lab: '<path d="M9.5 3h5M10 3v6L4.8 18.2A1.8 1.8 0 0 0 6.4 21h11.2a1.8 1.8 0 0 0 1.6-2.8L14 9V3"/>',
    reading: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    pill: '<rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="M9.5 9.5l5 5"/>',
    cell: '<circle cx="12" cy="12" r="8.5"/><circle cx="10.5" cy="10.5" r="3"/><circle cx="16" cy="15.5" r="1"/><circle cx="8" cy="16" r=".8"/>',
    microscope: '<path d="M6 21h12M9 21a6 6 0 0 1 9-8.5"/><path d="M10 4l3 1.8-3.5 6-3-1.8zM12 12.5l1.8 1"/><path d="M11.3 3.2l.8-1.3"/>',
    protein: '<path d="M5 18c2-6 4-8 6-5s3 1 3-2-3-5 0-6 5 3 5 6"/><circle cx="5" cy="18" r="1.6"/><circle cx="19" cy="11" r="1.6"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
    keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="1.5"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7 14h10"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    trash: '<path d="M4.5 6.5h15M9.5 6.5V4h5v2.5M6.5 6.5l1 13.5h9l1-13.5"/>',
    up: '<path d="M12 19V5m0 0l-6 6m6-6l6 6"/>',
    down: '<path d="M12 5v14m0 0l-6-6m6 6l6-6"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="1.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',
    upload: '<path d="M12 16V5m0 0L7.5 9.5M12 5l4.5 4.5"/><path d="M4.5 19.5h15"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.7-4.3M4 4v4h4M4 13a8 8 0 0 0 14.7 4.3M20 20v-4h-4"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>'
  };
  const icon = (name, cls = "") =>
    `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ""}</svg>`;

  const SOCIAL = {
    facebook: '<path d="M14 8.5V6.8c0-.8.5-1.3 1.3-1.3H17V2.5h-2.6C11.8 2.5 11 4.2 11 6.3v2.2H8.5v3H11v10h3v-10h2.6l.4-3z" fill="currentColor" stroke="none"/>',
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>',
    linkedin: '<path d="M4 9.5h3.5V20H4zM5.75 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9.5h3.3V11c.5-.9 1.7-1.8 3.5-1.8 3.6 0 4.2 2.3 4.2 5.3V20h-3.5v-4.9c0-1.2 0-2.7-1.7-2.7s-2.3 1.3-2.3 2.6v5H10z" fill="currentColor" stroke="none"/>',
    youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor"/>',
    tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.7 2.2 4.4 5 4.6" />',
    telegram: '<path d="M21 4L3 11l6 2 2 6 3-4 5 4z"/><path d="M9 13l8-6"/>',
    whatsapp: '<path d="M4 20l1.3-4A8.5 8.5 0 1 1 8.4 19z"/><path d="M9 8.5c0 3.5 2.8 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2.4-1.8-2.8-2.8l.8-1-1-2z"/>'
  };

  /* ---------- course helpers ---------- */
  const getCourse = (id) => COURSES.find((c) => c.id === id) || null;
  const allLessons = (c) => {
    const out = [];
    (c.modules || []).forEach((m, mi) =>
      (m.lessons || []).forEach((l, li) => out.push(Object.assign({}, l, { _m: m, _mi: mi, _li: li, _gi: out.length })))
    );
    return out;
  };
  const isPublished = (l) => !!(l.video && String(l.video).trim());
  const parseDur = (d) => {
    // accepts "1:05:30", "45:10", "45 min", "1h 20m"
    if (!d) return 0;
    d = String(d).trim();
    if (/^\d+(:\d{1,2}){1,2}$/.test(d)) {
      const p = d.split(":").map(Number);
      return p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p[0] * 60 + p[1];
    }
    let s = 0;
    const h = d.match(/(\d+(?:\.\d+)?)\s*h/i), m = d.match(/(\d+)\s*m/i);
    if (h) s += parseFloat(h[1]) * 3600;
    if (m) s += parseInt(m[1]) * 60;
    if (!h && !m && /^\d+$/.test(d)) s = parseInt(d) * 60;
    return s;
  };
  const fmtHours = (sec) => {
    if (!sec) return "";
    const h = sec / 3600;
    return h >= 1 ? (Math.round(h * 10) / 10) + " h" : Math.round(sec / 60) + " min";
  };
  const courseStats = (c) => {
    const ls = allLessons(c);
    const secs = ls.reduce((a, l) => a + parseDur(l.duration), 0);
    const mats = ls.reduce((a, l) => a + (l.materials || []).length, 0);
    const kit = ls.reduce((a, l) => a + (l.toolkit || []).length, 0);
    return {
      modules: (c.modules || []).length,
      lessons: ls.length,
      aiTools: kit,
      labs: ls.filter((l) => l.type === "lab").length,
      published: ls.filter(isPublished).length,
      materials: mats,
      seconds: secs,
      hours: fmtHours(secs)
    };
  };

  /* ---------- progress (stored in this browser only) ---------- */
  const store = {
    get(k, fallback) {
      try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
    },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const progress = {
    key: (cid) => "aib:progress:" + cid,
    get(cid) { return store.get(this.key(cid), { done: [], last: null }); },
    save(cid, p) { store.set(this.key(cid), p); },
    isDone(cid, lid) { return this.get(cid).done.indexOf(lid) > -1; },
    toggle(cid, lid, force) {
      const p = this.get(cid);
      const i = p.done.indexOf(lid);
      const want = typeof force === "boolean" ? force : i === -1;
      if (want && i === -1) p.done.push(lid);
      if (!want && i > -1) p.done.splice(i, 1);
      this.save(cid, p);
      return want;
    },
    setLast(cid, lid) { const p = this.get(cid); p.last = lid; this.save(cid, p); },
    percent(c) {
      const ls = allLessons(c);
      if (!ls.length) return 0;
      const done = this.get(c.id).done.filter((id) => ls.some((l) => l.id === id)).length;
      return Math.round((done / ls.length) * 100);
    }
  };

  /* ---------- video link parsing ---------- */
  function parseVideo(url) {
    if (!url) return null;
    url = String(url).trim();
    let m;
    // YouTube
    if ((m = url.match(/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{11})/i))) {
      const t = url.match(/[?&#](?:t|start)=(\d+)/);
      return { provider: "youtube", id: m[1], embed: `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0&modestbranding=1&playsinline=1${t ? "&start=" + t[1] : ""}` };
    }
    if ((m = url.match(/youtube\.com\/playlist\?list=([\w-]+)/i)))
      return { provider: "youtube", embed: `https://www.youtube-nocookie.com/embed/videoseries?list=${m[1]}&rel=0` };
    // Google Drive
    if ((m = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]{10,})/i)))
      return { provider: "drive", id: m[1], embed: `https://drive.google.com/file/d/${m[1]}/preview` };
    // Vimeo
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/(\w+))?/i)))
      return { provider: "vimeo", embed: `https://player.vimeo.com/video/${m[1]}${m[2] ? "?h=" + m[2] : ""}` };
    // Internet Archive
    if ((m = url.match(/archive\.org\/(?:details|embed)\/([^?#]+)/i)))
      return { provider: "archive", embed: `https://archive.org/embed/${m[1]}` };
    // Direct file
    if (/\.(mp4|webm|ogg|ogv|mov|m4v)(\?|#|$)/i.test(url)) return { provider: "file", src: url };
    // OneDrive / other embeddable pages
    if (/^https?:\/\//i.test(url)) return { provider: "iframe", embed: url };
    return null;
  }

  function materialLink(url) {
    // Turn Google Drive "view" links into direct downloads where possible
    const m = String(url || "").match(/drive\.google\.com\/file\/d\/([\w-]{10,})/i);
    return m ? `https://drive.google.com/uc?export=download&id=${m[1]}` : url;
  }
  const MAT_ICON = { pdf: "file", slides: "slides", notebook: "code", code: "code", dataset: "data", data: "data", zip: "zip", link: "link", doc: "file", video: "play" };
  const matIcon = (t) => MAT_ICON[(t || "").toLowerCase()] || "file";
  const TYPE_LABEL = { video: "Recorded session", lab: "Hands-on lab", reading: "Reading", quiz: "Quiz" };
  const pad2 = (n) => String(n).padStart(2, "0");
  const sessionTools = (c) => Array.from(new Set(allLessons(c).flatMap((l) => l.tools || [])));
  const phoneHref = (p) => "tel:" + String(p || "").replace(/[^0-9+]/g, "");
  const typeIcon = (t) => ({ video: "play", lab: "lab", reading: "reading", quiz: "target" }[t] || "play");

  /* ---------- page chrome ---------- */
  const NAV = [
    ["index.html", "Home", "home"],
    ["courses.html", "Online Courses", "courses"],
    ["onsite-courses.html", "Onsite Courses", "onsite"],
    ["events.html", "Events", "events"],
    ["webinars.html", "Webinars", "webinars"],
    ["testimonials.html", "Testimonials", "testimonials"],
    ["hackathon.html", "RAMADAN Biotech Annual Hackathon", "hackathon"],
    ["students.html", "Our Beloved Students", "students"],
    ["team.html", "Meet the Team", "team"]
  ];
  function header(active) {
    const featured = COURSES.find((c) => c.featured) || COURSES[0];
    const links = NAV;
    const el = document.createElement("header");
    el.className = "site-header";
    el.innerHTML = `
      <div class="wrap nav">
        <a class="brand" href="index.html" aria-label="${esc(SITE.name)} home">
          <img src="assets/img/logo.png" alt="${esc(SITE.name)}" class="brand-logo" width="140" height="63">
        </a>
        <span class="nav-slogan">${esc(SITE.slogan || "")}</span>
        <div class="nav-cta">
          ${featured ? `<a class="btn btn-primary btn-sm" href="course.html?id=${encodeURIComponent(featured.id)}">Start learning ${icon("arrow")}</a>` : ""}
          <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">${icon("menu")}</button>
        </div>
      </div>
      <nav class="subnav" aria-label="Main">
        <div class="wrap subnav-inner">
          ${links.map(([h, t, k]) => `<a href="${h}" class="${k === active ? "is-active" : ""}" ${k === active ? 'aria-current="page"' : ""}>${t}</a>`).join("")}
        </div>
      </nav>
      <div class="mobile-menu" hidden>
        ${links.map(([h, t, k]) => `<a href="${h}" class="${k === active ? "is-active" : ""}">${t}</a>`).join("")}
      </div>`;
    const cur = el.querySelector(".subnav a.is-active");
    if (cur) requestAnimationFrame(() => cur.scrollIntoView({ block: "nearest", inline: "center" }));
    document.body.prepend(el);
    const btn = $(".nav-toggle", el), mm = $(".mobile-menu", el);
    btn.addEventListener("click", () => {
      const open = mm.hasAttribute("hidden");
      mm.toggleAttribute("hidden", !open);
      btn.setAttribute("aria-expanded", String(open));
      btn.innerHTML = icon(open ? "x" : "menu");
    });
    $$("a", mm).forEach((a) => a.addEventListener("click", () => { mm.setAttribute("hidden", ""); btn.innerHTML = icon("menu"); }));
    const onScroll = () => el.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function socialLinks() {
    const s = SITE.social || {};
    return Object.keys(SOCIAL)
      .filter((k) => s[k])
      .map((k) => `<a href="${esc(s[k])}" target="_blank" rel="noopener" aria-label="${k}"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${SOCIAL[k]}</svg></a>`)
      .join("");
  }

  function footer() {
    const el = document.createElement("footer");
    el.className = "site-footer";
    const year = new Date().getFullYear();
    el.innerHTML = `
      <div class="wrap footer-grid">
        <div class="footer-brand">
          <img src="assets/img/logo-light.png" alt="${esc(SITE.name)}" width="170" height="77">
          <p class="footer-slogan">${esc(SITE.slogan)}</p>
          ${SITE.sloganAr ? `<p class="footer-ar" lang="ar" dir="rtl">${esc(SITE.sloganAr)}</p>` : ""}
          <div class="socials">${socialLinks()}</div>
        </div>
        <div>
          <h4>Learn</h4>
          <a href="courses.html">Online Courses</a>
          ${COURSES.filter((c) => (c.mode || "online") === "online").slice(0, 4).map((c) => `<a href="course.html?id=${encodeURIComponent(c.id)}">${esc(c.title)}</a>`).join("")}
        </div>
        <div>
          <h4>Community</h4>
          ${NAV.slice(2).map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}
        </div>
        <div>
          <h4>Contact</h4>
          ${SITE.contactPhone ? `<a href="${phoneHref(SITE.contactPhone)}">For more details: ${esc(SITE.contactPhone)}</a>` : ""}
          ${SITE.contactEmail ? `<a href="mailto:${esc(SITE.contactEmail)}">${esc(SITE.contactEmail)}</a>` : ""}
          ${!SITE.contactPhone && !SITE.contactEmail ? `<span class="muted-light">Follow us for new sessions</span>` : ""}
        </div>
      </div>
      <div class="wrap footer-bottom">
        <span>© ${year} ${esc(SITE.name)}. When AI Meets Biotechnology.</span>
        <span class="mono">AI × BIOTECH</span>
      </div>`;
    document.body.append(el);
  }

  /* ---------- reveal-on-scroll ---------- */
  function reveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((i) => i.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((i) => io.observe(i));
  }

  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.append(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove("show"), 2200);
  }

  window.AIB = { pad2, sessionTools, phoneHref, SITE, COURSES, $, $$, esc, qs, icon, getCourse, allLessons, isPublished, courseStats, parseDur, fmtHours, progress, store, parseVideo, materialLink, matIcon, TYPE_LABEL, typeIcon, header, footer, reveal, toast };
})();
