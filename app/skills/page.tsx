"use client";
import { SKILLS } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { Block, PageTitle } from "@/components/Section";
import { SkillIcon } from "@/components/SkillIcon";

export default function SkillsPage() {
  const { lang } = useLang();
  return (
    <>
      <PageTitle lead={UI.skillsLead[lang]}>{UI.nav.skills[lang]}</PageTitle>
      {SKILLS.map((g) => (
        <Block key={g.group.en} title={g.group[lang]}>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {g.items.map((it) => {
              const key = typeof it === "string" ? it : it.en;
              const label = typeof it === "string" ? it : it[lang];
              return (
                <li key={key} className="card flex flex-col items-center gap-2 p-3 text-center transition-transform hover:-translate-y-1">
                  <span className="flex h-10 items-center justify-center"><SkillIcon name={key} /></span>
                  <span className="text-sm leading-tight">{label}</span>
                </li>
              );
            })}
          </ul>
        </Block>
      ))}
    </>
  );
}
