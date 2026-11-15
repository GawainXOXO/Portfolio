"use client";
import Link from "next/link";
import { ABOUT, FACTS, SITE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { Block, PageTitle } from "@/components/Section";

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <>
      <PageTitle>{UI.nav.about[lang]}</PageTitle>
      <Block title={UI.story[lang]}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <figure className="win w-44 shrink-0 self-center sm:self-start">
            <div className="titlebar"><span>me.jpg</span><b>_ □ ×</b></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/me.jpg" alt={`Foto ${SITE.fullName}`} width={176} height={176} className="block h-44 w-44 object-cover" />
          </figure>
          <div className="space-y-4 leading-relaxed text-muted">{ABOUT.map((p, i) => <p key={i}>{p[lang]}</p>)}</div>
        </div>
      </Block>
      <Block title={UI.facts[lang]}>
        <dl className="grid gap-3 sm:grid-cols-2">
          {FACTS.map((f) => (
            <div key={f.label.en} className="card p-4">
              <dt className="px text-[0.6rem] uppercase text-accent">{f.label[lang]}</dt>
              <dd className="mt-1">{f.value[lang]}</dd>
            </div>
          ))}
        </dl>
        <Link href="/journey" className="px mt-6 inline-block text-[0.65rem] uppercase text-accent hover:underline">{UI.nav.journey[lang]} →</Link>
      </Block>
    </>
  );
}
