"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE, ROLE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";

const items = [
  ["home", "/", "⌂"],
  ["about", "/about", "☺"],
  ["projects", "/projects", "▣"],
  ["achievements", "/achievements", "★"],
  ["uses", "/uses", "⚙"],
  ["contact", "/contact", "✉"],
] as const;

function Controls() {
  const { lang, setLang } = useLang();
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    try { localStorage.setItem("theme", d ? "dark" : "light"); } catch {}
  };
  const btn = "rounded-md border border-line px-2.5 py-1 font-mono text-xs hover:border-accent";
  return (
    <div className="flex gap-2">
      <button className={btn} onClick={() => setLang(lang === "id" ? "en" : "id")} aria-label="Ganti bahasa">{lang === "id" ? "EN" : "ID"}</button>
      <button className={btn} onClick={toggle} aria-label="Ganti tema">{dark ? "☀" : "☾"}</button>
    </div>
  );
}

function Avatar({ size }: { size: number }) {
  const initials = SITE.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-2xl bg-accent font-display font-semibold text-bg"
      style={{ width: size, height: size, fontSize: size / 2.4 }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

function Menu({ onPick }: { onPick?: () => void }) {
  const path = usePathname();
  const { lang } = useLang();
  return (
    <nav className="flex flex-col gap-1">
      {items.map(([k, href, icon]) => {
        const active = href === "/" ? path === "/" : path.startsWith(href);
        return (
          <Link
            key={k}
            href={href}
            onClick={onPick}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
              active ? "bg-ink text-bg" : "text-muted hover:bg-surface hover:text-ink"
            }`}
          >
            <span className="w-4 text-center">{icon}</span>
            {UI.nav[k][lang]}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-64 lg:shrink-0 lg:flex-col lg:gap-6 lg:py-10">
        <div className="flex flex-col gap-4">
          <Avatar size={88} />
          <div>
            <p className="font-display text-xl font-semibold leading-tight">{SITE.name}</p>
            <p className="mt-1 font-mono text-xs text-muted">{ROLE[lang]}</p>
          </div>
        </div>
        <div className="h-px bg-line" />
        <Menu />
        <div className="h-px bg-line" />
        <div className="mt-auto flex flex-col gap-4">
          <Controls />
          <p className="flex gap-4 font-mono text-xs text-muted">
            <a href={SITE.github} className="hover:text-accent">GitHub</a>
            <a href={SITE.linkedin} className="hover:text-accent">LinkedIn</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-accent">Email</a>
          </p>
        </div>
      </aside>

      {/* Mobile */}
      <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <Avatar size={36} />
            <span className="font-display font-semibold">{SITE.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Controls />
            <button onClick={() => setOpen(!open)} className="rounded-md border border-line px-2.5 py-1 text-sm" aria-label="Menu" aria-expanded={open}>
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {open && <div className="border-t border-line px-3 py-3"><Menu onPick={() => setOpen(false)} /></div>}
      </header>
    </>
  );
}
