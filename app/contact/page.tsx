"use client";
import { useState } from "react";
import { SITE } from "@/lib/data";
import { UI, useLang } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLang();
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${f.message}\n\n— ${f.name} (${f.email})`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Portfolio: " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  const input = "w-full rounded-lg border border-line bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent";
  return (
    <div className="mx-auto max-w-xl px-5 py-16">
      <h1 className="font-display text-4xl font-semibold">{UI.contactTitle[lang]}</h1>
      <p className="mt-3 text-muted">{UI.contactLead[lang]}</p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <input required className={input} placeholder={UI.form.name[lang]} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        <input required type="email" className={input} placeholder={UI.form.email[lang]} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
        <textarea required rows={6} className={input} placeholder={UI.form.message[lang]} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
        <button className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-bg hover:opacity-90">{UI.form.send[lang]}</button>
      </form>
    </div>
  );
}
