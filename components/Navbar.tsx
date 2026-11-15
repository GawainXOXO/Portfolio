"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UI, useLang } from "@/lib/i18n";
import { SITE } from "@/lib/data";

const links = [
  ["about", "/#about"],
  ["skills", "/#skills"],
  ["projects", "/#projects"],
  ["experience", "/#experience"],
  ["contact", "/contact"],
] as const;

export function Navbar() {
  const { lang, setLang } = useLang();
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    try { localStorage.setItem("theme", d ? "dark" : "light"); } catch {}
  };
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="font-mono text-sm font-semibold">
          <span className="text-accent">~/</span>{SITE.handle}
        </Link>
        <ul className="hidden gap-6 text-sm text-muted md:flex">
          {links.map(([k, href]) => (
            <li key={k}><Link href={href} className="hover:text-ink">{UI.nav[k][lang]}</Link></li>
          ))}
        </ul>
        <div className="flex items-center gap-2 font-mono text-xs">
          <button onClick={() => setLang(lang === "id" ? "en" : "id")} className="rounded border border-line px-2 py-1 hover:border-accent" aria-label="Ganti bahasa">
            {lang === "id" ? "EN" : "ID"}
          </button>
          <button onClick={toggle} className="rounded border border-line px-2 py-1 hover:border-accent" aria-label="Ganti tema">
            {dark ? "☀" : "☾"}
          </button>
        </div>
      </nav>
    </header>
  );
}
