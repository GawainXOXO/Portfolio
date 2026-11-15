"use client";
import { SITE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { PageTitle } from "@/components/Section";


function Icon({ name }: { name: "mail" | "linkedin" | "github" }) {
  const common = { width: 40, height: 40, "aria-hidden": true } as const;
  if (name === "mail")
    return (
      <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="m3.5 7 8.5 6.5L20.5 7" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg {...common} viewBox="0 0 24 24">
        <rect width="24" height="24" rx="3" fill="#0A66C2" />
        <circle cx="7.2" cy="7.6" r="1.7" fill="#fff" />
        <rect x="5.7" y="10.2" width="3" height="8.3" fill="#fff" />
        <path d="M10.8 10.2h2.9v1.2c.5-.9 1.6-1.4 2.8-1.4 2.6 0 3.1 1.7 3.1 3.9v4.6h-3v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1.1-1.6 2.2v4.1h-3z" fill="#fff" />
      </svg>
    );
  return (
    <svg {...common} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export default function ContactPage() {
  const { lang } = useLang();
  const links = [
    { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, sprite: "mail" as const, external: false },
    { label: "LinkedIn", value: "in/ryan-budisetiawan", href: SITE.linkedin, sprite: "linkedin" as const, external: true },
    { label: "GitHub", value: "GawainXOXO", href: SITE.github, sprite: "github" as const, external: true },
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
              <Icon name={l.sprite} />
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
