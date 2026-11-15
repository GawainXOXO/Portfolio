"use client";
import { ABOUT, FACTS, ROLE, SITE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { Block } from "@/components/Section";
import { Pixel } from "@/components/Pixel";

const COLORS = ["#ff2fb9", "#19d3f5", "#7c3aed", "#ff8a1f", "#27c93f", "#ff3b4e"];

function Word({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <span className="block">
      <span className="script text-[3rem] leading-none text-accent sm:text-[4.2rem]">{text[0]}</span>
      {[...text.slice(1).toUpperCase()].map((c, i) => (
        <span key={i} style={{ color: COLORS[(i + offset) % COLORS.length], textShadow: "2px 2px 0 var(--line)" }}>{c}</span>
      ))}
    </span>
  );
}

export default function AboutPage() {
  const { lang } = useLang();
  const [first, ...rest] = SITE.name.split(" ");
  return (
    <>
      <section className="win mb-10">
        <div className="titlebar"><span>{UI.nav.about[lang].toLowerCase()}.txt</span><b>_ □ ×</b></div>
        <div className="relative p-6">
          <span className="bob absolute right-5 top-4"><Pixel name="star" size={3} /></span>
          <span className="twinkle absolute bottom-5 right-8"><Pixel name="heart" size={3} /></span>
          <p className="px text-[0.65rem] uppercase text-muted">{UI.hello[lang]}</p>
          <h1 className="px mt-3 text-[1.6rem] leading-[1.05] sm:text-4xl">
            <Word text={first} />
            <Word text={rest.join(" ") || SITE.handle} offset={2} />
          </h1>
          <p className="px mt-4 text-[0.65rem] uppercase">{ROLE[lang]}<span className="blink">_</span></p>
        </div>
      </section>

      <Block title={UI.story[lang]}>
        <div className="space-y-4 leading-relaxed text-muted">{ABOUT.map((p, i) => <p key={i}>{p[lang]}</p>)}</div>
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
      </Block>
    </>
  );
}
