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
    id: "Sebelumnya aku mendukung 100+ proyek UAT lewat otomasi CI/CD (Jenkins, Kubernetes, Git) di industri keuangan. Aku juga punya dasar kuat di Machine Learning dan computer vision lewat riset sistem pengenalan cerdas, termasuk skripsi tentang pengenalan Bahasa Isyarat Indonesia.",
    en: "Previously I supported 100+ UAT projects through CI/CD automation (Jenkins, Kubernetes, Git) in financial services. I also have a strong foundation in Machine Learning and computer vision through research on intelligent recognition systems, including my thesis on Indonesian Sign Language recognition.",
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
      { id: "Business–IT Liaison: menjembatani tim bisnis dan developer pada platform ITSM GAR, mengumpulkan isu dan kebutuhan, melacak penyelesaian bug, dan mengelola umpan balik sampai tuntas.", en: "Business–IT Liaison: bridge business teams and developers on the GAR ITSM platform: gather issues and requirements, track bug resolution, and manage feedback through to closure." },
      { id: "Application Testing & UAT: pengujian fungsional, UI/UX, dan workflow pada modul ITSM berbasis web (Change Request, Incident, Release, Work Order, Contract), termasuk approval flow, search, export, dan email approval, plus regression testing atas perbaikan.", en: "Application Testing & UAT: run functional, UI/UX, and workflow testing on web-based ITSM modules (Change Request, Incident, Release, Work Order, Contract), including approval flows, search, export, and email approval, with regression testing of fixes." },
      { id: "Logic & Security Checks: menemukan inkonsistensi workflow, celah access control, dan kelemahan validasi sebelum rilis, divalidasi dengan proses BMC Helix sebagai acuan.", en: "Logic & Security Checks: identify workflow inconsistencies, access-control gaps, and validation flaws before release, validated against the BMC Helix process as reference." },
      { id: "Documentation & Reporting: menulis dokumen UAT, test plan, test case, dan issue log; menganalisis data tiket operasional di Excel dan menyiapkan laporan untuk Ops & Support. Membuat IT-Helpdesk Dashboard di Power BI untuk memantau tiket, SLA, dan backlog.", en: "Documentation & Reporting: write UAT documents, test plans, test cases, and issue logs; analyze operational ticket data in Excel and prepare reports for Ops & Support. Built the IT-Helpdesk Dashboard in Power BI to monitor tickets, SLA, and backlog." },
      { id: "AI-Assisted Workflow: memakai AI untuk prompt engineering, penyusunan dokumen, dan pembuatan test case demi mempercepat alur kerja tim.", en: "AI-Assisted Workflow: use AI tools for prompt engineering, document drafting, and test case generation to speed up team workflows." },
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
      { id: "CI/CD Pipeline Development: merancang dan memelihara pipeline CI/CD Jenkins terintegrasi Kubernetes untuk mengotomasi deployment web service, meningkatkan efisiensi dan keandalan deployment.", en: "CI/CD Pipeline Development: designed and maintained Jenkins CI/CD pipelines integrated with Kubernetes to automate web service deployments, improving deployment efficiency and reliability." },
      { id: "UAT & Release Management: mendukung 50+ proyek UAT, memastikan deployment berjalan mulus dan fitur siap, dengan zero downtime selama pengujian.", en: "UAT & Release Management: supported 50+ UAT projects, ensuring seamless deployment execution and feature readiness with zero downtime during testing activities." },
      { id: "Deployment Optimization: meningkatkan alur deployment dan kesiapan UAT, berkontribusi pada pencapaian KPI divisi dengan peningkatan performa hingga 4× dibanding baseline sebelumnya.", en: "Deployment Optimization: improved deployment workflows and UAT readiness, contributing to division KPI achievement with up to 4× performance improvement compared to the previous baseline." },
      { id: "Production Deployment: membantu rilis produksi dengan tingkat keberhasilan deployment tepat jadwal sekitar 75% pada proyek yang ditangani.", en: "Production Deployment: assisted production releases, achieving an approximately 75% on-schedule deployment success rate across assigned projects." },
      { id: "System Integration: ikut integrasi end-to-end sistem enterprise untuk memastikan interoperabilitas yang andal dan mendukung proses bisnis kritis.", en: "System Integration: participated in end-to-end integration of enterprise systems, ensuring reliable interoperability and supporting critical business processes." },
      { id: "Data Processing & Environment Support: ekstraksi, persiapan, dan validasi data massal (nasabah, pengguna, pinjaman, pembayaran) untuk skenario UAT dan menjaga environment pengujian tetap konsisten.", en: "Data Processing & Environment Support: performed bulk data extraction, preparation, and validation of customer, user, loan, and payment data to support UAT scenarios and maintain consistent testing environments." },
      { id: "Version Control & Deployment Validation: memakai Git untuk version control, build tracking, dan validasi deployment agar integritas kode terjaga di lingkungan development dan testing.", en: "Version Control & Deployment Validation: utilized Git for version control, build tracking, and deployment validation to ensure code integrity across development and testing environments." },
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
      { id: "Mengelola Instagram BNCC dengan 6.000+ pengikut dan membuat konten Reels dengan total 40.000+ penayangan.", en: "Managed BNCC's Instagram (6,000+ followers) and produced Reels content with 40,000+ total views." },
      { id: "Memeriksa insight media sosial setiap bulan dan menyusun standar pembuatan konten.", en: "Reviewed social media insights monthly and created the content-making standard." },
      { id: "Memastikan konten aman dipublikasikan dan sesuai SOP.", en: "Made sure content was safe to post and followed the SOP." },
      { id: "Berkontribusi pada 60+ kemitraan media dalam 2 kuartal dan mewakili BNCC di beberapa acara mitra.", en: "Contributed to 60+ media partnerships within 2 quarters and represented BNCC at several partner events." },
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
