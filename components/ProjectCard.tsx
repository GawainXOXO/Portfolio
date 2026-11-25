"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { Project } from "@/lib/data";

export function ProjectCard({ p }: { p: Project }) {
  const { lang } = useLang();
  return (
    <Link href={`/projects/${p.slug}`} className="card group flex flex-col p-4 transition-transform hover:-translate-y-1">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="px text-sm group-hover:text-accent">{p.confidential && "🔒 "}{p.title}</h3>
        <span className="px text-[0.6rem] text-muted">{p.year}</span>
      </div>
      <p className="mt-2 flex-1 text-muted">{p.summary[lang]}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((s) => <li key={s} className="chip">{s}</li>)}
      </ul>
    </Link>
  );
}
