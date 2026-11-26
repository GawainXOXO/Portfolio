// ============================================================
// All portfolio content lives in this file (source: Ryan's CV).
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

type SkillItem = string | L;
export const SKILLS: { group: L; items: SkillItem[] }[] = [
  { group: { id: "Data & Analitik", en: "Data & Analytics" }, items: ["Python", "R", "Excel", "Looker Studio", "Tableau", "Power BI", "SQL", "SSIS"] },
  { group: { id: "Pengembangan Software", en: "Software Development" }, items: ["React", "Next.js", "Laravel", "PHP", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Java", "C"] },
  { group: { id: "DevOps & Testing", en: "DevOps & Testing" }, items: ["Jenkins", "Kubernetes", "Git", "CI/CD", "Jira", "UAT & QA Testing"] },
  { group: { id: "Desain & Produktivitas", en: "Design & Productivity" }, items: ["Figma", "PowerPoint", "Canva"] },
  {
    group: { id: "Soft Skill", en: "Soft Skills" },
    items: [
      { id: "Komunikasi", en: "Communication" },
      { id: "Pemecahan Masalah", en: "Problem Solving" },
      { id: "Kerja Sama Tim", en: "Teamwork" },
      { id: "Manajemen Waktu", en: "Time Management" },
      { id: "Adaptabilitas", en: "Adaptability" },
      { id: "Kepemimpinan", en: "Leadership" },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: L;
  stack: string[];
  year: string;
  demo?: string;
  repo?: string;
  confidential?: boolean;
  image?: { src: string; alt: L; w: number; h: number };
  thumb?: string;
  gallery?: { src: string; w: number; h: number; caption: L }[];
  problem?: L;
  thinking?: L;
  role?: L;
  workflow?: L[];
  impact?: L;
};

export const PROJECTS: Project[] = [
  {
    slug: "it-helpdesk-dashboard",
    title: "IT-Helpdesk Dashboard",
    summary: {
      id: "Dashboard Power BI untuk memantau tiket IT (Incident dan Work Order): volume tiket, kepatuhan SLA response dan resolution, serta backlog berdasarkan umur tiket.",
      en: "A Power BI dashboard for monitoring IT tickets (Incidents and Work Orders): ticket volume, SLA response and resolution compliance, and backlog by age.",
    },
    stack: ["Power BI", "DAX", "Data Analysis", "Data Visualization"],
    year: "2026",
    thumb: "/projects/helpdesk/ticket-summary.png",
    gallery: [
      { src: "/projects/helpdesk/ticket-summary.png", w: 1126, h: 518, caption: { id: "Ticket Summary: status tiket dan tren harian", en: "Ticket Summary: ticket status and daily trend" } },
      { src: "/projects/helpdesk/overview.png", w: 1119, h: 480, caption: { id: "Overview: volume per tipe, waktu penyelesaian, dan divisi", en: "Overview: volume by type, resolving time, and division" } },
      { src: "/projects/helpdesk/sla-response.png", w: 1129, h: 477, caption: { id: "SLA Response: antrean dan respons di bawah/di atas 4 jam", en: "SLA Response: queue and responses under/over 4 hours" } },
      { src: "/projects/helpdesk/sla-resolution.png", w: 1129, h: 478, caption: { id: "SLA Resolution: bucket waktu penyelesaian", en: "SLA Resolution: resolution-time buckets" } },
      { src: "/projects/helpdesk/pending-it.png", w: 1129, h: 478, caption: { id: "Pending IT: aging backlog dan beban per assignee", en: "Pending IT: backlog aging and per-assignee workload" } },
      { src: "/projects/helpdesk/pending-business.png", w: 1121, h: 478, caption: { id: "Pending Business: backlog di sisi bisnis", en: "Pending Business: business-side backlog" } },
    ],
    confidential: true,
    image: {
      src: "/projects/helpdesk/helpdesk-dashboard.png",
      alt: { id: "Ringkasan enam halaman IT-Helpdesk Dashboard (data disamarkan)", en: "Overview of the six pages of the IT-Helpdesk Dashboard (anonymized)" },
      w: 3540,
      h: 1919,
    },
    problem: {
      id: "Data tiket tersebar di dua sistem (arsip lama dan platform ITSM yang berjalan), sehingga sulit melihat gambaran utuh volume tiket, kecepatan respons, dan tiket yang menumpuk.",
      en: "Ticket data was spread across two systems (a legacy archive and the live ITSM platform), making it hard to see the full picture of ticket volume, response speed, and piled-up tickets.",
    },
    thinking: {
      id: "Aku memetakan dulu kedua sumber data dan definisi SLA-nya sebelum membuat visual apa pun. Fokusku menampilkan metrik yang benar-benar dipakai tim Ops & Support, bukan sekadar banyak grafik: status tiket, waktu respons, waktu penyelesaian, dan umur backlog.",
      en: "I mapped both data sources and their SLA definitions before building any visual. My focus was on the metrics Ops & Support actually use, not just more charts: ticket status, response time, resolution time, and backlog age.",
    },
    role: {
      id: "IT Digital Intern",
      en: "IT Digital Intern",
    },
    workflow: [
      { id: "Mengumpulkan dan merapikan data tiket Incident dan Work Order dari dua sumber.", en: "Collected and cleaned Incident and Work Order ticket data from two sources." },
      { id: "Membuat data model di Power BI dan measure DAX untuk SLA response dan SLA resolution.", en: "Built the Power BI data model and DAX measures for SLA response and SLA resolution." },
      { id: "Membuat aging backlog dan beban per assignee, dipisah untuk antrean IT dan antrean bisnis.", en: "Built backlog aging and per-assignee workload views, split into IT and business queues." },
      { id: "Menyusun enam halaman dengan filter per source, tipe tiket, dan periode.", en: "Designed six report pages with filters for source, ticket type, and period." },
      { id: "Menyajikan hasilnya untuk laporan Ops & Support.", en: "Presented the results for Ops & Support reporting." },
    ],
    impact: {
      id: "Tim mendapat satu tampilan untuk memantau volume tiket, kepatuhan SLA, dan backlog lama, lengkap dengan daftar tiket yang perlu ditindaklanjuti.",
      en: "The team gained a single view to monitor ticket volume, SLA compliance, and aging backlog, with drill-down lists of tickets to follow up.",
    },
  },
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

export const EXPERIENCE: { period: L; title: L; org: string; logo: string; desc: L; points: L[] }[] = [
  {
    period: { id: "Sep 2026 — Sekarang", en: "Sep 2026 — Present" },
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
    period: { id: "Feb 2025 — Feb 2026", en: "Feb 2025 — Feb 2026" },
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
    period: { id: "Nov 2023 — Nov 2024", en: "Nov 2023 — Nov 2024" },
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
