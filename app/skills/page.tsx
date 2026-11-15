"use client";
import { useMemo, useState } from "react";
import { SKILLS } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { PageTitle } from "@/components/Section";
import { SkillIcon } from "@/components/SkillIcon";

export default function SkillsPage() {
  const { lang } = useLang();
  const [active, setActive] = useState<string>("all");

  const items = useMemo(
    () =>
      SKILLS.flatMap((g) =>
        g.items.map((it) => ({
          key: typeof it === "string" ? it : it.en,
          label: typeof it === "string" ? it : it[lang],
          cat: g.group.en,
        })),
      ).filter((it, i, arr) => arr.findIndex((x) => x.key === it.key) === i || active !== "all"),
    [lang, active],
  );
  const shown = active === "all" ? items : items.filter((i) => i.cat === active);

  const chip = (on: boolean) =>
    `chip px text-[0.55rem] uppercase transition-colors ${on ? "!bg-accent text-white" : "hover:bg-sun hover:text-black"}`;

  return (
    <>
      <PageTitle lead={UI.skillsLead[lang]}>{UI.nav.skills[lang]}</PageTitle>

      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label={lang === "id" ? "Filter kategori skill" : "Skill category filter"}>
        <button className={chip(active === "all")} aria-pressed={active === "all"} onClick={() => setActive("all")}>
          {UI.all[lang]} ({new Set(SKILLS.flatMap((g) => g.items.map((i) => (typeof i === "string" ? i : i.en)))).size})
        </button>
        {SKILLS.map((g) => (
          <button key={g.group.en} className={chip(active === g.group.en)} aria-pressed={active === g.group.en} onClick={() => setActive(g.group.en)}>
            {g.group[lang]}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-[repeat(auto-fill,minmax(4.4rem,1fr))] gap-2">
        {shown.map((s) => (
          <li
            key={s.cat + s.key}
            title={s.label}
            className="card-in flex flex-col items-center gap-1.5 px-1 py-2 text-center transition-transform hover:-translate-y-0.5 hover:border-accent"
          >
            <SkillIcon name={s.key} size={22} />
            <span className="text-[0.72rem] leading-[1.1]">{s.label}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
