"use client";
import { PROJECTS } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { PageTitle } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const { lang } = useLang();
  return (
    <>
      <PageTitle>{UI.nav.projects[lang]}</PageTitle>
      <div className="grid gap-4 sm:grid-cols-2">{PROJECTS.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
    </>
  );
}
