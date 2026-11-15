"use client";
import { useEffect, useState } from "react";
import { Pixel } from "./Pixel";
import { UI, useLang } from "@/lib/i18n";

/** Layar boot "loading portfolio.exe", tampil sekali per sesi browser. */
export function Boot() {
  const { lang } = useLang();
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (sessionStorage.getItem("booted")) return;
      sessionStorage.setItem("booted", "1");
    } catch {}
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShow(true);
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="boot" onClick={() => setShow(false)} role="presentation">
      <Pixel name="win" size={8} />
      <p className="px mt-6 text-xs uppercase text-white">{UI.loading[lang]}<span className="blink">_</span></p>
      <div className="boot-bar"><i /></div>
      <p className="px mt-4 text-[0.5rem] text-white/60">click to skip</p>
    </div>
  );
}

/** Stiker pixel dekoratif di pojok halaman. */
export function Stickers() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-30 hidden flex-col items-end gap-2 sm:flex" aria-hidden>
      <span className="bob"><Pixel name="frog" size={4} /></span>
      <span className="twinkle"><Pixel name="spark" size={3} /></span>
    </div>
  );
}
