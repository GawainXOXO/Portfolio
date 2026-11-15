"use client";
import { USES } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { Block, PageTitle } from "@/components/Section";

export default function UsesPage() {
  const { lang } = useLang();
  return (
    <>
      <PageTitle lead={UI.usesLead[lang]}>{UI.nav.uses[lang]}</PageTitle>
      {USES.map((g) => (
        <Block key={g.group.en} title={g.group[lang]}>
          <ul className="space-y-3">
            {g.items.map((i) => (
              <li key={i.name} className="rounded-xl border border-line bg-surface p-4">
                <h3 className="font-medium">{i.name}</h3>
                <p className="text-sm text-muted">{i.desc[lang]}</p>
              </li>
            ))}
          </ul>
        </Block>
      ))}
    </>
  );
}
