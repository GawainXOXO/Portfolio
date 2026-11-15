"use client";
import { ABOUT, EDUCATION, EXPERIENCE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { Block, PageTitle } from "@/components/Section";

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <>
      <PageTitle>{UI.nav.about[lang]}</PageTitle>
      <Block title={UI.story[lang]}>
        <div className="space-y-4 leading-relaxed text-muted">{ABOUT.map((p, i) => <p key={i}>{p[lang]}</p>)}</div>
      </Block>
      <Block title={UI.career[lang]}>
        <ol className="space-y-6 border-l border-line pl-6">
          {EXPERIENCE.map((e) => (
            <li key={e.period + e.org} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs text-muted">{e.period}</p>
              <h3 className="font-display text-lg font-semibold">{e.title[lang]} · <span className="text-accent">{e.org}</span></h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{e.desc[lang]}</p>
            </li>
          ))}
        </ol>
      </Block>
      <Block title={UI.education[lang]}>
        <div className="space-y-3">
          {EDUCATION.map((e) => (
            <div key={e.school} className="rounded-xl border border-line bg-surface p-4">
              <p className="font-mono text-xs text-muted">{e.period}</p>
              <h3 className="font-display text-lg font-semibold">{e.school}</h3>
              <p className="text-sm">{e.major[lang]}</p>
              <p className="mt-1 text-sm text-muted">{e.note[lang]}</p>
            </div>
          ))}
        </div>
      </Block>
    </>
  );
}
