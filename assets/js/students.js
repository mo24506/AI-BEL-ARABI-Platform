/* =====================================================================
   AI Bel Araby — OUR BELOVED STUDENTS
   ---------------------------------------------------------------------
   One block per program. Photos live in assets/img/students/
   (smaller copies in thumbs/). style: "poster" | "polaroid" | "wide"
   ===================================================================== */
window.STUDENT_STATS = { graduates: "2000+", programs: 18 };

window.STUDENT_PROGRAMS = [
  {
    id: "biofluent",
    name: "BioFluent",
    kind: "Online course · 2025",
    about: "Scientific English for biotechnologists. Graduates are qualified to work with scientific English across different tracks of biotechnology.",
    style: "poster",
    photos: [
      { src: "biofluent-1.jpg", name: "Sara Hany" },
      { src: "biofluent-2.jpg", name: "Abdulrahman Mohamed" },
      { src: "biofluent-3.jpg", name: "Manar Amr" }
    ]
  },
  {
    id: "junior-biotechnologist",
    name: "Junior Biotechnologist",
    kind: "Onsite training · 12 days",
    about: "Customized for first- and second-year students to master the fundamentals of biotechnology in 12 days, hands-on in the lab.",
    cover: "junior-poster.jpg",
    style: "polaroid",
    photos: Array.from({ length: 16 }, (_, i) => ({ src: `junior-${String(i + 1).padStart(2, "0")}.jpg` }))
  },
  {
    id: "applied-cosmetic-biotechnology",
    name: "Applied Cosmetic Biotechnology",
    kind: "Hands-on training",
    about: "A practical training program connecting biotechnology to cosmetic product development, from formulation to quality control.",
    style: "wide",
    photos: [{ src: "cosmetic-group.jpg", caption: "Graduation day with the cohort" }]
  },
  {
    id: "ai-meets-biotech-workshop",
    name: "AI Meets Biotech Workshop",
    kind: "Workshop · SCI 2026, Cairo University",
    about: "Students who completed the AI Meets Biotech workshop at Science at the Core of Innovation, Faculty of Science, Cairo University.",
    style: "polaroid",
    photos: [{ src: "sci-1.jpg" }, { src: "sci-2.jpg" }]
  }
];
