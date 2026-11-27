/* AI Bel Araby — page logic for home, catalog, course and learn pages */
(function () {
  "use strict";
  const A = window.AIB;
  const { $, $$, esc, icon, qs, COURSES, SITE, progress } = A;
  const page = document.body.dataset.page;
  const featured = COURSES.find((c) => c.featured) || COURSES[0];
  const courseUrl = (c) => `course.html?id=${encodeURIComponent(c.id)}`;
  const lessonUrl = (c, l) => `learn.html?c=${encodeURIComponent(c.id)}&l=${encodeURIComponent(l.id)}`;
  const pad = (n) => String(n).padStart(2, "0");
  const ACC = { open: "Open", free: "Free", commercial: "Commercial" };
  const toolkitGrid = (kit) => `<div class="kit">${kit.map((t, i) => `<div class="kit-item"><span class="kit-n">${pad(i + 1)}</span><div><div class="kit-top"><b>${esc(t.name)}</b><span class="acc ${esc(t.access)}">${ACC[t.access] || esc(t.access)}</span></div><p>${esc(t.desc)}</p></div></div>`).join("")}</div>`;
  function sessionOverview(l) {
    let h = "";
    if ((l.learn || []).length) h += `<h3 class="ov-h">What you will learn</h3><ul class="clean ov-list">${l.learn.map((x) => `<li>${icon("check")}<span>${esc(x)}</span></li>`).join("")}</ul>`;
    if ((l.areas || []).length) h += `<div class="tools" style="margin:18px 0 4px">${l.areas.map((x) => `<span class="chip chip-dark">${esc(x)}</span>`).join("")}</div>`;
    if (l.demo) h += `<div class="demo">${icon("play")}<div><span class="eyebrow light">Live demo</span><p>${esc(l.demo)}</p></div></div>`;
    if ((l.tools || []).length) h += `<h3 class="ov-h">Tools you will use</h3><div class="tools">${l.tools.map((t) => `<span class="chip chip-dark">${icon("code")} ${esc(t)}</span>`).join("")}</div>`;
    if ((l.toolkit || []).length) h += `<h3 class="ov-h">The ${l.toolkit.length} tools</h3><div class="legend dark"><span class="acc open">Open-source / open data</span><span class="acc free">Free to use online</span><span class="acc commercial">Commercial</span></div>${toolkitGrid(l.toolkit)}`;
    if (l.takeaway) h += `<blockquote class="takeaway"><span class="eyebrow light">Key takeaway</span><p>${esc(l.takeaway)}</p></blockquote>`;
    const notes = (l.notes || "").trim();
    if (notes) h += `<h3 class="ov-h">Notes</h3><div class="rich">${/<[a-z][\s\S]*>/i.test(notes) ? notes : notes.split(/\n{2,}/).map((pp) => `<p>${esc(pp).replace(/\n/g, "<br>")}</p>`).join("")}</div>`;
    return h;
  }

  function fillIcons(root) { $$("[data-icon]", root).forEach((el) => { el.innerHTML = icon(el.dataset.icon); }); }

  /** Where should "Start / Continue" take the learner? */
  function resumeTarget(c) {
    const ls = A.allLessons(c);
    if (!ls.length) return { href: courseUrl(c), label: "View course", started: false };
    const p = progress.get(c.id);
    const started = p.done.length > 0 || !!p.last;
    let target = ls.find((l) => l.id === p.last);
    if (!target) target = ls.find((l) => p.done.indexOf(l.id) === -1) || ls[0];
    return { href: lessonUrl(c, target), label: started ? "Continue learning" : "Start learning", started, lesson: target };
  }

  /* ================= HOME ================= */
  function home() {
    A.header("home");
    A.footer();
    fillIcons(document);
    if (!featured) return;
    const st = A.courseStats(featured);
    const go = resumeTarget(featured);

    $("#heroStart").href = courseUrl(featured);
    $("#ctaStart").href = go.href;

    $("#heroMeta").innerHTML = [
      ["spark", "100% free"],
      ["clock", "Learn at your own pace"],
      ["lab", "Hands-on demo every session"],
      ["target", "Progress tracking"]
    ].map(([i, t]) => `<span>${icon(i)}${t}</span>`).join("");

    const mods = featured.modules || [];
    $("#heroCard").innerHTML = `
      <div class="hc-top">
        <span class="hc-badge"><span class="pulse"></span> Now open</span>
        <span class="chip chip-dark">${esc(featured.level || "")}</span>
      </div>
      <h3>${esc(featured.title)}</h3>
      <p>${esc(featured.subtitle || "")}</p>
      <div class="hc-modules">
        ${mods.slice(0, 5).map((m, i) => `<div><span class="n">M${i + 1}</span>${esc(m.title)}<span style="margin-left:auto;color:rgba(255,255,255,.4);font-size:.8rem">${(m.lessons || []).length} sessions</span></div>`).join("")}
        ${mods.length > 5 ? `<div><span class="n">+${mods.length - 5}</span><span style="color:rgba(255,255,255,.5)">more modules</span></div>` : ""}
      </div>
      <div class="hc-stats">
        <div><b>${st.lessons}</b><span>Sessions</span></div>
        <div><b>${st.aiTools}</b><span>AI tools</span></div>
        <div><b>${st.modules}</b><span>Modules</span></div>
      </div>
      <a class="btn btn-primary" style="width:100%" href="${courseUrl(featured)}">View course ${icon("arrow")}</a>`;

    const words = ["Python", "Machine Learning", "Deep Learning", "Genomics", "AlphaFold", "Protein Design", "Drug Discovery", "Medical Imaging", "LLMs for Science"];
    $("#ticker").innerHTML = words.concat(words).map((w) => `<span>${w}</span>`).join("");

    const all = COURSES.map(A.courseStats);
    const sum = (k) => all.reduce((a, s) => a + s[k], 0);
    $("#stats").innerHTML = `
      <div class="stat"><b>${sum("lessons")}</b><span>Recorded sessions</span></div>
      <div class="stat"><b>${sum("aiTools")}</b><span>Real AI tools</span></div>
      <div class="stat"><b>${pad(sum("modules"))}</b><span>Learning modules</span></div>
      <div class="stat"><b><em>Free</em></b><span>For every learner, always</span></div>`;

    const p = progress.percent(featured);
    $("#featuredCourse").innerHTML = `
      <article class="featured">
        <div class="featured-visual">
          <canvas id="featCanvas" aria-hidden="true"></canvas>
          <div class="fv-label">
            <img src="assets/img/logo-light.png" alt="" width="120" height="54">
            <span class="mono" style="font-size:.75rem;color:rgba(255,255,255,.55)">COURSE 01</span>
          </div>
        </div>
        <div class="featured-body">
          <div><span class="chip chip-red">${esc(featured.level || "")}</span></div>
          <h3>${esc(featured.title)}</h3>
          ${featured.titleAr ? `<p class="ar" lang="ar" dir="rtl">${esc(featured.titleAr)}</p>` : ""}
          <p>${esc(featured.subtitle || "")}</p>
          <div class="meta-row">
            <span class="chip">${icon("layers")} ${st.modules} modules</span>
            <span class="chip">${icon("play")} ${st.lessons} sessions</span>
            <span class="chip">${icon("chip")} ${st.aiTools} AI tools</span>
            ${st.hours ? `<span class="chip">${icon("clock")} ${st.hours}</span>` : ""}
          </div>
          ${p > 0 ? `<div style="margin-bottom:18px"><div style="display:flex;justify-content:space-between;font-size:.85rem;color:var(--muted);margin-bottom:6px"><span>Your progress</span><span>${p}%</span></div><div class="bar"><i style="width:${p}%"></i></div></div>` : ""}
          <div class="actions">
            <a class="btn btn-primary" href="${go.href}">${go.label} ${icon("arrow")}</a>
            <a class="btn btn-ghost" href="${courseUrl(featured)}#curriculum">See curriculum</a>
          </div>
        </div>
      </article>`;

    const tracks = [
      ["dna", "Genomics", "Deep-learning variant calling, expression signatures, single-cell data and DNA language models.", "s05"],
      ["protein", "Protein structure", "How AlphaFold solved protein folding, and how to judge a predicted structure with pLDDT and PAE.", "s06"],
      ["spark", "Protein design", "Generative AI that designs proteins nature never made: ESM, RFdiffusion and ProteinMPNN.", "s07"],
      ["pill", "Drug discovery", "From target to clinic: molecules as data, virtual screening, ADMET prediction and generative chemistry.", "s08"],
      ["microscope", "Microscopy & medical imaging", "AI that sees: cell counting, digital pathology and X-ray, CT and MRI.", "s09"],
      ["chat", "LLMs for scientists", "Using AI assistants for papers, protocols and code, and catching their confident mistakes.", "s10"]
    ];
    const lsF = A.allLessons(featured);
    $("#trackGrid").innerHTML = tracks.map(([ic, t, d, lid], i) => {
      const l = lsF.find((x) => x.id === lid);
      const href = l ? lessonUrl(featured, l) : courseUrl(featured);
      return `<a class="track reveal ${i % 3 === 1 ? "d1" : i % 3 === 2 ? "d2" : ""}" href="${href}">
        <span class="t-num">${pad(i + 1)}</span>
        <span class="t-ico">${icon(ic)}</span>
        <h3>${t}</h3><p>${d}</p>
        ${l ? `<span class="t-mod">SESSION ${pad(l._gi + 1)} · MODULE ${l._mi + 1} · ${esc(l._m.title).toUpperCase()}</span>` : ""}
      </a>`;
    }).join("");

    const hero = $("#heroCanvas");
    window.AIBHelix(hero, window.innerWidth < 960 ? { cx: 0.7, cy: 0.2, angle: -0.35, amp: 0.1, length: 1, particles: 26 } : { cx: 0.615, cy: 0.5, angle: -1.12, length: 1.05, amp: 0.085, turns: 3, pairs: 44 });
    window.AIBHelix($("#featCanvas"), { cx: 0.5, cy: 0.45, angle: -0.6, amp: 0.13, turns: 2.6, pairs: 34, particles: 22, link: 100, seed: 3 });
    A.reveal();
  }

  /* ================= CATALOG ================= */
  function catalog() {
    A.header("courses");
    A.footer();
    const grid = $("#courseGrid"), input = $("#q"), filt = $("#filters");
    const tags = Array.from(new Set(COURSES.flatMap((c) => c.tags || [])));
    let active = "All";
    filt.innerHTML = ["All"].concat(tags).map((t) => `<button class="filter ${t === "All" ? "is-on" : ""}" data-t="${esc(t)}">${esc(t)}</button>`).join("");
    filt.addEventListener("click", (e) => {
      const b = e.target.closest(".filter"); if (!b) return;
      active = b.dataset.t;
      $$(".filter", filt).forEach((x) => x.classList.toggle("is-on", x === b));
      render();
    });
    input.addEventListener("input", render);
    const pre = qs("q"); if (pre) input.value = pre;

    function card(c, i) {
      const st = A.courseStats(c), p = progress.percent(c), go = resumeTarget(c);
      const soon = c.status === "soon";
      return `<article class="ccard reveal">
        <a class="ccard-cover" href="${courseUrl(c)}" aria-label="${esc(c.title)}">
          <canvas data-seed="${i + 2}" aria-hidden="true"></canvas>
          <span class="cc-tag chip ${soon ? "chip-dark" : "chip-red"}">${soon ? "Coming soon" : esc(c.level || "Course")}</span>
          <span class="cc-title">${esc(c.title)}</span>
        </a>
        <div class="ccard-body">
          <p>${esc(c.subtitle || "")}</p>
          <div class="ccard-meta">
            <span>${icon("layers")}${st.modules} modules</span>
            <span>${icon("play")}${st.lessons} sessions</span>
            ${st.aiTools ? `<span>${icon("chip")}${st.aiTools} AI tools</span>` : ""}
            ${st.hours ? `<span>${icon("clock")}${st.hours}</span>` : ""}
          </div>
          ${p > 0 ? `<div class="bar" title="${p}% complete"><i style="width:${p}%"></i></div>` : ""}
          <div class="ccard-foot">
            <span class="price">${esc(c.price || "Free")}</span>
            <a class="btn btn-dark btn-sm" href="${soon ? courseUrl(c) : p > 0 ? go.href : courseUrl(c)}">${soon ? "Details" : p > 0 ? "Continue" : "View course"} ${icon("arrow")}</a>
          </div>
        </div>
      </article>`;
    }
    function render() {
      const q = input.value.trim().toLowerCase();
      const list = COURSES.filter((c) => {
        if (active !== "All" && (c.tags || []).indexOf(active) === -1) return false;
        if (!q) return true;
        const hay = [c.title, c.titleAr, c.subtitle, c.description, (c.tags || []).join(" ")]
          .concat(A.allLessons(c).map((l) => l.title)).concat((c.modules || []).map((m) => m.title)).join(" ").toLowerCase();
        return hay.indexOf(q) > -1;
      });
      grid.innerHTML = list.length
        ? list.map(card).join("") + (q || active !== "All" ? "" : `<div class="ccard soon reveal">${icon("spark")}<h3>More courses on the way</h3><p class="muted" style="margin-top:8px;max-width:260px">New courses on AI in science are in production. Follow us to hear first.</p></div>`)
        : `<div class="empty">No courses match “${esc(q)}”. Try another keyword.</div>`;
      $$(".ccard-cover canvas", grid).forEach((cv) => window.AIBHelix(cv, { cx: 0.62, cy: 0.42, angle: -0.5, amp: 0.13, turns: 2.4, pairs: 28, particles: 16, link: 90, interactive: false, seed: +cv.dataset.seed }));
      A.reveal();
    }
    render();
  }

  /* ================= COURSE DETAIL ================= */
  function course() {
    A.header("courses");
    A.footer();
    const root = $("#courseRoot");
    const c = A.getCourse(qs("id")) || featured;
    if (!c) { root.innerHTML = `<div class="wrap section"><div class="empty">Course not found. <a href="courses.html" style="color:var(--red)">Browse all courses</a>.</div></div>`; return; }
    document.title = `${c.title} — ${SITE.name}`;
    const st = A.courseStats(c);
    const go = resumeTarget(c);
    const p = progress.get(c.id);
    const pct = progress.percent(c);
    const ls = A.allLessons(c);
    const tools = (c.tools || []).length ? c.tools : A.sessionTools(c);
    const kits = ls.filter((l) => (l.toolkit || []).length);
    const mats = ls.flatMap((l) => (l.materials || []).map((m) => Object.assign({ lesson: l }, m)));

    const lessonRow = (l, idx) => {
      const done = p.done.indexOf(l.id) > -1;
      const pub = A.isPublished(l);
      return `<a class="lesson-row ${done ? "done" : ""}" href="${lessonUrl(c, l)}">
        <span class="l-ico">${icon(done ? "check" : A.typeIcon(l.type))}</span>
        <span><span class="l-num">${pad(l._gi + 1)}</span>${esc(l.title)}</span>
        <span class="l-meta">
          ${l.type === "lab" ? `<span class="lab">Lab</span>` : ""}
          ${(l.toolkit || []).length ? `<span class="lab">${l.toolkit.length} tools</span>` : ""}
          ${!pub ? `<span class="soon">Soon</span>` : ""}
          ${l.duration ? `<span>${esc(l.duration)}</span>` : ""}
          ${(l.materials || []).length ? `<span title="Materials">${icon("file")}${l.materials.length}</span>` : ""}
        </span>
      </a>`;
    };

    root.innerHTML = `
      <section class="page-head course-hero">
        <div class="wrap">
          <div class="crumbs"><a href="index.html">Home</a>${icon("chevron")}<a href="courses.html">Courses</a>${icon("chevron")}<span>${esc(c.title)}</span></div>
          <h1>${esc(c.title)}</h1>
          ${c.titleAr ? `<p class="ar-title" lang="ar" dir="rtl">${esc(c.titleAr)}</p>` : ""}
          <p>${esc(c.subtitle || "")}</p>
          <div class="facts">
            <span>${icon("target")}${esc(c.level || "")}</span>
            <span>${icon("layers")}${st.modules} modules</span>
            <span>${icon("play")}${st.lessons} recorded sessions</span>
            ${st.aiTools ? `<span>${icon("chip")}${st.aiTools} real AI tools</span>` : ""}
            ${st.hours ? `<span>${icon("clock")}${st.hours} of video</span>` : ""}
            <span>${icon("globe")}${esc(c.language || "")}</span>
          </div>
          <div class="tags">${(c.tags || []).map((t) => `<span class="chip chip-dark">${esc(t)}</span>`).join("")}</div>
          ${(c.badges || []).length ? `<div class="badges">${c.badges.map((b) => `<span>${icon("check")}${esc(b)}</span>`).join("")}</div>` : ""}
        </div>
      </section>

      <div class="wrap course-layout">
        <div class="course-main">
          <nav class="tabs" aria-label="Course sections">
            <a href="#overview" class="is-on">Overview</a>
            <a href="#curriculum">Curriculum</a>
            ${kits.length ? `<a href="#toolkits">AI tools</a>` : ""}
            <a href="#materials">Materials</a>
            <a href="#instructors">Instructors</a>
            ${(c.faq || []).length ? `<a href="#course-faq">FAQ</a>` : ""}
          </nav>

          <section class="panel" id="overview">
            <h2>About this course</h2>
            <p>${esc(c.description || "")}</p>
          </section>

          ${(c.outcomes || []).length ? `<section class="panel">
            <h2>What you'll learn</h2>
            <ul class="clean outcomes">${c.outcomes.map((o) => `<li>${icon("check")}<span>${esc(o)}</span></li>`).join("")}</ul>
          </section>` : ""}

          <section class="panel two-col">
            <div><h3>Who it's for</h3><ul class="clean plain">${(c.audience || []).map((o) => `<li>${icon("users")}<span>${esc(o)}</span></li>`).join("")}</ul></div>
            <div><h3>Before you start</h3><ul class="clean plain">${(c.prerequisites || []).map((o) => `<li>${icon("chevron")}<span>${esc(o)}</span></li>`).join("")}</ul></div>
          </section>

          ${tools.length ? `<section class="panel"><h2 style="font-size:1.3rem">Tools you'll use in the demos</h2><div class="tools">${tools.map((t) => `<span class="chip">${icon("code")} ${esc(t)}</span>`).join("")}</div></section>` : ""}

          <section class="panel" id="curriculum">
            <div class="cur-head">
              <div><h2>Curriculum</h2><p class="muted" style="font-size:.92rem;margin-top:4px">${st.modules} modules · ${st.lessons} sessions${st.published && st.published < st.lessons ? ` · ${st.published} released so far` : ""}</p></div>
              <button class="linkbtn" id="toggleAll">Expand all</button>
            </div>
            ${(c.modules || []).map((m, i) => `
              <details class="module" id="${esc(m.id)}" ${i === 0 ? "open" : ""}>
                <summary>
                  <span class="m-num">M${i + 1}</span>
                  <span><div class="m-title">${esc(m.title)}</div>${m.summary ? `<div class="m-sub">${esc(m.summary)}</div>` : ""}</span>
                  <span class="m-right"><span class="count">${(m.lessons || []).length} sessions</span>${icon("chevronDown", "chev")}</span>
                </summary>
                ${ls.filter((x) => x._mi === i).map(lessonRow).join("")}
              </details>`).join("")}
          </section>

          ${kits.length ? `<section class="panel" id="toolkits">
            <h2>${st.aiTools} real AI tools you'll meet</h2>
            <p style="margin-bottom:22px">The final module tours the AI tools used today in labs, hospitals and drug pipelines.</p>
            <div class="legend"><span class="acc open">Open-source / open data</span><span class="acc free">Free to use online</span><span class="acc commercial">Commercial</span></div>
            ${kits.map((l) => `<h3 class="kit-h">Session ${pad(l._gi + 1)} · ${esc(l.title)}</h3>${toolkitGrid(l.toolkit)}`).join("")}
          </section>` : ""}
          <section class="panel" id="materials">
            <h2>Course materials</h2>
            ${mats.length ? `<div class="mats">${mats.map((m) => `
              <a class="mat" href="${esc(A.materialLink(m.url))}" target="_blank" rel="noopener">
                <span class="m-ic">${icon(A.matIcon(m.type))}</span>
                <span><b>${esc(m.label || "Material")}</b><small>${esc(m.lesson.title)}${m.size ? " · " + esc(m.size) : ""}</small></span>
                <span class="dl">${icon("download")}</span>
              </a>`).join("")}</div>`
              : `<p>Slides, papers, datasets and notebooks will appear here as each session is released.</p>`}
          </section>

          <section class="panel" id="instructors">
            <h2>Instructors</h2>
            <div style="display:grid;gap:22px">
            ${(c.instructors || []).map((ins) => `
              <div class="instructor">
                <div class="avatar ${ins.photo ? "" : "mark"}"><img src="${esc(ins.photo || "assets/img/mark-light.png")}" alt="${esc(ins.name)}"></div>
                <div><b style="font-size:1.08rem">${esc(ins.name)}</b><div class="muted" style="font-size:.9rem">${esc(ins.role || "")}</div><p class="muted" style="margin-top:6px;font-size:.95rem">${esc(ins.bio || "")}</p></div>
              </div>`).join("")}
            </div>
          </section>

          ${(c.faq || []).length ? `<section class="panel" id="course-faq"><h2>Course FAQ</h2><div class="faq" style="max-width:none">${c.faq.map((f) => `<details><summary>${esc(f.q)} ${icon("plus")}</summary><div class="ans">${esc(f.a)}</div></details>`).join("")}</div></section>` : ""}
        </div>

        <aside class="side">
          <div class="side-card">
            <a class="side-preview" href="${go.href}" aria-label="${go.label}">
              <canvas id="sideCanvas" aria-hidden="true"></canvas>
              <span class="play-btn"><svg class="ico" viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg></span>
            </a>
            <div class="side-body">
              <div class="price-big">${esc(c.price || "Free")}<small>full access</small></div>
              <a class="btn btn-primary btn-lg" href="${go.href}">${go.label} ${icon("arrow")}</a>
              ${go.started ? `<p class="muted" style="font-size:.85rem;margin-top:10px">Up next: Session ${go.lesson ? pad(go.lesson._gi + 1) + " · " + esc(go.lesson.title) : ""}</p>` : ""}
              <div class="side-prog">
                <div class="row"><span>Your progress</span><span>${pct}% · ${p.done.length}/${st.lessons}</span></div>
                <div class="bar"><i style="width:${pct}%"></i></div>
              </div>
              <div class="includes">
                <div>${icon("play")}${st.lessons} recorded sessions</div>
                ${st.aiTools ? `<div>${icon("chip")}${st.aiTools} real AI tools</div>` : ""}
                <div>${icon("lab")}Hands-on demo every session</div>
                <div>${icon("download")}Downloadable slides & datasets</div>
                <div>${icon("notes")}Personal notes for every session</div>
                <div>${icon("globe")}Watch on any device</div>
                <div>${icon("spark")}Free, no account needed</div>
              </div>
              ${SITE.contactPhone ? `<a class="contact-line" href="${A.phoneHref(SITE.contactPhone)}">${icon("chat")}<span>For more details<b>${esc(SITE.contactPhone)}</b></span></a>` : ""}
              <div class="share-row">
                <button class="btn btn-ghost btn-sm" id="copyLink">${icon("link")} Copy link</button>
                ${navigator.share ? `<button class="btn btn-ghost btn-sm" id="shareBtn">${icon("arrow")} Share</button>` : ""}
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div style="height:80px"></div>`;

    window.AIBHelix($("#sideCanvas"), { cx: 0.5, cy: 0.5, angle: -0.45, amp: 0.15, turns: 2.2, pairs: 26, particles: 14, link: 80, seed: 7 });

    // expand all
    const tg = $("#toggleAll");
    tg.addEventListener("click", () => {
      const ds = $$(".module", root), anyClosed = ds.some((d) => !d.open);
      ds.forEach((d) => (d.open = anyClosed));
      tg.textContent = anyClosed ? "Collapse all" : "Expand all";
    });
    // open a module from #hash
    const openHash = () => { const h = decodeURIComponent(location.hash.slice(1)); const d = h && document.getElementById(h); if (d && d.tagName === "DETAILS") { d.open = true; setTimeout(() => d.scrollIntoView({ behavior: "smooth", block: "start" }), 50); } };
    openHash(); window.addEventListener("hashchange", openHash);

    // tabs scroll-spy
    const tabs = $$(".tabs a", root);
    const secs = tabs.map((a) => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
    const spy = () => {
      let cur = secs[0];
      secs.forEach((s) => { if (s.getBoundingClientRect().top < 180) cur = s; });
      tabs.forEach((a) => a.classList.toggle("is-on", a.getAttribute("href") === "#" + cur.id));
    };
    window.addEventListener("scroll", spy, { passive: true }); spy();

    $("#copyLink").addEventListener("click", () => {
      const url = location.href.split("#")[0];
      (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(() => A.toast("Link copied"), () => A.toast(url));
    });
    const sb = $("#shareBtn");
    if (sb) sb.addEventListener("click", () => navigator.share({ title: c.title, text: c.subtitle, url: location.href.split("#")[0] }).catch(() => {}));
    // style.css scroll-margin for anchors
    $$(".panel, .module", root).forEach((s) => (s.style.scrollMarginTop = "200px"));
  }

  /* ================= LEARN (player) ================= */
  function learn() {
    const c = A.getCourse(qs("c")) || featured;
    const app = $("#learnApp");
    if (!c) { app.innerHTML = `<div style="padding:60px;text-align:center">Course not found. <a href="courses.html" style="color:var(--red-300)">Browse courses</a></div>`; return; }
    const ls = A.allLessons(c);
    if (!ls.length) { location.replace(courseUrl(c)); return; }
    let idx = Math.max(0, ls.findIndex((l) => l.id === qs("l")));
    let filter = "";
    const notesKey = (lid) => `aib:notes:${c.id}:${lid}`;

    app.innerHTML = `
      <header class="p-top">
        <a class="p-back" href="${courseUrl(c)}" title="Back to course">${icon("left")}<img src="assets/img/mark-light.png" alt="" width="30" height="34"><span class="p-ctitle">${esc(c.title)}</span></a>
        <div class="p-prog"><span id="progText"></span><div class="bar dark"><i id="progBar"></i></div></div>
        <button class="p-iconbtn" id="sideToggle" aria-label="Toggle curriculum" title="Curriculum">${icon("list")}</button>
      </header>
      <div class="p-body">
        <main class="p-main">
          <div class="stage" id="stage"></div>
          <div class="p-under">
            <div class="p-lhead">
              <div>
                <span class="eyebrow light" id="lEyebrow"></span>
                <h1 id="lTitle"></h1>
                <div class="p-lmeta" id="lMeta"></div>
              </div>
              <div class="p-actions">
                <button class="btn btn-ghost-light btn-sm" id="prevBtn" title="Previous (P)">${icon("left")} Prev</button>
                <button class="btn btn-primary btn-sm" id="doneBtn" title="Mark complete (M)"></button>
                <button class="btn btn-ghost-light btn-sm" id="nextBtn" title="Next (N)">Next ${icon("chevron")}</button>
              </div>
            </div>
            <div class="p-tabs" role="tablist">
              <button role="tab" data-tab="ov" class="is-on">Overview</button>
              <button role="tab" data-tab="mat" id="matTab">Materials</button>
              <button role="tab" data-tab="notes">My notes</button>
            </div>
            <section class="p-panel" data-panel="ov" id="pOverview"></section>
            <section class="p-panel" data-panel="mat" id="pMaterials" hidden></section>
            <section class="p-panel" data-panel="notes" hidden>
              <textarea id="myNotes" placeholder="Write your notes for this session… they are saved automatically on this device."></textarea>
              <div class="notes-bar"><span class="muted-light" id="noteState">Saved locally</span><button class="btn btn-ghost-light btn-sm" id="exportNotes">${icon("download")} Export all my notes</button></div>
            </section>
            <p class="kbd-hint">${icon("keyboard")} Shortcuts: <kbd>N</kbd> next · <kbd>P</kbd> previous · <kbd>M</kbd> mark complete</p>
          </div>
        </main>
        <aside class="p-side" id="pSide">
          <div class="p-side-head">
            <b>Course content</b>
            <div class="p-search">${icon("search")}<input id="lessonFilter" placeholder="Search sessions" aria-label="Search sessions"></div>
          </div>
          <div class="p-list" id="pList"></div>
        </aside>
      </div>`;

    const side = $("#pSide");
    $("#sideToggle").addEventListener("click", () => document.body.classList.toggle("side-collapsed"));
    if (window.innerWidth < 1000) document.body.classList.add("side-collapsed");

    $$(".p-tabs button").forEach((b) => b.addEventListener("click", () => {
      $$(".p-tabs button").forEach((x) => x.classList.toggle("is-on", x === b));
      $$(".p-panel").forEach((p) => (p.hidden = p.dataset.panel !== b.dataset.tab));
    }));

    $("#lessonFilter").addEventListener("input", (e) => { filter = e.target.value.trim().toLowerCase(); renderList(); });

    const ta = $("#myNotes");
    let saveT;
    ta.addEventListener("input", () => {
      $("#noteState").textContent = "Saving…";
      clearTimeout(saveT);
      saveT = setTimeout(() => { A.store.set(notesKey(ls[idx].id), ta.value); $("#noteState").textContent = "Saved locally"; }, 400);
    });
    $("#exportNotes").addEventListener("click", () => {
      let out = `${c.title} — my notes\n${"=".repeat(40)}\n\n`;
      ls.forEach((l) => { const n = A.store.get(notesKey(l.id), ""); if (n) out += `■ ${l._m.title} › ${l.title}\n${n}\n\n`; });
      const blob = new Blob([out], { type: "text/plain;charset=utf-8" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `${c.id}-notes.txt`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });

    $("#prevBtn").addEventListener("click", () => go(idx - 1));
    $("#nextBtn").addEventListener("click", () => go(idx + 1));
    $("#doneBtn").addEventListener("click", () => {
      const now = progress.toggle(c.id, ls[idx].id);
      A.toast(now ? "Marked as complete ✓" : "Marked as not complete");
      if (now && idx < ls.length - 1) setTimeout(() => go(idx + 1), 500);
      else update();
    });
    document.addEventListener("keydown", (e) => {
      if (/input|textarea|select/i.test(e.target.tagName) || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (k === "n") go(idx + 1); else if (k === "p") go(idx - 1); else if (k === "m") $("#doneBtn").click();
    });
    window.addEventListener("popstate", () => { const i = ls.findIndex((l) => l.id === qs("l")); if (i > -1) { idx = i; render(); } });

    function go(i) {
      if (i < 0 || i >= ls.length || i === idx) return;
      idx = i;
      history.pushState(null, "", lessonUrl(c, ls[idx]));
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.innerWidth < 1000) document.body.classList.add("side-collapsed");
    }

    function renderStage(l) {
      const stage = $("#stage");
      const v = A.parseVideo(l.video);
      if (!v) {
        stage.innerHTML = `<div class="stage-empty"><canvas id="stageCanvas" aria-hidden="true"></canvas>
          <div class="se-inner"><span class="eyebrow light">Session ${pad(idx + 1)}</span>
          <h2>${A.isPublished(l) ? "Read the notes & materials below" : "This session is coming soon"}</h2>
          <p>${A.isPublished(l) ? "This lesson has no video — open the materials tab." : "It will appear right here as soon as it's released."}</p></div></div>`;
        window.AIBHelix($("#stageCanvas"), { cx: 0.5, cy: 0.5, angle: -0.3, amp: 0.12, turns: 3, pairs: 40, particles: 30, seed: idx + 4 });
        return;
      }
      if (v.provider === "file") {
        stage.innerHTML = `<video controls playsinline preload="metadata" src="${esc(v.src)}"></video>`;
        $("video", stage).addEventListener("ended", () => { if (!progress.isDone(c.id, l.id)) { progress.toggle(c.id, l.id, true); A.toast("Session complete ✓"); update(); } });
      } else {
        stage.innerHTML = `<iframe src="${esc(v.embed)}" title="${esc(l.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>`;
      }
    }

    function renderList() {
      const p = progress.get(c.id);
      let html = "", n = 0;
      (c.modules || []).forEach((m, mi) => {
        const rows = (m.lessons || []).map((l) => {
          const gi = n++;
          if (filter && (l.title + " " + m.title).toLowerCase().indexOf(filter) === -1) return "";
          const done = p.done.indexOf(l.id) > -1;
          return `<a class="p-item ${gi === idx ? "is-cur" : ""} ${done ? "done" : ""}" href="${lessonUrl(c, l)}" data-i="${gi}">
            <span class="p-check">${icon(done ? "check" : A.typeIcon(l.type))}</span>
            <span class="p-it"><b class="p-n">${pad(gi + 1)}</b> ${esc(l.title)}${!A.isPublished(l) ? ` <em>soon</em>` : ""}</span>
            ${l.duration ? `<span class="p-dur">${esc(l.duration)}</span>` : ""}
          </a>`;
        }).join("");
        if (!rows) return;
        const doneCount = (m.lessons || []).filter((l) => p.done.indexOf(l.id) > -1).length;
        html += `<div class="p-mod"><div class="p-mod-h"><span class="mono">M${mi + 1}</span><span>${esc(m.title)}</span><small>${doneCount}/${(m.lessons || []).length}</small></div>${rows}</div>`;
      });
      $("#pList").innerHTML = html || `<p class="muted-light" style="padding:20px">No sessions match.</p>`;
      $$(".p-item", side).forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); go(+a.dataset.i); }));
      const cur = $(".p-item.is-cur", side);
      if (cur && !filter) cur.scrollIntoView({ block: "nearest" });
    }

    function update() {
      const l = ls[idx];
      const done = progress.isDone(c.id, l.id);
      const db = $("#doneBtn");
      db.innerHTML = done ? `${icon("check")} Completed` : `${icon("check")} Mark complete`;
      db.classList.toggle("is-done", done);
      const pct = progress.percent(c);
      $("#progText").textContent = `${progress.get(c.id).done.filter((id) => ls.some((x) => x.id === id)).length}/${ls.length} · ${pct}%`;
      $("#progBar").style.width = pct + "%";
      renderList();
    }

    function render() {
      const l = ls[idx];
      progress.setLast(c.id, l.id);
      document.title = `${l.title} — ${c.title}`;
      renderStage(l);
      $("#lEyebrow").textContent = `Module ${l._mi + 1} · ${l._m.title}`;
      $("#lTitle").textContent = l.title;
      $("#lMeta").innerHTML = [
        `<span>${icon(A.typeIcon(l.type))}${A.TYPE_LABEL[l.type] || "Session"}</span>`,
        l.duration ? `<span>${icon("clock")}${esc(l.duration)}</span>` : "",
        `<span>${icon("list")}Session ${pad(idx + 1)} of ${pad(ls.length)}</span>`
      ].join("");
      $("#prevBtn").disabled = idx === 0;
      $("#nextBtn").disabled = idx === ls.length - 1;

      const ov = sessionOverview(l);
      $("#pOverview").innerHTML = ov || `<p class="muted-light">${esc(l._m.summary || "Session notes will be added here.")}</p>`;
      const mats = l.materials || [];
      $("#matTab").textContent = `Materials${mats.length ? ` (${mats.length})` : ""}`;
      $("#pMaterials").innerHTML = mats.length
        ? `<div class="mats dark">${mats.map((m) => `<a class="mat" href="${esc(A.materialLink(m.url))}" target="_blank" rel="noopener"><span class="m-ic">${icon(A.matIcon(m.type))}</span><span><b>${esc(m.label || "Material")}</b><small>${esc((m.type || "file").toUpperCase())}${m.size ? " · " + esc(m.size) : ""}</small></span><span class="dl">${icon("download")}</span></a>`).join("")}</div>`
        : `<p class="muted-light">No downloadable materials for this session yet.</p>`;
      ta.value = A.store.get(notesKey(l.id), "");
      update();
    }
    render();
  }

  /* ================= 404 ================= */
  function events() {
    A.header("events");
    A.footer();
    const EV = window.EVENTS || [], TYPES = window.EVENT_TYPES || {};
    const MAX = 5;
    const big = (p) => "assets/img/events/" + p.src;
    const th = (p) => "assets/img/events/thumbs/" + p.src;
    const total = EV.reduce((a, e) => a + e.photos.length, 0);
    const places = new Set(EV.map((e) => (e.place || "").split("·").pop().trim()).filter(Boolean));

    // hero mosaic from each event's lead photo
    $("#evMosaic").innerHTML = EV.slice(0, 12).map((e) => `<span style="background-image:url('${th(e.photos[0])}')"></span>`).join("");
    $("#evStats").innerHTML = [[EV.length, "events"], [total, "photos"], [places.size, "venues"]].map(([n, l]) => `<span><b>${n}</b>${l}</span>`).join("");

    // filters + jump
    const counts = {};
    EV.forEach((e) => (counts[e.type] = (counts[e.type] || 0) + 1));
    const keys = Object.keys(TYPES).filter((k) => counts[k]);
    $("#evFilters").innerHTML = `<button class="evf-b is-on" data-f="all" role="tab" aria-selected="true">All <i>${EV.length}</i></button>` +
      keys.map((k) => `<button class="evf-b" data-f="${k}" role="tab" aria-selected="false">${esc(TYPES[k])} <i>${counts[k]}</i></button>`).join("");
    const jump = $("#evJump");
    const fillJump = (f) => { jump.innerHTML = `<option value="">Jump to an event…</option>` + EV.filter((e) => f === "all" || e.type === f).map((e) => `<option value="${esc(e.id)}">${esc(e.title)}</option>`).join(""); };
    fillJump("all");
    jump.addEventListener("change", () => { const t = document.getElementById(jump.value); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); jump.value = ""; });

    // list
    $("#evList").innerHTML = EV.map((e, i) => {
      const n = e.photos.length, shown = Math.min(n, MAX), more = n - shown;
      const tiles = e.photos.slice(0, shown).map((ph, k) => {
        const last = k === shown - 1 && more > 0;
        return `<button class="ev-tile${ph.fit === "contain" ? " contain" : ""}" data-e="${i}" data-k="${k}" aria-label="${last ? `View all ${n} photos of ${esc(e.title)}` : "Open photo: " + esc(ph.alt || e.title)}">
          <img src="${k === 0 ? big(ph) : th(ph)}" alt="${esc(ph.alt || e.title)}" loading="${i < 2 ? "eager" : "lazy"}" decoding="async">
          ${last ? `<span class="ev-more"><b>+${more}</b>more photos</span>` : `<span class="ev-zoom">${icon("expand")}</span>`}</button>`;
      }).join("");
      return `<article class="ev reveal ${i % 2 ? "flip" : ""}" id="${esc(e.id)}" data-type="${esc(e.type)}">
        <div class="ev-meta">
          <div class="ev-top"><span class="ev-num">${pad(i + 1)}</span><span class="ev-type">${esc(TYPES[e.type] || "")}</span></div>
          <h2>${esc(e.title)}</h2>
          <dl class="ev-facts">
            ${e.date ? `<div><dt>${icon("clock")}<span class="sr-only">Date</span></dt><dd>${esc(e.date)}</dd></div>` : ""}
            ${e.place ? `<div><dt>${icon("globe")}<span class="sr-only">Place</span></dt><dd>${esc(e.place)}</dd></div>` : ""}
          </dl>
          <p>${esc(e.caption)}</p>
          <button class="ev-all" data-e="${i}" data-k="0">${icon("expand")} View ${n} photo${n > 1 ? "s" : ""}</button>
        </div>
        <div class="ev-collage c${shown}">${tiles}</div>
      </article>`;
    }).join("");

    // filtering
    $("#evFilters").addEventListener("click", (ev) => {
      const b = ev.target.closest(".evf-b"); if (!b) return;
      const f = b.dataset.f;
      $$(".evf-b").forEach((x) => { const on = x === b; x.classList.toggle("is-on", on); x.setAttribute("aria-selected", on); });
      let vis = 0;
      $$(".ev").forEach((a) => { const show = f === "all" || a.dataset.type === f; a.hidden = !show; if (show) { a.classList.toggle("flip", vis % 2 === 1); a.querySelector(".ev-num").textContent = pad(++vis); } });
      $$(".ev:not([hidden])").forEach((a) => a.classList.add("in"));
      $("#evEmpty").hidden = vis > 0;
      fillJump(f);
      const bar = $("#evBar"); if (bar.getBoundingClientRect().top < 0 || window.scrollY > bar.offsetTop) window.scrollTo({ top: bar.offsetTop - 60, behavior: "smooth" });
    });

    // lightbox (per event, with thumbnails)
    const lb = $("#lb"), img = $("#lbImg");
    $("#lbClose").innerHTML = icon("x"); $("#lbPrev").innerHTML = icon("left"); $("#lbNext").innerHTML = icon("chevron");
    let E = null, cur = 0, last = null;
    const show = (k) => {
      const ps = E.photos; cur = (k + ps.length) % ps.length; const p = ps[cur];
      img.classList.remove("ready"); img.onload = () => img.classList.add("ready");
      img.src = big(p); img.alt = p.alt || E.title;
      $("#lbCap").textContent = p.alt || "";
      $("#lbCount").textContent = `${cur + 1} / ${ps.length}`;
      $$(".lb-thumbs button").forEach((t, j) => { t.classList.toggle("on", j === cur); if (j === cur) t.scrollIntoView({ block: "nearest", inline: "center" }); });
      [cur + 1, cur - 1].forEach((j) => { const q = ps[(j + ps.length) % ps.length]; new Image().src = big(q); });
    };
    const open = (ei, k) => {
      E = EV[ei]; last = document.activeElement;
      $("#lbTitle").textContent = E.title;
      $("#lbThumbs").innerHTML = E.photos.map((p, j) => `<button aria-label="Photo ${j + 1}"><img src="${th(p)}" alt=""></button>`).join("");
      $$(".lb-thumbs button").forEach((t, j) => t.addEventListener("click", () => show(j)));
      $("#lbThumbs").hidden = E.photos.length < 2; $("#lbPrev").hidden = $("#lbNext").hidden = E.photos.length < 2;
      lb.hidden = false; document.body.style.overflow = "hidden"; show(k); $("#lbClose").focus();
    };
    const close = () => { lb.hidden = true; document.body.style.overflow = ""; img.src = ""; if (last) last.focus(); };
    $("#evList").addEventListener("click", (ev) => { const b = ev.target.closest("[data-e]"); if (b) open(+b.dataset.e, +b.dataset.k); });
    $("#lbClose").addEventListener("click", close);
    $("#lbPrev").addEventListener("click", () => show(cur - 1));
    $("#lbNext").addEventListener("click", () => show(cur + 1));
    lb.addEventListener("click", (ev) => { if (ev.target.classList.contains("lb-stage")) close(); });
    document.addEventListener("keydown", (ev) => {
      if (lb.hidden) return;
      if (ev.key === "Escape") close(); else if (ev.key === "ArrowLeft") show(cur - 1); else if (ev.key === "ArrowRight") show(cur + 1);
    });
    let sx = null;
    $(".lb-stage").addEventListener("touchstart", (ev) => { sx = ev.touches[0].clientX; }, { passive: true });
    $(".lb-stage").addEventListener("touchend", (ev) => { if (sx == null) return; const dx = ev.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); sx = null; });
    A.reveal();
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView(), 100); }
  }
  function testimonials() {
    A.header("testimonials");
    A.footer();
    fillIcons(document);
    const T = window.TESTIMONIALS || [], K = window.T_KINDS || {}, R = window.T_REACTIONS || [], L = window.T_LINKEDIN || [];
    const IMG = (f) => "assets/img/testimonials/" + f;
    const total = T.length + R.length + L.length;
    $("#thStats").innerHTML = [[total, "student testimonials"], [L.length, "public LinkedIn posts"], [(window.EVENTS || []).length, "events"]].map(([n, l]) => `<span><b>${n}</b>${l}</span>`).join("");
    $("#tpEvents").textContent = `${(window.EVENTS || []).length} events`;
    const bubbleTexts = T.filter((t) => !t.featured).slice(0, 10).map((t) => t.quote.split(/[.!]/)[0]);
    $("#thBubbles").innerHTML = bubbleTexts.map((q, i) => `<span class="b b${i % 5}">${esc(q)}.</span>`).join("");
    const quoteIco = `<svg class="qmark" viewBox="0 0 48 36" aria-hidden="true"><path fill="currentColor" d="M0 36V22.5C0 9.6 6.2 2.1 18.5 0l2 4.6C13.4 6.5 9.8 10.7 9.6 17H19v19H0zm27 0V22.5C27 9.6 33.2 2.1 45.5 0l2 4.6C40.4 6.5 36.8 10.7 36.6 17H46v19H27z"/></svg>`;
    const meta = (t) => `<div class="tcard-meta"><span class="tavatar">${icon("users")}</span><span><b>${esc(K[t.kind] ? K[t.kind] + " student" : "Student")}</b><small>${t.lang === "ar" ? "Translated from Arabic · " : ""}via WhatsApp</small></span></div>`;

    // featured
    const F = T.filter((t) => t.featured);
    $("#tFeatured").innerHTML = F.map((t, i) => `<figure class="tf-card ${i === 0 ? "big" : ""}">
      ${quoteIco}<blockquote>${esc(i === 0 ? t.quote : t.quote)}</blockquote>
      <figcaption>${meta(t)}<button class="tview" data-id="${t.id}">${icon("eye")} View original</button></figcaption></figure>`).join("");

    // linkedin
    $("#tLinked").innerHTML = L.map((p, i) => `<article class="tl-card">
      <div class="tl-top"><span class="tl-in" aria-hidden="true">in</span><div><b>${esc(p.name)}</b><small>${esc(p.role)}</small></div></div>
      <p class="tl-prog">${esc(p.program)}</p>
      <blockquote>${esc(p.quote)}</blockquote>
      <button class="tview" data-li="${i}">${icon("eye")} View post</button></article>`).join("");

    // wall
    const rest = T.filter((t) => !t.featured);
    const counts = {}; rest.forEach((t) => (counts[t.kind] = (counts[t.kind] || 0) + 1));
    $("#tFilters").innerHTML = `<button class="evf-b is-on" data-f="all">All <i>${rest.length}</i></button>` + Object.keys(K).filter((k) => counts[k]).map((k) => `<button class="evf-b" data-f="${k}">${esc(K[k])} <i>${counts[k]}</i></button>`).join("");
    const LONG = 230;
    $("#tWall").innerHTML = rest.map((t) => {
      const long = t.quote.length > LONG;
      return `<figure class="tcard" data-kind="${t.kind}">
        <span class="tkind">${esc(K[t.kind] || "")}</span>
        <blockquote class="${long ? "clamp" : ""}">${esc(t.quote)}</blockquote>
        ${long ? `<button class="tmore">Read more</button>` : ""}
        <figcaption>${meta(t)}<button class="tview icon" data-id="${t.id}" aria-label="View original message">${icon("eye")}</button></figcaption></figure>`;
    }).join("");
    $("#tReactions").innerHTML = `<span class="tr-l">Quick reactions</span>` + R.map((r, i) => `<button class="tr-b" data-r="${i}">“${esc(r.text)}”</button>`).join("");

    $("#tFilters").addEventListener("click", (e) => {
      const b = e.target.closest(".evf-b"); if (!b) return;
      $$("#tFilters .evf-b").forEach((x) => x.classList.toggle("is-on", x === b));
      $$(".tcard").forEach((c) => (c.hidden = !(b.dataset.f === "all" || c.dataset.kind === b.dataset.f)));
    });
    $("#tWall").addEventListener("click", (e) => {
      const m = e.target.closest(".tmore"); if (!m) return;
      const q = m.previousElementSibling; const open = q.classList.toggle("clamp"); m.textContent = open ? "Read more" : "Show less";
    });

    // lightbox
    const lb = $("#lb"), img = $("#lbImg");
    $("#lbClose").innerHTML = icon("x"); $("#lbPrev").innerHTML = icon("left"); $("#lbNext").innerHTML = icon("chevron");
    let set = [], cur = 0, last = null;
    const show = (k) => { cur = (k + set.length) % set.length; img.classList.remove("ready"); img.onload = () => img.classList.add("ready"); img.src = IMG(set[cur].src); img.alt = set[cur].cap; $("#lbCap").textContent = set[cur].cap; $("#lbCount").textContent = set.length > 1 ? `${cur + 1} / ${set.length}` : ""; };
    const open = (items, title) => { set = items; last = document.activeElement; $("#lbTitle").textContent = title; $("#lbPrev").hidden = $("#lbNext").hidden = items.length < 2; lb.hidden = false; document.body.style.overflow = "hidden"; show(0); $("#lbClose").focus(); };
    const close = () => { lb.hidden = true; document.body.style.overflow = ""; img.src = ""; if (last) last.focus(); };
    document.addEventListener("click", (e) => {
      const v = e.target.closest("[data-id],[data-li],[data-r],[data-open]"); if (!v || v.closest("#lb")) return;
      if (v.dataset.id) { const t = T.find((x) => x.id === v.dataset.id); open(t.img.map((s) => ({ src: s, cap: t.lang === "ar" ? "Original message (Arabic)" : "Original message" })), "Original message"); }
      else if (v.dataset.li) { const p = L[+v.dataset.li]; open([{ src: p.img, cap: `${p.name} · ${p.program}` }], "LinkedIn post"); }
      else if (v.dataset.r) { const r = R[+v.dataset.r]; open([{ src: r.img, cap: r.text }], "Original message"); }
      else if (v.dataset.open) open([{ src: v.dataset.open, cap: v.dataset.cap || "" }], v.dataset.cap || "");
    });
    $("#lbClose").addEventListener("click", close);
    $("#lbPrev").addEventListener("click", () => show(cur - 1));
    $("#lbNext").addEventListener("click", () => show(cur + 1));
    lb.addEventListener("click", (e) => { if (e.target.classList.contains("lb-stage")) close(); });
    document.addEventListener("keydown", (e) => { if (lb.hidden) return; if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(cur - 1); else if (e.key === "ArrowRight") show(cur + 1); });
    if (featured) $("#tCta").href = courseUrl(featured);
  }
  function notfound() { A.header(""); A.footer(); }
  function info() {
    A.header(document.body.dataset.key || "");
    A.footer();
    fillIcons(document);
    const ph = $("[data-phone]");
    if (ph && SITE.contactPhone) { ph.hidden = false; ph.href = A.phoneHref(SITE.contactPhone); ph.innerHTML = `${icon("chat")} For details: ${esc(SITE.contactPhone)}`; }
    A.reveal();
  }

  ({ home, catalog, course, learn, notfound, info, events, testimonials }[page] || function () {})();
})();
