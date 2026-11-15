"use client";
import { PROJECTS } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const { lang } = useLang();
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <h1 className="mb-10 font-display text-4xl font-semibold">{UI.nav.projects[lang]}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
