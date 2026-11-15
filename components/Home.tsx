"use client";
import Link from "next/link";
import { ABOUT, EXPERIENCE, PROJECTS, ROLE, SITE, SKILLS, TAGLINE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { ProjectCard } from "./ProjectCard";

function Heading({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-8 flex items-baseline gap-3 font-display text-3xl font-semibold">
      <span className="font-mono text-sm text-accent">{n}</span>{children}
    </h2>
  );
}

export function Home() {
  const { lang } = useLang();
  return (
    <div className="mx-auto max-w-5xl px-5">
      <section className="flex min-h-[78vh] flex-col justify-center py-20">
        <p className="rise font-mono text-sm text-accent">{UI.hello[lang]}</p>
        <h1 className="rise mt-3 font-display text-5xl font-semibold leading-[1.05] sm:text-7xl" style={{ animationDelay: ".08s" }}>
          {SITE.name}
        </h1>
        <p className="rise mt-4 font-mono text-lg text-muted" style={{ animationDelay: ".16s" }}>{ROLE[lang]}</p>
        <p className="rise mt-6 max-w-xl text-lg leading-relaxed" style={{ animationDelay: ".24s" }}>{TAGLINE[lang]}</p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: ".32s" }}>
          <Link href="/#projects" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg hover:opacity-90">{UI.seeProjects[lang]}</Link>
          <Link href="/contact" className="rounded-full border border-line px-5 py-2.5 text-sm hover:border-accent">{UI.contactMe[lang]}</Link>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 py-14">
        <Heading n="01">{UI.nav.about[lang]}</Heading>
        <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
          {ABOUT.map((p, i) => <p key={i}>{p[lang]}</p>)}
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 py-14">
        <Heading n="02">{UI.nav.skills[lang]}</Heading>
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((g) => (
            <div key={g.group.en} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{g.group[lang]}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-sm">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 py-14">
        <Heading n="03">{UI.nav.projects[lang]}</Heading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
        <Link href="/projects" className="mt-6 inline-block font-mono text-sm text-accent hover:underline">{UI.allProjects[lang]} →</Link>
      </section>

      <section id="experience" className="scroll-mt-20 py-14">
        <Heading n="04">{UI.nav.experience[lang]}</Heading>
        <ol className="space-y-8 border-l border-line pl-6">
          {EXPERIENCE.map((e) => (
            <li key={e.period + e.org} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs text-muted">{e.period}</p>
              <h3 className="font-display text-xl font-semibold">{e.title[lang]} · <span className="text-accent">{e.org}</span></h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{e.desc[lang]}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
