"use client";
import { useState } from "react";
import { SITE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";
import { PageTitle } from "@/components/Section";

export default function ContactPage() {
  const { lang } = useLang();
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${f.message}\n\n— ${f.name} (${f.email})`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Portfolio: " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  const input = "w-full card-in px-4 py-2.5 text-sm outline-none focus:border-accent";
  return (
    <div className="max-w-xl">
      <PageTitle lead={UI.contactLead[lang]}>{UI.contactTitle[lang]}</PageTitle>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <input required className={input} placeholder={UI.form.name[lang]} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        <input required type="email" className={input} placeholder={UI.form.email[lang]} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
        <textarea required rows={6} className={input} placeholder={UI.form.message[lang]} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
        <button className="card px bg-accent px-6 py-2.5 text-[0.7rem] uppercase text-white hover:-translate-y-0.5">{UI.form.send[lang]}</button>
      </form>
    </div>
  );
}
