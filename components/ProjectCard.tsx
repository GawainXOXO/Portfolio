"use client";
import { useLang, UI } from "@/lib/i18n";
import type { Project } from "@/lib/data";

export function ProjectCard({ p }: { p: Project }) {
  const { lang } = useLang();
  return (
    <article className="group flex flex-col rounded-xl border border-line bg-surface p-5 transition hover:-translate-y-1 hover:border-accent">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-xl font-semibold">{p.title}</h3>
        <span className="font-mono text-xs text-muted">{p.year}</span>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary[lang]}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <li key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px]">{s}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4 font-mono text-xs">
        {p.demo && <a href={p.demo} className="text-accent hover:underline">{UI.demo[lang]} ↗</a>}
        {p.repo && <a href={p.repo} className="text-accent hover:underline">{UI.repo[lang]} ↗</a>}
      </div>
    </article>
  );
}
