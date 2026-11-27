/* =====================================================================
   AI Bel Araby — EVENTS
   ---------------------------------------------------------------------
   Newest first; events without a date go after the dated ones.
   To add an event, copy one block and change it.
   type: "conference" | "workshop" | "talk" | "career"
   Photos live in assets/img/events/ (a smaller copy in thumbs/).
   The first photo is the large one. The page shows up to 5 photos per
   event; the rest open in the photo viewer.
   Add  fit: "contain"  to a photo that must not be cropped (posters).
   ===================================================================== */

/* Totals shown at the top of the Events page (all-time, not just the events listed below) */
window.EVENT_STATS = { events: 40, venues: 32 };

window.EVENT_TYPES = {
  conference: "Conferences & summits",
  workshop: "Workshops",
  talk: "Talks",
  career: "Career fairs & booths"
};

window.EVENTS = [
  {
    id: "must-career-summit-2026",
    type: "career",
    title: "MUST Career Summit 2026",
    date: "12 May 2026",
    place: "Employer Zone · Golf Garden, MUST",
    caption:
      "AI Bel Araby joined the Employer Zone at MUST Career Summit 2026. Our team met students at the booth to talk about AI in biotechnology and how to start the AI Meets Biotechnology course.",
    photos: [
      { src: "must-career-summit-2026-5.jpg", alt: "The AI Bel Araby team at the booth" },
      { src: "must-career-summit-2026-2.jpg", alt: "Employer Zone announcement with the AI Bel Araby logo", fit: "contain" },
      { src: "must-career-summit-2026-1.jpg", alt: "Talking with visitors at the booth" },
      { src: "must-career-summit-2026-3.jpg", alt: "Explaining the course to a student" },
      { src: "must-career-summit-2026-4.jpg", alt: "Answering students' questions" },
      { src: "must-career-summit-2026-6.jpg", alt: "A visitor conversation at the booth" }
    ]
  },
  {
    id: "sci-2026-cairo-university",
    type: "workshop",
    title: "AI Meets Biotech Workshop · SCI 2026",
    date: "9 April 2026",
    place: "Cairo University",
    caption:
      "A 2-hour workshop at Science at the Core of Innovation (SCI 2026) on how to leverage AI as a biotechnologist, starting from how AI actually works.",
    photos: [
      { src: "sci-2026-cairo-university-1.jpg", alt: "Explaining how AI works" },
      { src: "sci-2026-cairo-university-2.jpg", alt: "AI Meets Biotech Workshop announcement", fit: "contain" }
    ]
  },
  {
    id: "bionext-conference",
    type: "conference",
    title: "BioNext Conference",
    date: "29 January 2026",
    place: "Genestone BioNext",
    caption:
      "At the BioNext Conference, where science meets business, AI Bel Araby gave a talk on how AI is reshaping science, business and life, joined the panel, met attendees at our booth and was honoured with a certificate. Speaker: Dr. Mohamed Zahra.",
    photos: [
      { src: "bionext-conference-2.jpg", alt: "Receiving a certificate on stage" },
      { src: "bionext-conference-1.jpg", alt: "BioNext Conference speaker poster", fit: "contain" },
      { src: "bionext-conference-3.jpg", alt: "The conference panel" },
      { src: "bionext-conference-4.jpg", alt: "Talking with students between sessions" },
      { src: "bionext-conference-5.jpg", alt: "We are here today: visit our booth", fit: "contain" }
    ]
  },
  {
    id: "biotech-nerds-nile-university",
    type: "conference",
    title: "Biotech Nerds Conference",
    date: "",
    place: "Nile University",
    caption:
      "A talk on stage at the Biotech Nerds Conference at Nile University, an award for AI Bel Araby, and a busy booth where students signed up and learned about the course.",
    photos: [
      { src: "biotech-nerds-1.jpg", alt: "Speaking on stage at Nile University" },
      { src: "biotech-nerds-2.jpg", alt: "Receiving an award on stage" },
      { src: "biotech-nerds-3.jpg", alt: "A crowd at the AI Bel Araby booth" },
      { src: "biotech-nerds-4.jpg", alt: "Students with their enrollment cards" },
      { src: "biotech-nerds-5.jpg", alt: "Walking a student through the brochure" },
      { src: "biotech-nerds-6.jpg", alt: "Students signing up at the booth" },
      { src: "biotech-nerds-7.jpg", alt: "Registering for the course" },
      { src: "biotech-nerds-8.jpg", alt: "Scanning the QR code on the banner" },
      { src: "biotech-nerds-9.jpg", alt: "A conversation at the booth" },
      { src: "biotech-nerds-10.jpg", alt: "Explaining the course to a visitor" },
      { src: "biotech-nerds-11.jpg", alt: "Talking with students" }
    ]
  },
  {
    id: "nano-bio-nexus-conference",
    type: "conference",
    title: "Nano Bio Nexus Conference",
    date: "",
    place: "NBN Conference",
    caption:
      "AI Bel Araby partnered with the Nano Bio Nexus Conference, gave a talk on personalized learning and AI chatbots, and received a certificate of appreciation for its participation.",
    photos: [
      { src: "nano-bio-nexus-1.jpg", alt: "Speaking at the NBN Conference" },
      { src: "nano-bio-nexus-2.jpg", alt: "Partnership announcement", fit: "contain" },
      { src: "nano-bio-nexus-3.jpg", alt: "Certificate of appreciation for AI Bel Araby" }
    ]
  },
  {
    id: "ai-in-medicine-workshop",
    type: "workshop",
    title: "AI in Medicine Workshop",
    date: "",
    place: "Biotech Summit with Alla Gene",
    caption:
      "A hands-on workshop on AI in medicine, from how recommendation systems work to exploring OncoKB, the precision oncology knowledge base, with a small group of students.",
    photos: [
      { src: "ai-in-medicine-2.jpg", alt: "Walking through a live tool on screen" },
      { src: "ai-in-medicine-3.jpg", alt: "Explaining recommendation systems" },
      { src: "ai-in-medicine-1.jpg", alt: "Presenting next to the AI Bel Araby banner" },
      { src: "ai-in-medicine-5.jpg", alt: "Exploring OncoKB" },
      { src: "ai-in-medicine-4.jpg", alt: "Students following the workshop" }
    ]
  },
  {
    id: "nrc-symposium",
    type: "conference",
    title: "National Research Centre Symposium",
    date: "",
    place: "National Research Centre",
    caption:
      "Talks to a packed hall at the National Research Centre symposium on how AI is revolutionizing cancer detection, what AI can do for biotechnologists, recent papers, and why organoids matter.",
    photos: [
      { src: "nrc-symposium-1.jpg", alt: "Addressing a full lecture hall" },
      { src: "nrc-symposium-2.jpg", alt: "How AI is revolutionizing cancer detection" },
      { src: "nrc-symposium-4.jpg", alt: "A talk on why organoids are important" },
      { src: "nrc-symposium-9.jpg", alt: "The hall during a session on a recent paper" },
      { src: "nrc-symposium-3.jpg", alt: "What AI can do for biotechnologists" },
      { src: "nrc-symposium-5.jpg", alt: "The audience from the stage" },
      { src: "nrc-symposium-6.jpg", alt: "Students taking notes" },
      { src: "nrc-symposium-7.jpg", alt: "The hall before the session" },
      { src: "nrc-symposium-8.jpg", alt: "The National Research Centre" }
    ]
  },
  {
    id: "badr-university-in-cairo",
    type: "career",
    title: "Badr University in Cairo (BUC)",
    date: "",
    place: "BUC · COLORS Educational Hub",
    caption:
      "An AI Bel Araby booth where students signed up for the course, and a talk at the COLORS Educational Hub.",
    photos: [
      { src: "buc-1.jpg", alt: "The AI Bel Araby booth" },
      { src: "buc-4.jpg", alt: "Talk at COLORS Educational Hub" },
      { src: "buc-2.jpg", alt: "A student signing up" },
      { src: "buc-3.jpg", alt: "Students registering at the booth" },
      { src: "buc-5.jpg", alt: "During the talk" }
    ]
  },
  {
    id: "must-talk",
    type: "talk",
    title: "Talk at MUST",
    date: "",
    place: "Misr University for Science & Technology",
    caption:
      "A talk at MUST on the 2024 Nobel Prize in Chemistry for computational protein design and protein structure prediction, with AlphaFold results on screen.",
    photos: [
      { src: "must-talk-1.jpg", alt: "Presenting the 2024 Nobel Prize in Chemistry" },
      { src: "must-talk-2.jpg", alt: "Walking through an AlphaFold result" }
    ]
  },
  {
    id: "power-of-youth-2025",
    type: "talk",
    title: "Power of Youth 2025",
    date: "2025",
    place: "",
    caption: "An open-air session with students at Power of Youth 2025, followed by a panel discussion.",
    photos: [
      { src: "power-of-youth-2025-3.jpg", alt: "Speaking to students in the garden" },
      { src: "power-of-youth-2025-1.jpg", alt: "The audience during the session" },
      { src: "power-of-youth-2025-2.jpg", alt: "Panel discussion" }
    ]
  },
  {
    id: "sustainable-egypt-youth-summit-2025",
    type: "conference",
    title: "Sustainable Egypt Youth Summit 2025",
    date: "2025",
    place: "",
    caption: "Representing AI Bel Araby at the Sustainable Egypt Youth Summit 2025.",
    photos: [
      { src: "sustainable-egypt-youth-summit-1.jpg", alt: "At the summit's main banner" },
      { src: "sustainable-egypt-youth-summit-2.jpg", alt: "With fellow participants at the partners wall" }
    ]
  },
  {
    id: "cancer-awareness-day",
    type: "talk",
    title: "Cancer Awareness Day",
    date: "",
    place: "",
    caption: "A talk at Cancer Awareness Day on the role of biotechnology and AI in cancer care.",
    photos: [
      { src: "cancer-awareness-day-1.jpg", alt: "Speaking at Cancer Awareness Day" },
      { src: "cancer-awareness-day-2.jpg", alt: "Addressing the audience" }
    ]
  },
  {
    id: "must-career-summit-2025",
    type: "career",
    title: "MUST Career Summit 2025",
    date: "2025",
    place: "MUST",
    caption: "A small-group session with students in the garden at MUST Career Summit 2025.",
    photos: [
      { src: "must-career-summit-2025-1.jpg", alt: "Leading the session" },
      { src: "must-career-summit-2025-2.jpg", alt: "Students listening during the session" },
      { src: "must-career-summit-2025-3.jpg", alt: "Talking with students" }
    ]
  },
  {
    id: "marriott-job-fair",
    type: "career",
    title: "Marriott Job Fair",
    date: "",
    place: "",
    caption: "Speaking at the Marriott Job Fair and joining the Q&A from the audience.",
    photos: [
      { src: "marriott-job-fair-1.jpg", alt: "Speaking at the Marriott Job Fair" },
      { src: "marriott-job-fair-2.jpg", alt: "Asking a question during the Q&A" }
    ]
  }
];
