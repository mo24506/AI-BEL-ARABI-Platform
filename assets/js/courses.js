/* =====================================================================
   AI Bel Araby — CONTENT FILE
   ---------------------------------------------------------------------
   This is the ONLY file you need to change to add courses, modules,
   sessions and materials. Edit it by hand, or use the visual editor
   at /studio.html and download a fresh copy of this file.

   Each session can have:
     title, duration, video, learn (list), demo, tools (list),
     takeaway, toolkit (list of tools with access + description),
     notes and materials.

   VIDEO LINKS ("video") — paste any of these, the site detects them:
     • YouTube (recommended, unlimited & free; upload as "Unlisted")
     • Google Drive (share: "Anyone with the link")
     • Vimeo, Internet Archive, or a direct .mp4 / .webm link
     Leave it "" and the session shows as "Coming soon".

   MATERIAL LINKS ("materials"):
     { label: "Slides (PDF)", url: "https://...", type: "pdf", size: "12 MB" }
     type can be: pdf, slides, notebook, dataset, code, zip, link, doc
   ===================================================================== */

window.SITE = {
  name: "AI Bel Araby",
  nameLatin: "AI Bel Araby",
  slogan: "When AI Meets Biotechnology",
  sloganAr: "",
  description:
    "A learning platform for AI in science and biotechnology: hands-on courses for life-science students.",
  contactPhone: "0101 3949 760",
  // Every "Contact us", "WhatsApp" and "For more details" button opens this link
  contactLink: "https://wa.me/message/LEK2HAWRA4MQE1",
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
      "A hands-on course for life-science students: from your first line of Python to leveraging AI as a biotechnologist and scientist.",
    status: "open",
    featured: true,
    level: "No coding experience needed",
    language: "Arabic, with English scientific terms",
    highlights: [
      { value: "12", label: "Recorded sessions" },
      { value: "24", label: "Real AI tools" },
      { value: "04", label: "Learning modules" }
    ],
    badges: ["No coding experience needed", "Learn at your own pace", "Hands-on demo every session"],
    tags: ["Python", "Machine Learning", "Genomics", "Proteins", "Drug Discovery", "Imaging", "LLMs"],
    description:
      "AI Meets Biotech Advanced is a 12-session practical course that takes life-science students from their first line of Python to using AI the way working biotechnologists and scientists do. Across four modules you move from the foundations of machine learning and deep learning, through AI for genomes and proteins, to drug discovery, medical imaging and AI research assistants, and finish with 24 real AI tools used in labs, hospitals and drug pipelines today. Every session includes a hands-on demo on real biological data or a real tool.",
    outcomes: [
      "Explain the difference between AI, machine learning and deep learning, and where each is used in biotech",
      "Write Python in Google Colab to work with DNA sequences, FASTA files and expression tables",
      "Train and evaluate a machine-learning model on real biological data",
      "Predict and judge protein structures with AlphaFold, ColabFold and ESMFold",
      "Apply AI to genomics, protein design, drug discovery and microscopy images",
      "Use LLMs as a research assistant and verify everything they produce"
    ],
    audience: [
      "Life-science students: biotechnology, pharmacy, medicine, biology and related fields",
      "Anyone who wants to leverage AI as a biotechnologist or scientist"
    ],
    prerequisites: [
      "No coding experience needed",
      "A laptop and a Google account for free Google Colab",
      "Curiosity about biology and AI"
    ],
    tools: [],
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
        id: "m1",
        title: "Foundations",
        summary: "What AI really is, your first Python code, and how machine learning and deep learning learn from biological data.",
        lessons: [
          {
            id: "s01",
            title: "Introduction to AI in Biotech",
            type: "video", duration: "", video: "",
            learn: [
              "AI vs machine learning vs deep learning: the “Russian dolls” analogy",
              "Why biology is perfect for AI: genomes, proteins and images at huge scale",
              "The map: genomics, proteins, drugs, imaging and lab automation",
              "Myth vs fact: scientists who use AI will replace those who don’t"
            ],
            demo: "Explore human insulin in the AlphaFold Protein Structure Database and read its pLDDT confidence colours.",
            tools: ["AlphaFold DB", "Google Colab"],
            takeaway: "AI finds patterns at a scale no human can reach. Biology gives it the data, you give it the questions.",
            notes: "", materials: []
          },
          {
            id: "s02",
            title: "Python for Biologists: Your First Lines of Code",
            type: "video", duration: "", video: "",
            learn: [
              "Google Colab: write and run Python with nothing to install",
              "Python through biology: DNA as a string, GC content, reverse complement",
              "Biopython: FASTA files, transcription and translation",
              "pandas for expression tables; data from NCBI, UniProt, PDB and GEO"
            ],
            demo: "Pull the human insulin (INS) sequence from NCBI, compute its GC content and translate it into protein.",
            tools: ["Google Colab", "Python", "Biopython", "pandas", "NCBI"],
            takeaway: "You don’t need to be a programmer. You need your biology and a few lines of Python.",
            notes: "", materials: []
          },
          {
            id: "s03",
            title: "Machine Learning 101: Teaching Computers with Biological Data",
            type: "video", duration: "", video: "",
            learn: [
              "Supervised vs unsupervised learning: training set = practice, test set = final exam",
              "Key algorithms: decision trees, random forests, k-NN, logistic regression",
              "Evaluation: accuracy, precision, recall and the confusion matrix",
              "Overfitting: memorising answers vs truly learning"
            ],
            demo: "Train a random forest on the Breast Cancer Wisconsin dataset (scikit-learn) and plot feature importance.",
            tools: ["scikit-learn", "Random forest", "Google Colab"],
            takeaway: "Machine learning finds patterns in examples, and good data beats fancy algorithms.",
            notes: "", materials: []
          },
          {
            id: "s04",
            title: "Deep Learning: Neural Networks Inspired by Biology",
            type: "video", duration: "", video: "",
            learn: [
              "The artificial neuron (inputs, weights, activation) vs dendrites and synapses",
              "How networks learn: loss, gradient descent and backpropagation",
              "CNNs for images; Transformers and attention behind ChatGPT and AlphaFold",
              "What deep learning needs: lots of data, GPUs and careful validation"
            ],
            demo: "Watch a network learn live in TensorFlow Playground, then train a small Keras model in Colab.",
            tools: ["TensorFlow Playground", "Keras"],
            takeaway: "Deep learning finds features by itself, which is why it shines on raw sequences and images.",
            notes: "", materials: []
          }
        ]
      },
      {
        id: "m2",
        title: "Genomes & Proteins",
        summary: "Reading genomes with AI, predicting protein structures with AlphaFold, and designing proteins nature never made.",
        lessons: [
          {
            id: "s05",
            title: "AI for Genomics: Reading the Book of Life",
            type: "video", duration: "", video: "",
            learn: [
              "Deep-learning variant calling (DeepVariant) and variant-effect prediction (AlphaMissense)",
              "Gene-expression signatures: clustering patients and subtyping cancer",
              "Single-cell RNA-seq: PCA and UMAP to discover cell types",
              "DNA language models and personalised medicine"
            ],
            demo: "Load a small expression dataset from GEO in Colab, run PCA and cluster the samples by tumour type.",
            tools: ["DeepVariant", "AlphaMissense", "GEO", "ClinVar", "UMAP"],
            takeaway: "Genomes are very long texts; AI is the reader that spots the typos that cause disease.",
            notes: "", materials: []
          },
          {
            id: "s06",
            title: "AlphaFold: How AI Solved the Protein Folding Problem",
            type: "video", duration: "", video: "",
            learn: [
              "Why structure decides function, and why folding stayed unsolved for 50 years",
              "How AlphaFold works in simple terms: alignments, evolution, attention, 3D refinement",
              "Reading confidence: pLDDT (per residue) and PAE (relative position)",
              "Faster options (ESMFold, ColabFold) and limits: disorder, dynamics, lab validation"
            ],
            demo: "Paste a sequence into ColabFold or ESMFold, open it in Mol*, and compare with the experimental PDB entry.",
            tools: ["AlphaFold", "ColabFold", "ESMFold", "Mol*"],
            takeaway: "AlphaFold turned years into minutes. Your job is knowing when to trust it.",
            notes: "", materials: []
          },
          {
            id: "s07",
            title: "Generative AI: Designing Proteins Nature Never Made",
            type: "video", duration: "", video: "",
            learn: [
              "Prediction vs design: inverse folding starts from a shape and finds the sequence",
              "Protein language models (ESM) and diffusion models (RFdiffusion)",
              "ProteinMPNN: choosing amino acids that fold into the designed shape",
              "The design-build-test loop and real uses: binders, enzymes, vaccines"
            ],
            demo: "Score single mutations of a protein with an ESM notebook and read the mutation-effect heatmap.",
            tools: ["ESM", "RFdiffusion", "ProteinMPNN"],
            takeaway: "Biology is becoming an engineering discipline: AI is the design software, the lab is the factory.",
            notes: "", materials: []
          }
        ]
      },
      {
        id: "m3",
        title: "AI in Practice",
        summary: "AI in drug discovery, AI that sees cells and scans, and using LLMs as a research assistant.",
        lessons: [
          {
            id: "s08",
            title: "AI in Drug Discovery: From Years to Months",
            type: "video", duration: "", video: "",
            learn: [
              "The pipeline: target → hit → lead → preclinical → clinical, and where AI fits",
              "Representing molecules: SMILES, fingerprints, graph neural networks",
              "Virtual screening, docking and ADMET prediction with ML",
              "Generative chemistry, repurposing and cases (halicin, Insilico)"
            ],
            demo: "Use RDKit in Colab to draw drugs, compute MW and LogP, and check Lipinski’s Rule of Five.",
            tools: ["RDKit", "PubChem"],
            takeaway: "AI doesn’t replace the lab. It decides which experiments are worth doing.",
            notes: "", materials: []
          },
          {
            id: "s09",
            title: "AI That Sees: Microscopy, Pathology and Medical Imaging",
            type: "video", duration: "", video: "",
            learn: [
              "How a computer sees: images as numbers, filters and CNNs",
              "Classification, detection and segmentation: three different jobs",
              "Uses: cell counting, digital pathology, X-ray/CT/MRI, bacterial colonies",
              "Pitfalls: biased training data, scanner and stain variation, expert labels"
            ],
            demo: "Run Cellpose on a fluorescent nuclei image and compare its count with a manual count.",
            tools: ["Cellpose", "Google Colab"],
            takeaway: "In imaging, AI is the tireless assistant: fast and consistent, but it still needs expert eyes.",
            notes: "", materials: []
          },
          {
            id: "s10",
            title: "Your AI Research Assistant: LLMs for Biotech Students",
            type: "video", duration: "", video: "",
            learn: [
              "How LLMs work: predicting text, not looking up facts",
              "Prompting with role, context, task and format, using biotech examples",
              "Uses: paper summaries, protocol drafts, calculations, Python help, writing",
              "The danger zone: fake references and confident mistakes, so always verify"
            ],
            demo: "Summarise a real abstract with an AI assistant, then check every reference it gives on PubMed.",
            tools: ["AI assistants", "PubMed"],
            takeaway: "AI assistants are brilliant interns, not professors. Go faster, but never stop thinking.",
            notes: "", materials: []
          }
        ]
      },
      {
        id: "m4",
        title: "Real-World AI Toolkits",
        summary: "24 AI tools used today in medical biotechnology and across the drug design and development pipeline.",
        lessons: [
          {
            id: "s11",
            title: "12 AI Tools in Medical Biotechnology",
            type: "video", duration: "", video: "",
            learn: [
              "12 AI tools used in labs and hospitals",
              "Which exact problem each tool solves",
              "How to try the free tools yourself"
            ],
            areas: ["Genomics", "Single-cell", "Microscopy", "Pathology", "Radiology", "Research"],
            demo: "Run Cellpose on a microscopy image, then fold a protein on AlphaFold Server: two tools, two results, ten minutes.",
            tools: ["Cellpose", "AlphaFold Server"],
            takeaway: "",
            toolkit: [
              { name: "AlphaFold 3", access: "free", desc: "Predicts structures of proteins, DNA, RNA and ligand complexes (free web server)" },
              { name: "AlphaMissense", access: "open", desc: "Scores how likely each missense variant is to cause disease" },
              { name: "DeepVariant", access: "open", desc: "Calls genetic variants from sequencing reads using a CNN" },
              { name: "scGPT", access: "open", desc: "Foundation model for single-cell data and cell-type annotation" },
              { name: "Cellpose", access: "open", desc: "Segments cells and nuclei in microscopy images" },
              { name: "QuPath", access: "open", desc: "Analyses whole-slide pathology images with ML classifiers" },
              { name: "Paige Prostate", access: "commercial", desc: "AI-assisted prostate cancer detection on pathology slides (FDA-authorized)" },
              { name: "LumineticsCore", access: "commercial", desc: "Autonomous diabetic retinopathy screening, formerly IDx-DR (FDA-authorized)" },
              { name: "Aidoc", access: "commercial", desc: "Flags urgent findings on CT and X-ray for radiologists" },
              { name: "MONAI", access: "open", desc: "PyTorch framework for building medical imaging AI" },
              { name: "TotalSegmentator", access: "open", desc: "Automatically segments organs and structures in CT and MRI" },
              { name: "Elicit", access: "free", desc: "AI research assistant that finds papers and extracts their data" }
            ],
            notes: "", materials: []
          },
          {
            id: "s12",
            title: "12 AI Tools in Drug Design and Development",
            type: "video", duration: "", video: "",
            learn: [
              "12 AI tools for drug discovery, design and development",
              "Where each tool sits in the drug pipeline",
              "Hands-on with ADMET-AI to evaluate molecules yourself"
            ],
            areas: ["Target discovery", "Molecule design", "Docking & screening", "ADMET", "Clinical trials"],
            demo: "Paste three SMILES into the ADMET-AI web server, read the predicted properties and rank the molecules.",
            tools: ["ADMET-AI"],
            takeaway: "",
            toolkit: [
              { name: "Boltz-2", access: "open", desc: "Predicts biomolecular complexes and ligand binding affinity" },
              { name: "RFdiffusion", access: "open", desc: "Generates new protein backbones and binders" },
              { name: "ProteinMPNN", access: "open", desc: "Designs sequences that fold into a chosen structure" },
              { name: "DiffDock", access: "open", desc: "Diffusion-based docking of small molecules to proteins" },
              { name: "DeepChem", access: "open", desc: "Deep-learning toolkit for molecular property prediction" },
              { name: "Chemprop", access: "open", desc: "Graph neural networks that predict molecular properties" },
              { name: "REINVENT 4", access: "open", desc: "Generative design of new drug-like molecules (AstraZeneca)" },
              { name: "ADMET-AI", access: "free", desc: "Web server predicting absorption, toxicity and other ADMET properties" },
              { name: "PandaOmics", access: "commercial", desc: "Ranks disease targets from omics and literature data (Insilico Medicine)" },
              { name: "Chemistry42", access: "commercial", desc: "Generative chemistry platform (Insilico Medicine)" },
              { name: "AtomNet", access: "commercial", desc: "Structure-based virtual screening of huge compound libraries (Atomwise)" },
              { name: "Unlearn", access: "commercial", desc: "AI digital twins for designing smaller, faster clinical trials" }
            ],
            notes: "", materials: []
          }
        ]
      }
    ],
    faq: [
      { q: "Do I need coding experience?", a: "No. Session 02 starts from your very first line of Python, and every demo runs in Google Colab in your browser." },
      { q: "Are the sessions live or recorded?", a: "All 12 sessions are recorded, so you can learn at your own pace and rewatch any part." },
      { q: "How can I get more details?", a: "Message us on WhatsApp using the \"For more details\" button on this page." }
    ]
  },
  {
    id: "bioinformatics-ai-computational-biology",
    mode: "online",
    title: "Fundamentals of Bioinformatics & AI in Computational Biology",
    subtitle: "Online training in the fundamentals of bioinformatics and how AI is used in computational biology.",
    status: "upcoming",
    badge: "Summer 2026",
    cover: "bioinformatics.jpg",
    tags: ["Bioinformatics", "Computational Biology"],
    facts: [["Format", "Online training"], ["When", "Summer 2026"]],
    description: "A new online training from AI Bel Araby covering the fundamentals of bioinformatics and the role of AI in computational biology. Registration is open for Summer 2026.",
    outcomes: [],
    bonus: ""
  },
  {
    id: "stem-cells-and-ai",
    mode: "online",
    title: "Stem Cells & AI",
    subtitle: "Six online sessions on stem cell science and how AI is applied to it.",
    status: "open",
    badge: "Early bird registration",
    cover: "stem-cells-ai.jpg",
    tags: ["Stem Cells"],
    facts: [["Format", "Online"], ["Length", "6 sessions"], ["Registration", "Early bird"]],
    description: "An online course in six sessions that brings together stem cell biology and artificial intelligence.",
    outcomes: [],
    bonus: ""
  },
  {
    id: "ai-in-pharmacology",
    mode: "online",
    title: "AI in Pharmacology",
    subtitle: "From medicinal plants to pharmacogenomics: where AI is changing pharmacology.",
    status: "open",
    cover: "ai-in-pharmacology.jpg",
    tags: ["Pharmacology", "Drug Discovery"],
    facts: [["Topics", "5 core areas"]],
    description: "A course on how artificial intelligence is used across pharmacology, from natural products and cancer drugs to drug discovery, pharmacogenomics and drug repurposing.",
    outcomes: ["Medicinal plants", "Cancer pharmacology", "AI in drug discovery", "Pharmacogenomics", "Machine learning & drug repurposing"],
    outcomesTitle: "Topics covered",
    bonus: ""
  },
  {
    id: "biorender-essentials",
    mode: "online",
    title: "BioRender Essentials",
    subtitle: "From concept to creation: professional scientific illustrations with BioRender.",
    status: "open",
    badge: "Free premium account",
    cover: "biorender-essentials.jpg",
    tags: ["Scientific Illustration"],
    facts: [["Tool", "BioRender"], ["Bonus", "Free premium account"]],
    description: "Learn to turn scientific ideas into clear, professional figures with BioRender, from your first figure to fully customized illustrations.",
    outcomes: ["Understanding BioRender's interface", "Mastering scientific illustrations", "Enhancing visual communication", "Customizing illustrations"],
    bonus: "A free BioRender premium account"
  },
  {
    id: "biofluent",
    mode: "online",
    title: "BioFluent",
    subtitle: "English for biotechnology and science students.",
    status: "open",
    badge: "Coursera gift",
    cover: "biofluent.jpg",
    tags: ["Scientific English"],
    facts: [["Format", "Online course"], ["For", "Biotechnology & science students"], ["Bonus", "Coursera gift"]],
    description: "BioFluent builds the scientific English you need to read papers, write and present with confidence. Graduates receive a certificate that qualifies them to work with scientific English across different tracks of biotechnology.",
    outcomes: ["Scientific vocabulary and terminology", "Academic and professional writing skills", "Presentation and communication skills", "Reading and comprehension of scientific papers"],
    outcomesTitle: "What you will get",
    bonus: "A Coursera gift",
    graduates: "students.html#biofluent"
  },
  {
    id: "ai-in-cancer",
    mode: "onsite",
    title: "AI in Cancer: Research & Therapy",
    subtitle: "A 25-hour on-site training on how AI is used in cancer research and therapy, with Alla Gene.",
    status: "open",
    badge: "25 hours",
    cover: "ai-in-cancer.jpg",
    tags: ["Oncology"],
    facts: [["Format", "On-site training"], ["Length", "25 hours"], ["In partnership with", "Alla Gene"]],
    description: "An on-site training in partnership with Alla Gene on applying artificial intelligence to cancer research and therapy.",
    outcomes: [],
    bonus: "",
    skills: ["AI in oncology research", "AI-assisted therapy decisions", "Hands-on lab work"]
  },
  {
    id: "junior-biotechnologist",
    mode: "onsite",
    title: "Junior Biotechnologist",
    subtitle: "Master the fundamentals of biotechnology in 12 days, hands-on in the lab.",
    status: "open",
    badge: "12 days",
    cover: "junior-biotechnologist.jpg",
    tags: ["Lab Training"],
    facts: [["Format", "On-site training"], ["Length", "12 days"], ["For", "First- and second-year students"]],
    description: "A hands-on training customized for first- and second-year students to master the fundamentals of biotechnology in 12 days.",
    outcomes: [],
    bonus: "",
    graduates: "students.html#junior-biotechnologist",
    hero: "junior-01.jpg",
    gallery: ["junior-01.jpg","junior-02.jpg","junior-03.jpg","junior-04.jpg","junior-05.jpg","junior-06.jpg","junior-07.jpg","junior-08.jpg","junior-09.jpg"],
    skills: ["Lab safety and good lab practice", "Micropipetting", "Blood sample handling", "DNA extraction protocol", "Working from a written protocol"]
  },
  {
    id: "applied-cosmetic-biotechnology",
    mode: "onsite",
    title: "Applied Cosmetic Biotechnology",
    subtitle: "Hands-on training connecting biotechnology to cosmetic product development, from formulation to quality control.",
    status: "open",
    badge: "Hands-on lab",
    cover: "../onsite/cosmetic-group.jpg",
    tags: ["Cosmetic Biotechnology"],
    facts: [["Format", "On-site training"], ["Instructor", "Dr. Mohamed Zahrah"]],
    description: "A practical lab training where students formulate cosmetic products themselves and learn how biotechnology drives modern cosmetic development, safety and quality control.",
    outcomes: ["Cosmetic formulation and product development", "Natural ingredient extraction", "Working with lab equipment and protocols", "Quality control in cosmetics", "Regulations and safety evaluation"],
    outcomesTitle: "What you will practice",
    bonus: "",
    graduates: "students.html#applied-cosmetic-biotechnology",
    hero: "cosmetic-05.jpg",
    gallery: ["cosmetic-05.jpg","cosmetic-01.jpg","cosmetic-02.jpg","cosmetic-03.jpg","cosmetic-04.jpg","cosmetic-06.jpg","cosmetic-07.jpg","cosmetic-08.jpg","cosmetic-group.jpg"],
    skills: ["Formulation", "Extraction", "Micropipetting", "Quality control"]
  }
];
