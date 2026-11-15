"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./data";

export const UI = {
  nav: {
    home: { id: "Beranda", en: "Home" },
    about: { id: "Tentang", en: "About" },
    journey: { id: "My Journey", en: "My Journey" },
    experience: { id: "Pengalaman", en: "Experience" },
    projects: { id: "Proyek", en: "Projects" },
    uses: { id: "Peralatan", en: "Uses" },
    contact: { id: "Kontak", en: "Contact" },
  },
  ticker: {
    id: "★ terbuka untuk pekerjaan & kolaborasi ★ klik menu di kiri untuk menjelajah ★ dibuat dengan Next.js ★",
    en: "★ open to work & collaboration ★ use the menu on the left to explore ★ built with Next.js ★",
  },
  loading: { id: "memuat portfolio.exe", en: "loading portfolio.exe" },
  hello: { id: "Halo, saya", en: "Hi, I'm" },
  skills: { id: "Skill & Teknologi", en: "Skills & Tech" },
  featured: { id: "Proyek pilihan", en: "Featured projects" },
  allProjects: { id: "Semua proyek", en: "All projects" },
  back: { id: "Kembali", en: "Back" },
  journeyLead: { id: "Perjalananku di dunia teknologi, dari yang terbaru ke yang terlama.", en: "My path in tech, from newest to oldest." },
  facts: { id: "Fakta singkat", en: "Quick facts" },
  kindsJ: { work: { id: "Kerja", en: "Work" }, study: { id: "Kuliah", en: "Study" }, org: { id: "Organisasi", en: "Organization" } },
  expLead: { id: "Pengalaman kerja dan organisasi.", en: "Work and organization experience." },
  story: { id: "Cerita singkat", en: "Short story" },
  career: { id: "Pengalaman", en: "Experience" },
  education: { id: "Pendidikan", en: "Education" },
  usesLead: { id: "Alat dan layanan yang aku pakai sehari-hari.", en: "Tools and services I use every day." },
  demo: { id: "Demo", en: "Live demo" },
  repo: { id: "Kode", en: "Source" },
  contactTitle: { id: "Mari ngobrol", en: "Let's talk" },
  contactLead: {
    id: "Terbuka untuk peluang kerja, kolaborasi, dan proyek freelance.",
    en: "Open to job opportunities, collaboration, and freelance work.",
  },
  form: {
    name: { id: "Nama", en: "Name" },
    email: { id: "Email kamu", en: "Your email" },
    message: { id: "Pesan", en: "Message" },
    send: { id: "Kirim lewat email", en: "Send via email" },
  },
  rights: { id: "Dibuat dengan Next.js", en: "Built with Next.js" },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangCtx = createContext<Ctx>({ lang: "id", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");
  useEffect(() => {
    try {
      const s = localStorage.getItem("lang");
      if (s === "id" || s === "en") {
        setLangState(s);
        document.documentElement.lang = s;
      }
    } catch {}
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
    document.documentElement.lang = l;
  };
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
