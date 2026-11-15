"use client";
import { ACHIEVEMENTS, EDUCATION, EXPERIENCE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { PageTitle } from "@/components/Section";
import { Pixel } from "@/components/Pixel";

type Kind = "work" | "study" | "org" | "cert" | "comp";

function Logo({ src, name }: { src: string; name: string }) {
  return (
    <span className="card-in flex h-14 min-w-14 max-w-28 shrink-0 items-center justify-center !bg-white p-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`Logo ${name}`} className="max-h-full w-auto max-w-full object-contain" loading="lazy" />
    </span>
  );
}

export default function JourneyPage() {
  const { lang } = useLang();
  const [smart, adira, bncc] = EXPERIENCE;
  const binus = EDUCATION[0];
  const azure = ACHIEVEMENTS.find((a) => a.kind === "cert")!;
  const findit = ACHIEVEMENTS.find((a) => a.kind === "competition")!;

  // Urutan: terbaru → terlama
  const items: {
    key: string; kind: Kind; period: string; title: string; org: string; logo?: string; desc: string; points?: string[];
  }[] = [
    { key: "smart", kind: "work", period: smart.period, title: smart.title[lang], org: smart.org, logo: smart.logo, desc: smart.desc[lang], points: smart.points.map((p) => p[lang]) },
    { key: "azure", kind: "cert", period: "Jul 2026", title: azure.title, org: azure.org, logo: binus.logo, desc: "" },
    { key: "adira", kind: "work", period: adira.period, title: adira.title[lang], org: adira.org, logo: adira.logo, desc: adira.desc[lang], points: adira.points.map((p) => p[lang]) },
    { key: "findit", kind: "comp", period: "2024", title: findit.title, org: findit.org, desc: "" },
    { key: "bncc", kind: "org", period: bncc.period, title: bncc.title[lang], org: bncc.org, logo: bncc.logo, desc: bncc.desc[lang], points: bncc.points.map((p) => p[lang]) },
    { key: "binus", kind: "study", period: binus.period, title: binus.major[lang], org: binus.school, logo: binus.logo, desc: binus.note[lang] },
  ];

  return (
    <>
      <PageTitle lead={UI.journeyLead[lang]}>{UI.nav.journey[lang]}</PageTitle>
      <ol className="space-y-8 border-l-2 border-line pl-6">
        {items.map((e) => (
          <li key={e.key} className="relative">
            <span className="absolute -left-[33px] top-2 h-3 w-3 border-2 border-line bg-accent" />
            <div className="flex items-center gap-3">
              {e.logo ? <Logo src={e.logo} name={e.org} /> : (
                <span className="card-in flex h-14 min-w-14 items-center justify-center !bg-white" aria-hidden><Pixel name="star" size={4} /></span>
              )}
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  {e.period}
                  <span className="chip px px-1.5 text-[0.5rem] uppercase text-accent">{UI.kindsJ[e.kind][lang]}</span>
                </p>
                <h3 className="px text-xs leading-snug">{e.title} · <span className="text-accent">{e.org}</span></h3>
              </div>
            </div>
            {e.desc && <p className="mt-2 leading-snug text-muted">{e.desc}</p>}
            {e.points && (
              <ul className="mt-2 list-[square] space-y-1 pl-5 text-sm leading-snug marker:text-accent">
                {e.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </>
  );
}
