"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE, ROLE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { Pixel } from "./Pixel";

const items = [
  ["home", "/", "win"],
  ["about", "/about", "info"],
  ["journey", "/journey", "floppy"],
  ["experience", "/experience", "bag"],
  ["projects", "/projects", "folder"],
  ["achievements", "/achievements", "star"],
  ["uses", "/uses", "disc"],
  ["contact", "/contact", "mail"],
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
  const btn = "card-in px flex items-center justify-center px-2 py-1 text-[0.6rem] hover:bg-accent hover:text-white";
  return (
    <div className="flex gap-2">
      <button className={btn} onClick={() => setLang(lang === "id" ? "en" : "id")} aria-label="Ganti bahasa">{lang === "id" ? "EN" : "ID"}</button>
      <button
        onClick={toggle}
        role="switch"
        aria-checked={dark}
        aria-label={dark ? "Mode malam aktif, ganti ke siang" : "Mode siang aktif, ganti ke malam"}
        className="switch"
      >
        <span className="ico l"><Pixel name="sun" size={2} /></span>
        <span className="ico r"><Pixel name="moon" size={2} /></span>
        <span className="thumb"><Pixel name={dark ? "moon" : "sun"} size={2} /></span>
      </button>
    </div>
  );
}

function Avatar({ size }: { size: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/me.jpg"
      alt={`Foto ${SITE.name}`}
      width={size}
      height={size}
      className="shrink-0 border-2 border-line object-cover"
      style={{ width: size, height: size, boxShadow: "3px 3px 0 var(--accent)" }}
    />
  );
}

function Menu({ onPick }: { onPick?: () => void }) {
  const path = usePathname();
  const { lang } = useLang();
  return (
    <nav className="flex flex-col gap-2">
      {items.map(([k, href, sprite]) => {
        const active = href === "/" ? path === "/" : path.startsWith(href);
        return (
          <Link
            key={k}
            href={href}
            onClick={onPick}
            className={`px flex items-center gap-3 border-2 border-line px-3 py-2 text-[0.65rem] uppercase transition-transform ${
              active ? "bg-accent text-white shadow-[3px_3px_0_var(--line)]" : "bg-surface hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--line)]"
            }`}
          >
            <Pixel name={sprite} size={2} />
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
      <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-64 lg:shrink-0 lg:flex-col lg:gap-5 lg:py-8">
        <div className="win">
          <div className="titlebar"><span>me.exe</span><b>_ □ ×</b></div>
          <div className="flex flex-col gap-3 p-4">
            <Avatar size={84} />
            <div>
              <p className="px text-sm leading-tight">{SITE.name}</p>
              <p className="mt-1 text-sm text-muted">{ROLE[lang]}<span className="blink">_</span></p>
            </div>
          </div>
        </div>
        <Menu />
        <div className="mt-auto flex flex-col gap-3">
          <Controls />
          <p className="flex gap-3 text-sm text-muted">
            <a href={SITE.github} className="underline hover:text-accent">github</a>
            <a href={SITE.linkedin} className="underline hover:text-accent">linkedin</a>
            <a href={`mailto:${SITE.email}`} className="underline hover:text-accent">email</a>
          </p>
        </div>
      </aside>

      <header className="sticky top-0 z-40 border-b-2 border-line bg-bg lg:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Avatar size={34} />
            <span className="px text-[0.65rem]">{SITE.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Controls />
            <button onClick={() => setOpen(!open)} className="card-in px px-2 py-1 text-[0.6rem]" aria-label="Menu" aria-expanded={open}>
              {open ? "X" : "MENU"}
            </button>
          </div>
        </div>
        {open && <div className="border-t-2 border-line p-3"><Menu onPick={() => setOpen(false)} /></div>}
      </header>
    </>
  );
}
