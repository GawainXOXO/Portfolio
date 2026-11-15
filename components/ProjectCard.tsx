"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { Project } from "@/lib/data";

export function ProjectCard({ p }: { p: Project }) {
  const { lang } = useLang();
  return (
    <Link href={`/projects/${p.slug}`} className="group flex flex-col rounded-xl border border-line bg-surface p-5 transition hover:-translate-y-1 hover:border-accent">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-xl font-semibold group-hover:text-accent">{p.title}</h3>
        <span className="font-mono text-xs text-muted">{p.year}</span>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary[lang]}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <li key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px]">{s}</li>
        ))}
      </ul>
    </Link>
  );
}
