"use client";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";

const T = {
  problem: { id: "Masalah", en: "Problem" },
  thinking: { id: "Proses Berpikir", en: "Thinking Process" },
  role: { id: "Peran", en: "Role" },
  workflow: { id: "Alur Kerja", en: "Workflow" },
  impact: { id: "Dampak", en: "Impact" },
  confidential: { id: "Tampilan telah dianonimkan: logo, nama, nomor tiket, dan waktu detail disamarkan.", en: "Screenshots are anonymized: logo, names, ticket numbers, and detailed timestamps are redacted." },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="px text-sm text-accent">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

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
      {p.image && (
        <a href={p.image.src} target="_blank" rel="noopener noreferrer" className="card mt-8 block overflow-hidden p-2" title={p.image.alt[lang]}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image.src} alt={p.image.alt[lang]} width={p.image.w} height={p.image.h} className="h-auto w-full" />
        </a>
      )}
      {p.problem && <Block title={T.problem[lang]}><p className="leading-relaxed text-muted">{p.problem[lang]}</p></Block>}
      {p.thinking && <Block title={T.thinking[lang]}><p className="leading-relaxed text-muted">{p.thinking[lang]}</p></Block>}
      {p.role && <Block title={T.role[lang]}><p>{p.role[lang]}</p></Block>}
      {p.workflow && (
        <Block title={T.workflow[lang]}>
          <ol className="space-y-2 text-muted">
            {p.workflow.map((w, i) => (
              <li key={w.en} className="flex gap-3"><span className="px text-[0.6rem] text-accent">{i + 1}</span><span>{w[lang]}</span></li>
            ))}
          </ol>
        </Block>
      )}
      {p.impact && <Block title={T.impact[lang]}><p className="leading-relaxed text-muted">{p.impact[lang]}</p></Block>}
      {p.confidential && (
        <p className="card mt-8 p-3 text-muted">{T.confidential[lang]}</p>
      )}
      <div className="mt-6 flex gap-5 px text-[0.65rem] uppercase">
        {p.demo && <a href={p.demo} className="text-accent hover:underline">{UI.demo[lang]} ↗</a>}
        {p.repo && <a href={p.repo} className="text-accent hover:underline">{UI.repo[lang]} ↗</a>}
      </div>
    </article>
  );
}
