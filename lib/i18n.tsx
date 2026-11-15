"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./data";

export const UI = {
  nav: {
    about: { id: "Tentang", en: "About" },
    skills: { id: "Skill", en: "Skills" },
    projects: { id: "Proyek", en: "Projects" },
    experience: { id: "Pengalaman", en: "Experience" },
    contact: { id: "Kontak", en: "Contact" },
  },
  hello: { id: "Halo, saya", en: "Hi, I'm" },
  seeProjects: { id: "Lihat proyek", en: "View projects" },
  contactMe: { id: "Hubungi saya", en: "Get in touch" },
  allProjects: { id: "Semua proyek", en: "All projects" },
  demo: { id: "Demo", en: "Live demo" },
  repo: { id: "Kode", en: "Source" },
  contactTitle: { id: "Mari ngobrol", en: "Let's talk" },
  contactLead: {
    id: "Terbuka untuk magang, kolaborasi, dan proyek freelance.",
    en: "Open to internships, collaboration, and freelance work.",
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
      if (s === "id" || s === "en") setLangState(s);
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
