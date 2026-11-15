// ============================================================
// ISI DATA DI SINI — semua teks portofolio diatur dari file ini.
// Setiap bagian bertanda "TODO" adalah placeholder yang harus diganti.
// ============================================================

export const SITE = {
  name: "Ryan Nathanael", // TODO: konfirmasi nama tampilan
  handle: "ryan",
  email: "ryan234nathanael@gmail.com", // TODO: ganti jika ingin email lain yang ditampilkan publik
  github: "https://github.com/GawainXOXO",
  linkedin: "https://linkedin.com/in/username-kamu", // TODO
  location: "Indonesia", // TODO: kota
};

export type Lang = "id" | "en";
type L = Record<Lang, string>;

export const ROLE: L = {
  id: "Software Developer", // TODO: mis. "Mahasiswa Informatika · Web Developer"
  en: "Software Developer",
};

export const TAGLINE: L = {
  id: "Saya membangun produk web yang rapi, cepat, dan mudah dipakai. (TODO: ganti dengan kalimat perkenalan kamu)",
  en: "I build clean, fast, easy-to-use web products. (TODO: replace with your own intro)",
};

export const ABOUT: L[] = [
  {
    id: "TODO: Ceritakan siapa kamu, apa yang kamu pelajari, dan apa yang membuatmu tertarik pada teknologi.",
    en: "TODO: Tell who you are, what you are learning, and what draws you to technology.",
  },
  {
    id: "TODO: Paragraf kedua — tujuan karier, hal yang sedang kamu eksplorasi, atau hobi di luar coding.",
    en: "TODO: Second paragraph — career goals, what you are exploring, or hobbies outside coding.",
  },
];

export const SKILLS: { group: L; items: string[] }[] = [
  { group: { id: "Bahasa", en: "Languages" }, items: ["TypeScript", "JavaScript", "Python"] }, // TODO
  { group: { id: "Frontend", en: "Frontend" }, items: ["React", "Next.js", "Tailwind CSS"] }, // TODO
  { group: { id: "Backend & Data", en: "Backend & Data" }, items: ["Node.js", "PostgreSQL", "REST API"] }, // TODO
  { group: { id: "Alat", en: "Tools" }, items: ["Git", "GitHub", "Vercel"] }, // TODO
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
    slug: "proyek-satu",
    title: "Proyek Satu", // TODO
    summary: {
      id: "TODO: Jelaskan masalah yang diselesaikan dan peran kamu.",
      en: "TODO: Describe the problem solved and your role.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2026",
    demo: "#",
    repo: "#",
  },
  {
    slug: "proyek-dua",
    title: "Proyek Dua", // TODO
    summary: {
      id: "TODO: Jelaskan fitur utama dan hasil/dampaknya.",
      en: "TODO: Describe key features and the outcome/impact.",
    },
    stack: ["React", "Node.js", "PostgreSQL"],
    year: "2025",
    repo: "#",
  },
  {
    slug: "proyek-tiga",
    title: "Proyek Tiga", // TODO
    summary: {
      id: "TODO: Proyek kuliah, hackathon, atau eksperimen pribadi.",
      en: "TODO: A course project, hackathon, or personal experiment.",
    },
    stack: ["Python", "FastAPI"],
    year: "2025",
    repo: "#",
  },
];

export const EXPERIENCE: { period: string; title: L; org: string; desc: L }[] = [
  {
    period: "2025 — Sekarang", // TODO
    title: { id: "Posisi / Peran", en: "Role / Position" },
    org: "Nama Organisasi", // TODO
    desc: {
      id: "TODO: Satu-dua kalimat tentang tanggung jawab dan pencapaian.",
      en: "TODO: One or two sentences on responsibilities and achievements.",
    },
  },
  {
    period: "2023 — 2025", // TODO
    title: { id: "Pendidikan / Kegiatan", en: "Education / Activity" },
    org: "Nama Institusi", // TODO
    desc: {
      id: "TODO: Jurusan, organisasi, atau kegiatan relevan.",
      en: "TODO: Major, organization, or relevant activity.",
    },
  },
];
