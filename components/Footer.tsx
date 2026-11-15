"use client";
import { SITE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} {SITE.name} · {UI.rights[lang]}</span>
        <span className="flex gap-4">
          <a href={SITE.github} className="hover:text-accent">GitHub</a>
          <a href={SITE.linkedin} className="hover:text-accent">LinkedIn</a>
          <a href={`mailto:${SITE.email}`} className="hover:text-accent">Email</a>
        </span>
      </div>
    </footer>
  );
}
