// ============================================================
// Semua konten portofolio diatur dari file ini (sumber: CV Ryan).
// Nomor telepon sengaja TIDAK dipasang di situs publik.
// ============================================================

export const SITE = {
  name: "Ryan Nathanael",
  fullName: "Ryan Nathanael Budisetiawan",
  handle: "ryan",
  email: "ryan234nathanael@gmail.com",
  github: "https://github.com/GawainXOXO",
  linkedin: "https://www.linkedin.com/in/ryan-budisetiawan/",
  location: "Indonesia",
};

export type Lang = "id" | "en";
type L = Record<Lang, string>;

export const ROLE: L = {
  id: "IT Digital Intern · Lulusan Computer Science",
  en: "IT Digital Intern · Computer Science Graduate",
};

export const TAGLINE: L = {
  id: "Menjembatani tim bisnis dan developer lewat testing, UAT, dan otomasi CI/CD, dengan fondasi kuat di software engineering dan machine learning.",
  en: "Bridging business teams and developers through testing, UAT, and CI/CD automation, with a solid foundation in software engineering and machine learning.",
};

export const ABOUT: L[] = [
  {
    id: "Aku lulusan Computer Science dari Bina Nusantara University (spesialisasi Software Engineering) dengan pengalaman langsung di application testing, UAT, dan release support untuk sistem enterprise. Saat ini aku IT Digital Intern di Sinar Mas Agribusiness and Food, menjembatani tim bisnis dan developer pada platform ITSM lewat workflow testing, issue tracking, dokumentasi teknis, dan analisis data operasional.",
    en: "I'm a Computer Science graduate of Bina Nusantara University (Software Engineering specialization) with hands-on experience in application testing, UAT, and release support across enterprise systems. I'm currently an IT Digital Intern at Sinar Mas Agribusiness and Food, bridging business teams and developers on an ITSM platform through workflow testing, issue tracking, technical documentation, and operational data analysis.",
  },
  {
    id: "Sebelumnya aku mendukung banyak proyek UAT lewat otomasi CI/CD (Jenkins, Kubernetes, Git) di industri keuangan. Aku juga punya dasar kuat di Machine Learning dan computer vision lewat riset sistem pengenalan cerdas, termasuk skripsi tentang pengenalan Bahasa Isyarat Indonesia.",
    en: "Previously I supported many UAT projects through CI/CD automation (Jenkins, Kubernetes, Git) in financial services. I also have a strong foundation in Machine Learning and computer vision through research on intelligent recognition systems, including my thesis on Indonesian Sign Language recognition.",
  },
];

export const FACTS: { label: L; value: L }[] = [
  { label: { id: "Status", en: "Status" }, value: { id: "IT Digital Intern, terbuka untuk peluang kerja", en: "IT Digital Intern, open to job opportunities" } },
  { label: { id: "Pendidikan", en: "Education" }, value: { id: "Lulusan Computer Science (Software Engineering), BINUS", en: "Computer Science (Software Engineering) graduate, BINUS" } },
  { label: { id: "Fokus", en: "Focus" }, value: { id: "Testing & UAT, CI/CD, machine learning", en: "Testing & UAT, CI/CD, machine learning" } },
  { label: { id: "Lokasi", en: "Location" }, value: { id: "Indonesia", en: "Indonesia" } },
];

export const SKILLS: { group: L; items: string[] }[] = [
  { group: { id: "Testing & QA", en: "Testing & QA" }, items: ["UAT", "Functional & UI/UX Testing", "Workflow Testing", "Test Case Design", "SDLC", "AI-Assisted Test Generation"] },
  { group: { id: "DevOps & Infrastruktur", en: "DevOps & Infrastructure" }, items: ["Jenkins", "Kubernetes", "Git", "CI/CD"] },
  { group: { id: "Data & Machine Learning", en: "Data & Machine Learning" }, items: ["SQL", "SSIS", "Python", "Excel", "Machine Learning"] },
  { group: { id: "Software Development", en: "Software Development" }, items: ["Next.js", "React", "Laravel", "PHP", "JavaScript", "Java", "HTML & CSS", "Tailwind CSS", "Bootstrap"] },
  { group: { id: "UI/UX", en: "UI/UX" }, items: ["Figma"] },
];

export type Project = {
  slug: string;
  title: string;
  summary: L;
  stack: string[];
  year: string;
  demo?: string;
  repo?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "robustness-sign-language",
    title: "Robustness of Sign Language Recognition",
    summary: {
      id: "Skripsi: sistem pengenalan Bahasa Isyarat Indonesia berbasis LSTM dan computer vision untuk mendukung aksesibilitas, dengan membandingkan beberapa konfigurasi model AI untuk menemukan pendekatan yang andal di dunia nyata.",
      en: "Undergraduate thesis: an LSTM-based Indonesian Sign Language recognition system using computer vision to support accessibility, comparing several AI model configurations to find approaches that hold up in real-world use.",
    },
    stack: ["Python", "LSTM", "Computer Vision", "Machine Learning"],
    year: "2026",
  },
  {
    slug: "bookexchange",
    title: "BookExchange",
    summary: {
      id: "Aplikasi manajemen perpustakaan berbasis web: mahasiswa bisa meminjam buku, pustakawan mengelola inventaris dan memantau peminjaman. Fitur utama: CRUD dan autentikasi pengguna.",
      en: "A web-based library management app where students borrow books and librarians manage inventory and monitor borrowing. Key features: CRUD and user authentication.",
    },
    stack: ["Laravel", "PHP", "CRUD", "Authentication"],
    year: "2024",
  },
  {
    slug: "frontend-react",
    title: "Front-End Website Projects",
    summary: {
      id: "Beberapa proyek front-end dengan React yang berfokus pada antarmuka intuitif dan ramah pengguna, menerapkan prinsip UI/UX di seluruh proses desain.",
      en: "Several front-end projects built with React, focused on intuitive, user-friendly interfaces and applying UI/UX principles throughout the design process.",
    },
    stack: ["React", "UI/UX", "Web Development"],
    year: "2023",
  },
];

export const EXPERIENCE: { period: string; title: L; org: string; logo: string; desc: L; points: L[] }[] = [
  {
    period: "Sep 2026 — Sekarang",
    title: { id: "IT Digital Intern", en: "IT Digital Intern" },
    org: "Sinar Mas Agribusiness and Food",
    logo: "/logos/smart-icon.png",
    desc: {
      id: "Menjembatani tim bisnis dan developer pada platform ITSM GAR.",
      en: "Bridging business teams and developers on the GAR ITSM platform.",
    },
    points: [
      { id: "Business–IT liaison: mengumpulkan isu dan kebutuhan, melacak penyelesaian bug, dan mengelola umpan balik sampai tuntas.", en: "Business–IT liaison: gather issues and requirements, track bug resolution, and manage feedback through to closure." },
      { id: "Application testing & UAT pada modul ITSM (Change Request, Incident, Release, Work Order, Contract), termasuk approval flow, search, export, email approval, plus regression testing.", en: "Application testing & UAT on ITSM modules (Change Request, Incident, Release, Work Order, Contract), including approval flows, search, export, email approval, with regression testing." },
      { id: "Menemukan inkonsistensi workflow, celah access control, dan kelemahan validasi sebelum rilis, dengan acuan proses BMC Helix.", en: "Identify workflow inconsistencies, access-control gaps, and validation flaws before release, using the BMC Helix process as reference." },
      { id: "Menulis dokumen UAT, test plan, test case, dan issue log; menganalisis data tiket operasional di Excel untuk laporan Ops & Support.", en: "Write UAT documents, test plans, test cases, and issue logs; analyze operational ticket data in Excel for Ops & Support reports." },
      { id: "Memakai AI untuk prompt engineering, penyusunan dokumen, dan pembuatan test case.", en: "Use AI tools for prompt engineering, document drafting, and test case generation." },
    ],
  },
  {
    period: "Feb 2025 — Feb 2026",
    title: { id: "DevOps Engineer Intern", en: "DevOps Engineer Intern" },
    org: "PT Adira Dinamika Multi Finance Tbk.",
    logo: "/logos/adira-icon.png",
    desc: {
      id: "Mengotomasi deployment dan mendukung rilis di industri keuangan.",
      en: "Automated deployments and supported releases in financial services.",
    },
    points: [
      { id: "Merancang dan memelihara pipeline CI/CD Jenkins terintegrasi Kubernetes untuk mengotomasi deployment web service.", en: "Designed and maintained Jenkins CI/CD pipelines integrated with Kubernetes to automate web service deployments." },
      { id: "Mendukung banyak proyek UAT dan memastikan kesiapan fitur serta eksekusi deployment berjalan mulus.", en: "Supported many UAT projects, ensuring feature readiness and smooth deployment execution." },
      { id: "Mengoptimalkan alur deployment dan kesiapan UAT, berkontribusi pada pencapaian KPI divisi lewat peningkatan performa yang signifikan.", en: "Optimized deployment workflows and UAT readiness, contributing to division KPI achievement through significant performance improvements." },
      { id: "Membantu rilis produksi dengan deployment yang tepat jadwal.", en: "Assisted production releases with on-schedule deployments." },
      { id: "Ikut integrasi end-to-end sistem enterprise, serta menyiapkan dan memvalidasi data (nasabah, pengguna, pinjaman, pembayaran) untuk skenario UAT.", en: "Took part in end-to-end enterprise system integration, and prepared and validated data (customer, user, loan, payment) for UAT scenarios." },
    ],
  },
  {
    period: "Nov 2023 — Nov 2024",
    title: { id: "Public Relation Staff", en: "Public Relation Staff" },
    org: "Bina Nusantara Computer Club",
    logo: "/logos/bncc-icon.png",
    desc: {
      id: "Mengelola media sosial BNCC dan kemitraan media.",
      en: "Managed BNCC social media and media partnerships.",
    },
    points: [
      { id: "Mengelola Instagram BNCC dan membuat konten Reels yang menjangkau banyak penonton.", en: "Managed BNCC's Instagram and produced Reels content that reached a wide audience." },
      { id: "Menyusun standar pembuatan konten dan memastikan konten sesuai SOP.", en: "Created content standards and ensured posts followed the SOP." },
      { id: "Berkontribusi pada banyak kemitraan media dalam waktu singkat.", en: "Contributed to many media partnerships in a short time." },
    ],
  },
];

export const EDUCATION: { period: string; school: string; logo: string; major: L; note: L }[] = [
  {
    period: "2022 — 2026",
    school: "Bina Nusantara University (BINUS)",
    logo: "/logos/binus-icon.png",
    major: { id: "S1 Computer Science (Software Engineering)", en: "B.Sc. Computer Science (Software Engineering)" },
    note: {
      id: "IPK 3,39/4,00. Fokus pada Software Engineering, Machine Learning, dan Data Analytics. Skripsi: “Robustness of LSTM-Based Indonesian Sign Language Recognition System.”",
      en: "GPA 3.39/4.00. Emphasis on Software Engineering, Machine Learning, and Data Analytics. Thesis: “Robustness of LSTM-Based Indonesian Sign Language Recognition System.”",
    },
  },
];

export const ACHIEVEMENTS: { year: string; title: string; org: string; kind: "cert" | "award" | "competition"; link?: string }[] = [
  { year: "2026", title: "Microsoft Azure AI Fundamentals", org: "Bina Nusantara University (BINUS)", kind: "cert" },
  { year: "2024", title: "Semifinalis FindIT Hackathon", org: "DTETI FT UGM", kind: "competition" },
];

export const USES: { group: L; items: { name: string; desc: L }[] }[] = [
  {
    group: { id: "DevOps", en: "DevOps" },
    items: [
      { name: "Jenkins", desc: { id: "Pipeline CI/CD untuk deployment web service", en: "CI/CD pipelines for web service deployments" } },
      { name: "Kubernetes", desc: { id: "Orkestrasi dan deployment container", en: "Container orchestration and deployment" } },
      { name: "Git", desc: { id: "Version control, build tracking, dan validasi deployment", en: "Version control, build tracking, and deployment validation" } },
    ],
  },
  {
    group: { id: "Data", en: "Data" },
    items: [
      { name: "SQL & SSIS", desc: { id: "Ekstraksi, persiapan, dan validasi data", en: "Data extraction, preparation, and validation" } },
      { name: "Python & Excel", desc: { id: "Analisis data dan eksperimen machine learning", en: "Data analysis and machine learning experiments" } },
    ],
  },
  {
    group: { id: "Desain & Web", en: "Design & Web" },
    items: [
      { name: "Figma", desc: { id: "Desain UI/UX", en: "UI/UX design" } },
      { name: "Next.js, React, Laravel", desc: { id: "Pengembangan aplikasi web", en: "Web application development" } },
      { name: "Vercel", desc: { id: "Hosting dan deploy otomatis", en: "Hosting and automatic deploys" } },
    ],
  },
];
