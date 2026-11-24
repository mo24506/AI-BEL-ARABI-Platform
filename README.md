# AI Bel Araby — When AI Meets Biotechnology

This is your course platform. The whole site is static files (HTML, CSS and JS), so hosting it is **completely free**. Videos and files live on free services with **no total storage limit**. The only thing you pay for is your domain.

---

## 1) What's in this folder

| File | Purpose |
|---|---|
| `index.html` | Home page |
| `courses.html` | Course catalog with search and filters |
| `course.html?id=…` | Course page: curriculum, materials, instructors, FAQ |
| `learn.html?c=…&l=…` | Lecture player: video, materials, personal notes, progress tracking |
| `studio.html` | **Control panel**: add courses, lectures and links without code |
| `assets/js/courses.js` | **Content file**. This is the only file that changes when you add content |
| `assets/css/style.css` | Colors and design (the brand red `#BF182A` is at the top) |
| `assets/img/` | Logo and icons |

---

## 2) Put the site online for free (GitHub Pages)

1. Create a free account at [github.com](https://github.com).
2. Click **New repository**, name it something like `aibelaraby-site`, set it to **Public**, and click Create.
3. On the repository page, click **Add file → Upload files**, drag in **everything inside** the website folder (not the folder itself), then click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, set Source to `Deploy from a branch`, Branch to `main` and `/ (root)`, then click Save.
5. After about a minute the site is live at `https://USERNAME.github.io/aibelaraby-site/`

## 3) Connect your own domain

1. Buy a domain from any registrar (Namecheap, Cloudflare, GoDaddy…).
2. In GitHub, go to **Settings → Pages → Custom domain**, type your domain (e.g. `aibelaraby.com`) and click Save.
3. In your registrar's DNS settings, add these records:

   | Type | Name / Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `USERNAME.github.io` |

4. Wait a little (anywhere from minutes to a few hours), then turn on **Enforce HTTPS** on the same Pages settings screen.

---

## 4) Upload lectures (large videos), free and with no limit

**Best option: YouTube, set to Unlisted**
- There is no limit on the number of videos or total storage. Each single video can be up to **256 GB or 12 hours**.
- Verify your channel with a phone number once, so you can upload videos longer than 15 minutes: [youtube.com/verify](https://www.youtube.com/verify).
- Upload the video, choose **Unlisted**, copy the link and paste it into Studio.
- The video won't appear in YouTube search, but it plays inside your site in a clean player.

**Alternatives (the site detects them automatically):** Google Drive (set sharing to *Anyone with the link*), Vimeo, archive.org, or a direct link to an `.mp4` file.

## 5) Upload materials (PDFs, slides, datasets, notebooks)

**Best option: GitHub Releases.** Each file can be up to **2 GB**, with no limit on total storage or downloads.
1. Create a second repository, e.g. `aibelaraby-materials` (Public).
2. Go to **Releases → Draft a new release**, add a tag such as `module-01`, drag your files into *Attach binaries*, then click **Publish release**.
3. Right-click the file name, choose **Copy link address**, and paste it into Studio as a material.

Google Drive works too for smaller files (15 GB free). The site automatically turns a Drive link into a direct-download link.

---

## 6) Add a new lecture (no code)

1. Open `https://your-domain/studio.html`
2. Open the lecture and paste the video link. A **YOUTUBE** badge appears if the link is valid. Click **Preview** to check it.
3. Add materials and notes, or add a new module, lecture or course.
4. Click **Download courses.js**.
5. In GitHub, open the `assets/js` folder, click **Add file → Upload files**, upload the new `courses.js` (it replaces the old one) and commit.
6. The live site updates in about a minute.

> Your Studio edits are saved in your browser until you download the file. Studio can't change the live site by itself, so it's safe if someone else opens it.

---

## 7) Notes

- **Student progress and notes** are saved in each student's browser on their own device (no login needed). If you later want student accounts or certificates, they can be added with a free service such as Firebase.
- To change the contact email or social media links: Studio → **Site settings**. They appear in the footer automatically.
- **Any change you want later**: send Claude your GitHub repository name, and it can edit the site and push the change directly.
