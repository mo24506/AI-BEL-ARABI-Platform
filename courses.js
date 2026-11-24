/* =====================================================================
   AI Bel Araby — CONTENT FILE
   ---------------------------------------------------------------------
   This is the ONLY file you need to change to add courses, modules,
   lectures and materials. You can edit it by hand, or use the visual
   editor at /studio.html and download a fresh copy of this file.

   VIDEO LINKS ("video") — paste any of these, the site detects them:
     • YouTube (recommended, unlimited & free; upload as "Unlisted")
         https://www.youtube.com/watch?v=XXXXXXXXXXX
         https://youtu.be/XXXXXXXXXXX
     • Google Drive (share: "Anyone with the link")
         https://drive.google.com/file/d/FILE_ID/view
     • Vimeo, Internet Archive (archive.org/details/...),
       or a direct .mp4 / .webm link (e.g. a GitHub Release asset)
     Leave it "" and the lecture shows as "Coming soon".

   MATERIAL LINKS ("materials") — PDFs, slides, datasets, notebooks:
     { label: "Slides (PDF)", url: "https://...", type: "pdf", size: "12 MB" }
     type can be: pdf, slides, notebook, dataset, code, zip, link, doc
   ===================================================================== */

window.SITE = {
  name: "AI Bel Araby",
  nameLatin: "AI Bel Araby",
  slogan: "When AI Meets Biotechnology",
  sloganAr: "",
  description:
    "A free learning platform for AI in science and biotechnology — rigorous, hands-on courses explained in Arabic.",
  // Fill these in and they appear automatically in the footer & contact areas.
  contactEmail: "",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    telegram: "",
    whatsapp: ""
  }
};

window.COURSES = [
  {
    id: "ai-meets-biotech-advanced",
    title: "AI Meets Biotech Advanced",
    titleAr: "",
    subtitle:
      "From sequences to structures to drugs: build, evaluate and apply modern AI models to real biological data.",
    status: "open", // "open" or "soon"
    featured: true,
    level: "Advanced",
    language: "Arabic, with English scientific terms",
    price: "Free",
    tags: ["Genomics", "Proteins", "Drug Discovery", "Single-cell", "Bioimaging", "LLMs"],
    description:
      "AI Meets Biotech Advanced is our flagship course for students and researchers who want to move beyond buzzwords and actually use AI in the life sciences. Each module pairs the core idea behind a family of models with a hands-on lab on real biological data, so you finish able to read the literature critically, choose the right model for a biological question, and build a working pipeline yourself.",
    outcomes: [
      "Translate a biological question into a well-posed machine-learning problem",
      "Train and honestly evaluate models on omics, sequence and imaging data",
      "Understand how protein structure prediction and protein language models work",
      "Build a molecular property model for early-stage drug discovery",
      "Analyze single-cell RNA-seq data from raw counts to annotated clusters",
      "Use LLMs and AI tools in research responsibly and reproducibly"
    ],
    audience: [
      "Biotechnology, pharmacy, medicine and life-science students",
      "Researchers who want to add AI to their wet-lab or clinical work",
      "Programmers and data scientists moving into bio"
    ],
    prerequisites: [
      "Basic molecular biology (DNA, RNA, proteins)",
      "Introductory Python — or complete Module 0 first",
      "A Google account for free Colab notebooks (no powerful laptop needed)"
    ],
    tools: ["Python", "Google Colab", "PyTorch", "scikit-learn", "Biopython", "RDKit", "Scanpy"],
    instructors: [
      {
        name: "AI Bel Araby Team",
        role: "Course team",
        bio: "Scientists and engineers working at the intersection of artificial intelligence and biotechnology.",
        photo: ""
      }
    ],
    modules: [
      {
        id: "m0",
        title: "Orientation & Toolkit",
        summary: "How the course works and getting your free coding environment ready.",
        lessons: [
          { id: "m0-l1", title: "Welcome: why AI is changing biotechnology", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m0-l2", title: "Your toolkit: Python, Google Colab and GitHub", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m0-l3", title: "Python crash course for life scientists", type: "lab", duration: "", video: "", notes: "", materials: [] }
        ]
      },
      {
        id: "m1",
        title: "Machine Learning Foundations for Life Scientists",
        summary: "The core ideas every later module builds on — and the mistakes that ruin biological ML.",
        lessons: [
          { id: "m1-l1", title: "From a biological question to an ML problem", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m1-l2", title: "Supervised vs. unsupervised learning on biological data", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m1-l3", title: "Evaluation done right: splits, metrics and data leakage", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m1-l4", title: "Lab: classifying tumor subtypes from gene expression", type: "lab", duration: "", video: "", notes: "", materials: [] }
        ]
      },
      {
        id: "m2",
        title: "Deep Learning Essentials",
        summary: "Neural networks, convolutions and transformers — explained with biology in mind.",
        lessons: [
          { id: "m2-l1", title: "Neural networks from first principles", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m2-l2", title: "Convolutional networks for sequences and images", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m2-l3", title: "Attention and transformers", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m2-l4", title: "Lab: your first PyTorch model", type: "lab", duration: "", video: "", notes: "", materials: [] }
        ]
      },
      {
        id: "m3",
        title: "AI for Genomics & Sequence Analysis",
        summary: "Reading DNA like a language: encodings, variant effects and genomic foundation models.",
        lessons: [
          { id: "m3-l1", title: "Encoding DNA and RNA for machine learning", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m3-l2", title: "Predicting regulatory activity and variant effects", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m3-l3", title: "Genomic language models", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m3-l4", title: "Lab: predicting transcription-factor binding from sequence", type: "lab", duration: "", video: "", notes: "", materials: [] }
        ]
      },
      {
        id: "m4",
        title: "Protein Structure, Function & Design",
        summary: "How structure prediction works, what protein language models learn, and designing new proteins.",
        lessons: [
          { id: "m4-l1", title: "The protein folding problem and how AI cracked it", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m4-l2", title: "Protein language models and embeddings", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m4-l3", title: "Generative protein design", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m4-l4", title: "Lab: predict, visualize and interpret a protein structure", type: "lab", duration: "", video: "", notes: "", materials: [] }
        ]
      },
      {
        id: "m5",
        title: "AI-Driven Drug Discovery",
        summary: "Molecules as data: representations, property prediction, virtual screening and generative chemistry.",
        lessons: [
          { id: "m5-l1", title: "Representing molecules: SMILES, fingerprints and graphs", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m5-l2", title: "Graph neural networks for molecular properties", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m5-l3", title: "Virtual screening, docking and ML scoring", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m5-l4", title: "Generative models for new molecules", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m5-l5", title: "Lab: building a QSAR model with RDKit", type: "lab", duration: "", video: "", notes: "", materials: [] }
        ]
      },
      {
        id: "m6",
        title: "Single-Cell & Multi-Omics",
        summary: "From count matrices to cell types, trajectories and integrated multi-omics views.",
        lessons: [
          { id: "m6-l1", title: "The single-cell RNA-seq workflow", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m6-l2", title: "Dimensionality reduction and clustering", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m6-l3", title: "Integrating batches and omics layers", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m6-l4", title: "Lab: annotating cell types with Scanpy", type: "lab", duration: "", video: "", notes: "", materials: [] }
        ]
      },
      {
        id: "m7",
        title: "Bioimaging & Digital Pathology",
        summary: "Computer vision for microscopy and histopathology slides.",
        lessons: [
          { id: "m7-l1", title: "Image analysis fundamentals for biologists", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m7-l2", title: "Cell and tissue segmentation with U-Net", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m7-l3", title: "Whole-slide images and computational pathology", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m7-l4", title: "Lab: segmenting nuclei in microscopy images", type: "lab", duration: "", video: "", notes: "", materials: [] }
        ]
      },
      {
        id: "m8",
        title: "LLMs, AI Agents & Responsible Science",
        summary: "Using large language models in research — and the ethics, biosafety and reproducibility that come with it.",
        lessons: [
          { id: "m8-l1", title: "LLMs for literature review and bioinformatics", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m8-l2", title: "AI agents in the lab: promise and limits", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m8-l3", title: "Bias, biosafety, privacy and reproducibility", type: "video", duration: "", video: "", notes: "", materials: [] }
        ]
      },
      {
        id: "m9",
        title: "Capstone Project",
        summary: "Bring it together: an end-to-end AI project on a biological dataset of your choice.",
        lessons: [
          { id: "m9-l1", title: "Choosing a question and a dataset", type: "video", duration: "", video: "", notes: "", materials: [] },
          { id: "m9-l2", title: "Building, evaluating and presenting your project", type: "video", duration: "", video: "", notes: "", materials: [] }
        ]
      }
    ],
    faq: [
      { q: "Is the course really free?", a: "Yes. Every lecture and every material is free to watch and download." },
      { q: "Do I need a powerful computer?", a: "No. All labs run in Google Colab in your browser, which is free." },
      { q: "In which language is it taught?", a: "Lectures are explained in Arabic, while scientific and technical terms are kept in English so you can read papers comfortably." }
    ]
  }
];
