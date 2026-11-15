"use client";
import Link from "next/link";
import { PROJECTS, ROLE, SITE, SKILLS, TAGLINE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { Block } from "@/components/Section";
import { Pixel } from "@/components/Pixel";

const COLORS = ["#ff2fb9", "#19d3f5", "#7c3aed", "#ff8a1f", "#27c93f", "#ff3b4e"];
const TILES = [
  ["#ff6ad5", "#8b5cf6", "folder"],
  ["#19d3f5", "#2f5bff", "disc"],
  ["#ffe14a", "#ff8a1f", "star"],
  ["#b5ff3b", "#27c93f", "floppy"],
] as const;

function Word({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <span className="block">
      <span className="script text-[3.2rem] leading-none text-accent sm:text-[4.5rem]">{text[0]}</span>
      {[...text.slice(1).toUpperCase()].map((c, i) => (
        <span key={i} style={{ color: COLORS[(i + offset) % COLORS.length], textShadow: "2px 2px 0 var(--line)" }}>{c}</span>
      ))}
    </span>
  );
}

export default function HomePage() {
  const { lang } = useLang();
  const [first, ...rest] = SITE.name.split(" ");
  return (
    <>
      <section className="win mb-10 overflow-hidden">
        <div className="titlebar"><span>portfolio.bmp</span><b>_ □ ×</b></div>
        <div className="relative p-6 sm:p-8">
          <span className="bob absolute right-6 top-4"><Pixel name="star" size={4} /></span>
          <span className="twinkle absolute right-24 top-16"><Pixel name="spark" size={3} /></span>
          <span className="bob absolute bottom-6 right-8 hidden sm:block" style={{ animationDelay: "-1s" }}><Pixel name="heart" size={5} /></span>
          <span className="twinkle absolute bottom-24 right-28 hidden sm:block"><Pixel name="smile" size={4} /></span>
          <p className="px text-[0.65rem] uppercase text-muted">{UI.hello[lang]}</p>
          <h1 className="px mt-3 text-[1.7rem] leading-[1.05] sm:text-4xl">
            <Word text={first} />
            <Word text={rest.join(" ") || SITE.handle} offset={2} />
          </h1>
          <p className="px mt-4 text-[0.65rem] uppercase">{ROLE[lang]} · {SITE.location}<span className="blink">_</span></p>
          <p className="mt-4 max-w-md text-lg">{TAGLINE[lang]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="card px bg-accent px-4 py-2 text-[0.65rem] uppercase text-white hover:-translate-y-0.5">{UI.nav.projects[lang]}</Link>
            <Link href="/contact" className="card px px-4 py-2 text-[0.65rem] uppercase hover:-translate-y-0.5">{UI.nav.contact[lang]}</Link>
          </div>
        </div>
        <div className="overflow-hidden border-t-2 border-line bg-sun py-1 text-black">
          <div className="marquee px text-[0.6rem] uppercase">
            {[0, 1].map((k) => <span key={k} className="whitespace-nowrap px-6">{UI.ticker[lang]}</span>)}
          </div>
        </div>
      </section>

      <Block n="01" title={UI.skills[lang]}>
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((g) => (
            <div key={g.group.en} className="card p-4">
              <h3 className="px text-[0.6rem] uppercase text-accent">{g.group[lang]}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block n="02" title={UI.nav.projects[lang]}>
        <div className="neon relative overflow-hidden p-6">
          <span className="twinkle absolute left-3 top-3"><Pixel name="heart" size={3} /></span>
          <span className="twinkle absolute right-4 top-6"><Pixel name="spark" size={3} /></span>
          <span className="bob absolute bottom-3 right-5"><Pixel name="star" size={3} /></span>
          <h3 className="px mb-6 text-center text-lg" style={{ color: "#ff6ad5", textShadow: "2px 2px 0 #3b0a6b" }}>
            <span className="script text-4xl">P</span>ROJECT <span className="script text-4xl">H</span>IGHLIGHTS
          </h3>
          <ul className="flex flex-wrap justify-center gap-6">
            {PROJECTS.map((p, i) => {
              const [a, b, sp] = TILES[i % TILES.length];
              return (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="flex w-24 flex-col items-center gap-2 text-center">
                    <span className="tile" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}><Pixel name={sp} size={3} /></span>
                    <span className="px text-[0.5rem] leading-tight text-white/90">{p.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Block>
    </>
  );
}
