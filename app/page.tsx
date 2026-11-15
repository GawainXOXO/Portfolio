"use client";
import Link from "next/link";
import { PROJECTS, ROLE, SITE, SKILLS, TAGLINE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { Block } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  const { lang } = useLang();
  return (
    <>
      <section className="relative pb-10">
        <div className="aurora" aria-hidden><i /><i /><i /></div>
        <p className="rise font-mono text-sm text-accent">{UI.hello[lang]}</p>
        <h1 className="rise mt-2 font-display text-4xl font-semibold leading-tight sm:text-6xl" style={{ animationDelay: ".08s" }}>{SITE.name}</h1>
        <p className="rise mt-3 font-mono text-muted" style={{ animationDelay: ".16s" }}>{ROLE[lang]} · {SITE.location}</p>
        <p className="rise mt-5 max-w-xl text-lg leading-relaxed" style={{ animationDelay: ".24s" }}>{TAGLINE[lang]}</p>
      </section>

      <Block title={UI.skills[lang]}>
        <div className="grid gap-3 sm:grid-cols-2">
          {SKILLS.map((g) => (
            <div key={g.group.en} className="rounded-xl border border-line bg-surface p-4">
              <h3 className="font-mono text-xs text-muted">{g.group[lang]}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-sm">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title={UI.featured[lang]}>
        <div className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.slice(0, 2).map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
        <Link href="/projects" className="mt-5 inline-block font-mono text-sm text-accent hover:underline">{UI.allProjects[lang]} →</Link>
      </Block>
    </>
  );
}
