import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import { ProjectDetail } from "@/components/ProjectDetail";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!PROJECTS.some((p) => p.slug === slug)) notFound();
  return <ProjectDetail slug={slug} />;
}
