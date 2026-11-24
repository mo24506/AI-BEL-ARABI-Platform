/* AI Bel Araby — Studio: visual editor for assets/js/courses.js */
(function () {
  "use strict";
  const A = window.AIB;
  const { $, $$, esc, icon } = A;
  const DRAFT = "aib:studio:draft";
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const live = { site: clone(window.SITE || {}), courses: clone(window.COURSES || []) };

  let state = A.store.get(DRAFT, null) || clone(live);
  let ci = 0; // current course index
  const openLessons = new Set();

  const uid = (p) => p + "-" + Math.random().toString(36).slice(2, 7);
  const slug = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || uid("course");

  /* ---------- save ---------- */
  let t;
  function save() {
    $("#saveState").textContent = "Saving…";
    clearTimeout(t);
    t = setTimeout(() => { A.store.set(DRAFT, state); $("#saveState").textContent = "Draft saved in this browser · " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); }, 300);
  }

  /* ---------- path binding ---------- */
  function getPath(path) { return path.split(".").reduce((o, k) => (o == null ? o : o[k]), state); }
  function setPath(path, val) {
    const ks = path.split("."), last = ks.pop();
    const o = ks.reduce((o, k) => o[k], state);
    o[last] = val;
  }
  document.addEventListener("input", (e) => {
    const el = e.target;
    if (!el.dataset.b) return;
    let v = el.type === "checkbox" ? el.checked : el.value;
    if (el.dataset.kind === "lines") v = v.split("\n").map((s) => s.trim()).filter(Boolean);
    if (el.dataset.kind === "csv") v = v.split(",").map((s) => s.trim()).filter(Boolean);
    if (el.dataset.kind === "faq") v = v.split("\n").map((s) => s.split("|")).filter((p) => p[0] && p[0].trim()).map((p) => ({ q: p[0].trim(), a: (p.slice(1).join("|") || "").trim() }));
    setPath(el.dataset.b, v);
    if (el.dataset.live === "lesson") liveLesson(el);
    if (el.dataset.live === "course") renderCourseList();
    if (el.dataset.live === "module") { const h = el.closest(".mod"); if (h) $(".mod-title-preview", h) && ($(".mod-title-preview", h).textContent = v); }
    save();
  });
  document.addEventListener("change", (e) => {
    const el = e.target;
    if (el.dataset.b && el.tagName === "SELECT") { setPath(el.dataset.b, el.value); save(); if (el.dataset.live === "lesson") liveLesson(el); }
    if (el.dataset.b && el.type === "checkbox") { setPath(el.dataset.b, el.checked); save(); }
  });

  /* ---------- fields ---------- */
  const fld = (label, path, opts = {}) => {
    const v = getPath(path);
    const kind = opts.kind || "";
    let val = v == null ? "" : v;
    if (kind === "lines") val = (v || []).join("\n");
    if (kind === "csv") val = (v || []).join(", ");
    if (kind === "faq") val = (v || []).map((f) => f.q + " | " + f.a).join("\n");
    const attrs = `data-b="${path}" ${kind ? `data-kind="${kind}"` : ""} ${opts.live ? `data-live="${opts.live}"` : ""} ${opts.ph ? `placeholder="${esc(opts.ph)}"` : ""} ${opts.dir ? `dir="${opts.dir}"` : ""}`;
    let input;
    if (opts.select) input = `<select ${attrs}>${opts.select.map((o) => `<option value="${o[0]}" ${String(val) === o[0] ? "selected" : ""}>${o[1]}</option>`).join("")}</select>`;
    else if (opts.area || kind === "lines" || kind === "faq") input = `<textarea ${attrs} rows="${opts.rows || 4}">${esc(val)}</textarea>`;
    else input = `<input ${attrs} value="${esc(val)}">`;
    return `<label class="f ${opts.full ? "full" : ""}">${label}${opts.help ? ` <span class="h">${opts.help}</span>` : ""}${input}</label>`;
  };

  /* ---------- course list ---------- */
  function renderCourseList() {
    $("#courseList").innerHTML = state.courses.map((c, i) => `<button class="ci ${i === ci ? "on" : ""}" data-i="${i}">${esc(c.title || "Untitled course")}</button>`).join("");
    $$("#courseList .ci").forEach((b) => b.addEventListener("click", () => { ci = +b.dataset.i; render(); }));
  }

  /* ---------- editor ---------- */
  function videoBadge(url) {
    const v = A.parseVideo(url);
    if (!url) return `<span class="badge">No video yet</span>`;
    if (!v) return `<span class="badge red">Unrecognized link</span>`;
    const names = { youtube: "YouTube", drive: "Google Drive", vimeo: "Vimeo", archive: "Internet Archive", file: "Video file", iframe: "Embed" };
    return `<span class="badge ok">${names[v.provider]}</span>`;
  }

  function lessonHTML(mi, li) {
    const base = `courses.${ci}.modules.${mi}.lessons.${li}`;
    const l = getPath(base);
    const key = l.id;
    const mats = l.materials || [];
    return `<details class="les" data-key="${esc(key)}" ${openLessons.has(key) ? "open" : ""}>
      <summary>
        <span class="tools-row">
          <button class="ib" data-act="lup" data-m="${mi}" data-l="${li}" title="Move up">${icon("up")}</button>
          <button class="ib" data-act="ldown" data-m="${mi}" data-l="${li}" title="Move down">${icon("down")}</button>
        </span>
        <span class="lt">${esc(l.title || "Untitled lecture")}</span>
        <span class="vb">${videoBadge(l.video)}</span>
        <button class="ib del" data-act="ldel" data-m="${mi}" data-l="${li}" title="Delete lecture">${icon("trash")}</button>
      </summary>
      <div class="les-b">
        <div class="fg">
          ${fld("Lecture title", base + ".title", { live: "lesson", full: true })}
          ${fld("Type", base + ".type", { select: [["video", "Lecture (video)"], ["lab", "Hands-on lab"], ["reading", "Reading"], ["quiz", "Quiz"]] })}
          ${fld("Duration", base + ".duration", { ph: "e.g. 45:30 or 1:12:00", help: "optional" })}
        </div>
        <label class="f">Video link <span class="h">YouTube (unlisted), Google Drive, Vimeo, archive.org or a direct .mp4</span>
          <div class="vid-line"><input data-b="${base}.video" data-live="lesson" value="${esc(l.video || "")}" placeholder="https://youtu.be/…"><button class="btn btn-dark btn-sm" data-act="preview" data-m="${mi}" data-l="${li}">${icon("eye")} Preview</button></div>
        </label>
        ${fld("Lecture notes", base + ".notes", { area: true, rows: 4, help: "shown under the video — plain text or simple HTML", ph: "Summary, key points, links to papers…" })}
        <div>
          <div class="f" style="margin-bottom:8px">Materials <span class="h" style="font-weight:400;color:var(--muted)">slides, PDFs, datasets, notebooks — paste the share link</span></div>
          ${mats.map((m, k) => `<div class="mat-row">
            <input class="in" data-b="${base}.materials.${k}.label" value="${esc(m.label || "")}" placeholder="Label, e.g. Slides">
            <input class="in" data-b="${base}.materials.${k}.url" value="${esc(m.url || "")}" placeholder="https://…">
            <select class="in" data-b="${base}.materials.${k}.type">${["pdf", "slides", "notebook", "dataset", "code", "zip", "doc", "link"].map((x) => `<option ${m.type === x ? "selected" : ""}>${x}</option>`).join("")}</select>
            <input class="in" data-b="${base}.materials.${k}.size" value="${esc(m.size || "")}" placeholder="Size">
            <button class="ib del" data-act="mdel" data-m="${mi}" data-l="${li}" data-k="${k}" title="Remove">${icon("x")}</button>
          </div>`).join("")}
          <button class="addbtn" data-act="madd" data-m="${mi}" data-l="${li}">${icon("plus")} Add material</button>
        </div>
      </div>
    </details>`;
  }

  function render() {
    renderCourseList();
    const c = state.courses[ci];
    const ed = $("#editor");
    if (!c) { ed.innerHTML = `<div class="card"><p>No courses yet. Click “New course”.</p></div>`; return; }
    const b = `courses.${ci}`;
    const st = A.courseStats(c);
    ed.innerHTML = `
      <section class="card" id="s-info">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:start;flex-wrap:wrap">
          <div><h2>${esc(c.title || "Untitled course")}</h2><p class="hint">${st.modules} modules · ${st.lessons} lectures · ${st.published} with content · link: <code class="k">course.html?id=${esc(c.id)}</code></p></div>
          <div style="display:flex;gap:8px"><a class="btn btn-ghost btn-sm" href="course.html?id=${encodeURIComponent(c.id)}" target="_blank">${icon("eye")} View</a><button class="btn btn-ghost btn-sm" data-act="cdel">${icon("trash")} Delete course</button></div>
        </div>
        <div class="fg">
          ${fld("Course title", b + ".title", { live: "course" })}
          ${fld("Arabic title", b + ".titleAr", { dir: "rtl" })}
          ${fld("Subtitle (one line)", b + ".subtitle", { full: true })}
          ${fld("Level", b + ".level", { ph: "Beginner / Intermediate / Advanced" })}
          ${fld("Language", b + ".language")}
          ${fld("Status", b + ".status", { select: [["open", "Open"], ["soon", "Coming soon"]] })}
          ${fld("Price label", b + ".price", { ph: "Free" })}
          ${fld("Tags", b + ".tags", { kind: "csv", full: true, help: "comma separated" })}
          ${fld("Description", b + ".description", { area: true, rows: 5, full: true })}
          ${fld("What you'll learn", b + ".outcomes", { kind: "lines", full: true, help: "one per line" })}
          ${fld("Who it's for", b + ".audience", { kind: "lines", help: "one per line" })}
          ${fld("Prerequisites", b + ".prerequisites", { kind: "lines", help: "one per line" })}
          ${fld("Tools", b + ".tools", { kind: "csv", full: true, help: "comma separated" })}
          ${fld("Course FAQ", b + ".faq", { kind: "faq", full: true, rows: 4, help: "one per line:  Question | Answer" })}
          <label class="f full" style="display:flex;align-items:center;gap:10px;font-weight:500"><input type="checkbox" data-b="${b}.featured" ${c.featured ? "checked" : ""} style="width:auto"> Feature this course on the home page</label>
        </div>
        <h3 style="margin:26px 0 12px;font-size:1.05rem">Instructors</h3>
        ${(c.instructors || []).map((ins, k) => `<div class="fg" style="margin-bottom:14px;padding:14px;border:1px solid var(--line);border-radius:12px">
          ${fld("Name", `${b}.instructors.${k}.name`)}
          ${fld("Role", `${b}.instructors.${k}.role`)}
          ${fld("Photo link", `${b}.instructors.${k}.photo`, { help: "optional", ph: "https://… or assets/img/…" })}
          <div style="display:flex;align-items:end;justify-content:flex-end"><button class="btn btn-ghost btn-sm" data-act="idel" data-k="${k}">${icon("trash")} Remove</button></div>
          ${fld("Short bio", `${b}.instructors.${k}.bio`, { area: true, rows: 2, full: true })}
        </div>`).join("")}
        <button class="addbtn" data-act="iadd">${icon("plus")} Add instructor</button>
      </section>

      <section class="card" id="s-cur">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
          <div><h2>Curriculum & lectures</h2><p class="hint" style="margin:0">Open a lecture to paste its video link and attach materials.</p></div>
          <button class="btn btn-ghost btn-sm" data-act="openall">Expand / collapse all</button>
        </div>
        <div style="margin-top:20px">
        ${(c.modules || []).map((m, mi) => `<div class="mod">
          <div class="mod-h">
            <span class="num">${String(mi).padStart(2, "0")}</span>
            <input class="in" data-b="${b}.modules.${mi}.title" value="${esc(m.title || "")}" placeholder="Module title" style="font-weight:600;background:#fff">
            <span class="tools-row">
              <button class="ib" data-act="mup" data-m="${mi}" title="Move up">${icon("up")}</button>
              <button class="ib" data-act="mdown" data-m="${mi}" title="Move down">${icon("down")}</button>
              <button class="ib del" data-act="moddel" data-m="${mi}" title="Delete module">${icon("trash")}</button>
            </span>
          </div>
          <div class="mod-b">
            <input class="in" data-b="${b}.modules.${mi}.summary" value="${esc(m.summary || "")}" placeholder="Short module summary" style="margin-bottom:12px;background:#fff">
            ${(m.lessons || []).map((_, li) => lessonHTML(mi, li)).join("")}
            <button class="addbtn" data-act="ladd" data-m="${mi}">${icon("plus")} Add lecture</button>
          </div>
        </div>`).join("")}
        <button class="btn btn-dark" data-act="modadd">${icon("plus")} Add module</button>
        </div>
      </section>`;
    $$(".les", ed).forEach((d) => d.addEventListener("toggle", () => (d.open ? openLessons.add(d.dataset.key) : openLessons.delete(d.dataset.key))));
  }

  function liveLesson(el) {
    const d = el.closest(".les"); if (!d) return;
    const path = el.dataset.b.split(".").slice(0, 6).join(".");
    const l = getPath(path);
    $(".lt", d).textContent = l.title || "Untitled lecture";
    $(".vb", d).innerHTML = videoBadge(l.video);
  }

  function renderSite() {
    const s = state.site;
    s.social = s.social || {};
    $("#siteForm").innerHTML = [
      fld("Platform name", "site.name"),
      fld("Slogan", "site.slogan"),
      fld("Arabic slogan", "site.sloganAr", { dir: "rtl", full: true }),
      fld("Contact email", "site.contactEmail", { ph: "hello@yourdomain.com", full: true })
    ].concat(["facebook", "instagram", "linkedin", "youtube", "tiktok", "telegram", "whatsapp"].map((k) => fld(k[0].toUpperCase() + k.slice(1), "site.social." + k, { ph: "https://…" }))).join("");
  }

  /* ---------- actions ---------- */
  function move(arr, i, d) { const j = i + d; if (j < 0 || j >= arr.length) return; const x = arr[i]; arr[i] = arr[j]; arr[j] = x; }
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-act]"); if (!btn) return;
    e.preventDefault(); e.stopPropagation();
    const c = state.courses[ci];
    const mi = +btn.dataset.m, li = +btn.dataset.l, k = +btn.dataset.k;
    const mods = c && c.modules;
    switch (btn.dataset.act) {
      case "modadd": mods.push({ id: uid("m"), title: "New module", summary: "", lessons: [] }); break;
      case "moddel": if (!confirm(`Delete module “${mods[mi].title}” and all its lectures?`)) return; mods.splice(mi, 1); break;
      case "mup": move(mods, mi, -1); break;
      case "mdown": move(mods, mi, 1); break;
      case "ladd": { const l = { id: uid(mods[mi].id || "l"), title: "New lecture", type: "video", duration: "", video: "", notes: "", materials: [] }; mods[mi].lessons.push(l); openLessons.add(l.id); break; }
      case "ldel": if (!confirm(`Delete lecture “${mods[mi].lessons[li].title}”?`)) return; mods[mi].lessons.splice(li, 1); break;
      case "lup": move(mods[mi].lessons, li, -1); break;
      case "ldown": move(mods[mi].lessons, li, 1); break;
      case "madd": (mods[mi].lessons[li].materials = mods[mi].lessons[li].materials || []).push({ label: "", url: "", type: "pdf", size: "" }); break;
      case "mdel": mods[mi].lessons[li].materials.splice(k, 1); break;
      case "iadd": (c.instructors = c.instructors || []).push({ name: "", role: "", bio: "", photo: "" }); break;
      case "idel": c.instructors.splice(k, 1); break;
      case "cdel": if (!confirm(`Delete the whole course “${c.title}”?`)) return; state.courses.splice(ci, 1); ci = 0; break;
      case "openall": { const ds = $$(".les"); const any = ds.some((d) => !d.open); ds.forEach((d) => (d.open = any)); return; }
      case "preview": return preview(mods[mi].lessons[li]);
      default: return;
    }
    save(); render();
  });

  $("#addCourse").innerHTML = `${icon("plus")} New course`;
  $("#addCourse").addEventListener("click", () => {
    const title = prompt("Course title?", "New course"); if (!title) return;
    let id = slug(title); while (state.courses.some((c) => c.id === id)) id += "-2";
    state.courses.push({ id, title, titleAr: "", subtitle: "", status: "soon", featured: false, level: "", language: "Arabic", price: "Free", tags: [], description: "", outcomes: [], audience: [], prerequisites: [], tools: [], instructors: [], modules: [{ id: id + "-m1", title: "Module 1", summary: "", lessons: [] }], faq: [] });
    ci = state.courses.length - 1; save(); render();
  });

  $("#discardBtn").innerHTML = `${icon("refresh")} Discard draft`;
  $("#discardBtn").addEventListener("click", () => {
    if (!confirm("Throw away all edits in this browser and reload the live content?")) return;
    try { localStorage.removeItem(DRAFT); } catch (e) {}
    state = clone(live); ci = 0; render(); renderSite(); A.toast("Draft discarded");
  });

  /* ---------- export / import ---------- */
  function buildFile() {
    const headerNote = `/* =====================================================================
   AI Bel Araby — CONTENT FILE  (generated by Studio ${new Date().toISOString().slice(0, 10)})
   ---------------------------------------------------------------------
   Replace assets/js/courses.js in your repository with this file.
   Edit visually at /studio.html — or by hand: each lecture has
   title, type, duration, video (link), notes and materials.
   ===================================================================== */\n\n`;
    return headerNote + "window.SITE = " + JSON.stringify(state.site, null, 2) + ";\n\nwindow.COURSES = " + JSON.stringify(state.courses, null, 2) + ";\n";
  }
  $("#downloadBtn").innerHTML = `${icon("download")} Download courses.js`;
  $("#downloadBtn").addEventListener("click", () => {
    const blob = new Blob([buildFile()], { type: "text/javascript;charset=utf-8" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "courses.js"; document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1500);
    A.toast("courses.js downloaded — upload it to assets/js/ in GitHub");
  });
  $("#importBtn").innerHTML = `${icon("upload")} Import`;
  $("#importBtn").addEventListener("click", () => $("#importFile").click());
  $("#importFile").addEventListener("change", (e) => {
    const f = e.target.files[0]; if (!f) return;
    f.text().then((txt) => {
      try {
        const w = {}; new Function("window", txt)(w);
        if (!Array.isArray(w.COURSES)) throw new Error("No COURSES found");
        state = { site: w.SITE || state.site, courses: w.COURSES }; ci = 0; save(); render(); renderSite(); A.toast("Imported " + f.name);
      } catch (err) { alert("Could not read this file: " + err.message); }
    });
    e.target.value = "";
  });

  /* ---------- preview ---------- */
  function preview(l) {
    const v = A.parseVideo(l.video);
    const st = $("#modalStage");
    if (!v) st.innerHTML = `<div class="stage-empty"><div class="se-inner"><h2>No playable link</h2><p>Paste a YouTube, Google Drive, Vimeo, archive.org or .mp4 link first.</p></div></div>`;
    else if (v.provider === "file") st.innerHTML = `<video controls src="${esc(v.src)}"></video>`;
    else st.innerHTML = `<iframe src="${esc(v.embed)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    $("#modalInfo").textContent = l.title;
    $("#modal").hidden = false;
  }
  const closeModal = () => { $("#modal").hidden = true; $("#modalStage").innerHTML = ""; };
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  /* ---------- link helper ---------- */
  $("#helperBtn").addEventListener("click", () => {
    const u = $("#helperIn").value.trim(), out = $("#helperOut");
    const v = A.parseVideo(u);
    out.style.display = "block";
    if (!u) { out.textContent = "Paste a link first."; return; }
    const lines = [];
    if (v) lines.push(`Detected: ${v.provider.toUpperCase()}`);
    if (v && v.embed) lines.push(`Player link: ${v.embed}`);
    if (/drive\.google\.com/.test(u)) {
      lines.push(`Direct download (for materials): ${A.materialLink(u)}`);
      lines.push(`Make sure sharing is set to “Anyone with the link → Viewer”.`);
    }
    if (v && v.provider === "iframe") lines.push("Not a known video service — it will be embedded as a page. Use it as a material link instead if it's a file.");
    if (!v) lines.push("This doesn't look like a link.");
    out.innerHTML = lines.map(esc).join("<br>");
  });

  render();
  renderSite();
  if (A.store.get(DRAFT, null)) $("#saveState").textContent = "Loaded your saved draft";
})();
