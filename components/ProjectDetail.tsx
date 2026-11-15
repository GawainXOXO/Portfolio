"use client";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";

export function ProjectDetail({ slug }: { slug: string }) {
  const { lang } = useLang();
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return null;
  return (
    <article>
      <Link href="/projects" className="font-mono text-sm text-muted hover:text-accent">← {UI.back[lang]}</Link>
      <h1 className="mt-4 font-display text-4xl font-semibold">{p.title}</h1>
      <p className="mt-1 font-mono text-sm text-muted">{p.year}</p>
      <div className="mt-6 aspect-video rounded-xl border border-dashed border-line bg-surface p-4 text-center font-mono text-xs text-muted flex items-center justify-center">
        TODO: screenshot / video proyek
      </div>
      <p className="mt-6 leading-relaxed text-muted">{p.summary[lang]}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs">{s}</li>)}
      </ul>
      <div className="mt-6 flex gap-5 font-mono text-sm">
        {p.demo && <a href={p.demo} className="text-accent hover:underline">{UI.demo[lang]} ↗</a>}
        {p.repo && <a href={p.repo} className="text-accent hover:underline">{UI.repo[lang]} ↗</a>}
      </div>
    </article>
  );
}
