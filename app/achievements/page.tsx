"use client";
import { useState } from "react";
import { ACHIEVEMENTS } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { PageTitle } from "@/components/Section";

type Kind = "all" | "cert" | "award" | "competition";

export default function AchievementsPage() {
  const { lang } = useLang();
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<Kind>("all");
  const list = ACHIEVEMENTS.filter(
    (a) => (kind === "all" || a.kind === kind) && (a.title + a.org).toLowerCase().includes(q.toLowerCase()),
  );
  const kinds: Kind[] = ["all", "cert", "award", "competition"];
  return (
    <>
      <PageTitle lead={UI.achLead[lang]}>{UI.nav.achievements[lang]}</PageTitle>
      <div className="mb-6 flex flex-wrap gap-3">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={UI.search[lang]} className="min-w-52 flex-1 card-in px-4 py-2 text-sm outline-none focus:border-accent" />
        <div className="flex gap-2">
          {kinds.map((k) => (
            <button key={k} onClick={() => setKind(k)} className={`chip px text-[0.6rem] uppercase ${kind === k ? "!bg-accent text-white" : "hover:bg-sun hover:text-black"}`}>
              {k === "all" ? UI.all[lang] : UI.kinds[k][lang]}
            </button>
          ))}
        </div>
      </div>
      <ul className="space-y-3">
        {list.map((a) => (
          <li key={a.title} className="flex items-start gap-4 card-in p-4">
            <span className="font-mono text-xs text-muted">{a.year}</span>
            <div className="flex-1">
              <h3 className="font-medium">{a.title}</h3>
              <p className="text-sm text-muted">{a.org}</p>
            </div>
            <span className="chip px text-[0.55rem] uppercase text-accent">{UI.kinds[a.kind][lang]}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
