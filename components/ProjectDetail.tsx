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
      <Link href="/projects" className="px text-[0.65rem] text-muted hover:text-accent">← {UI.back[lang]}</Link>
      <h1 className="mt-4 px text-2xl">{p.title}</h1>
      <p className="mt-1 text-muted">{p.year}</p>
      <p className="mt-6 leading-relaxed text-muted">{p.summary[lang]}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => <li key={s} className="chip">{s}</li>)}
      </ul>
      <div className="mt-6 flex gap-5 px text-[0.65rem] uppercase">
        {p.demo && <a href={p.demo} className="text-accent hover:underline">{UI.demo[lang]} ↗</a>}
        {p.repo && <a href={p.repo} className="text-accent hover:underline">{UI.repo[lang]} ↗</a>}
      </div>
    </article>
  );
}
