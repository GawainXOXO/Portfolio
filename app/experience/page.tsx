"use client";
import { EXPERIENCE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { PageTitle } from "@/components/Section";

export default function ExperiencePage() {
  const { lang } = useLang();
  return (
    <>
      <PageTitle lead={UI.expLead[lang]}>{UI.nav.experience[lang]}</PageTitle>
      <div className="space-y-8">
        {EXPERIENCE.map((e) => (
          <article key={e.period + e.org} className="win">
            <div className="titlebar"><span>{e.org.toLowerCase().replace(/[^a-z0-9 ]+/g, "").split(" ").slice(0, 2).join("_")}.exe</span><b>_ □ ×</b></div>
            <div className="p-4">
              <div className="flex items-center gap-3">
                <span className="card-in flex h-14 min-w-14 max-w-28 shrink-0 items-center justify-center !bg-white p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.logo} alt={`Logo ${e.org}`} className="max-h-full w-auto max-w-full object-contain" loading="lazy" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted">{e.period}</p>
                  <h2 className="px text-xs leading-snug">{e.title[lang]}</h2>
                  <p className="px text-[0.6rem] uppercase text-accent">{e.org}</p>
                </div>
              </div>
              <p className="mt-3 leading-snug text-muted">{e.desc[lang]}</p>
              <ul className="mt-2 list-[square] space-y-1 pl-5 text-sm leading-snug marker:text-accent">
                {e.points.map((p, i) => <li key={i}>{p[lang]}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
