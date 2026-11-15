"use client";
import { SITE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { PageTitle } from "@/components/Section";
import { Pixel } from "@/components/Pixel";

export default function ContactPage() {
  const { lang } = useLang();
  const links = [
    { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, sprite: "mail", external: false },
    { label: "LinkedIn", value: "in/ryan-budisetiawan", href: SITE.linkedin, sprite: "linkedin", external: true },
    { label: "GitHub", value: "GawainXOXO", href: SITE.github, sprite: "github", external: true },
  ];
  return (
    <div className="max-w-xl">
      <PageTitle lead={UI.contactLead[lang]}>{UI.contactTitle[lang]}</PageTitle>
      <ul className="space-y-4">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="card flex items-center gap-4 p-4 transition-transform hover:-translate-y-1 hover:bg-accent hover:text-white"
            >
              <Pixel name={l.sprite} size={4} />
              <span className="min-w-0">
                <span className="px block text-[0.65rem] uppercase">{l.label}</span>
                <span className="block truncate">{l.value}</span>
              </span>
              <span className="px ml-auto text-xs">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
