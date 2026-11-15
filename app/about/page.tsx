"use client";
import { ABOUT, EDUCATION, EXPERIENCE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { Block, PageTitle } from "@/components/Section";

function Logo({ src, name }: { src: string; name: string }) {
  return (
    <span className="card-in flex h-14 min-w-14 max-w-28 shrink-0 items-center justify-center !bg-white p-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`Logo ${name}`} className="max-h-full w-auto max-w-full object-contain" loading="lazy" />
    </span>
  );
}

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
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 border-2 border-line bg-accent" />
              <div className="flex items-center gap-3">
                <Logo src={e.logo} name={e.org} />
                <div>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                  <h3 className="px text-xs">{e.title[lang]} · <span className="text-accent">{e.org}</span></h3>
                </div>
              </div>
              <p className="mt-2 leading-snug text-muted">{e.desc[lang]}</p>
              <ul className="mt-2 list-[square] space-y-1 pl-5 text-sm leading-snug marker:text-accent">
                {e.points.map((pt, i) => <li key={i}>{pt[lang]}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Block>
      <Block title={UI.education[lang]}>
        <div className="space-y-3">
          {EDUCATION.map((e) => (
            <div key={e.school} className="card-in p-4">
              <div className="flex items-center gap-3">
                <Logo src={e.logo} name={e.school} />
                <div>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                  <h3 className="px text-xs">{e.school}</h3>
                  <p className="text-sm">{e.major[lang]}</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted">{e.note[lang]}</p>
            </div>
          ))}
        </div>
      </Block>
    </>
  );
}
