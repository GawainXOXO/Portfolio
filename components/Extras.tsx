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

/** Counter kunjungan retro: menghitung kunjunganmu sendiri di browser ini (bukan total pengunjung). */
export function VisitCounter() {
  const { lang } = useLang();
  const [n, setN] = useState<number | null>(null);
  useEffect(() => {
    let v = 1;
    try {
      v = (parseInt(localStorage.getItem("visits") || "0", 10) || 0) + 1;
      if (!sessionStorage.getItem("counted")) {
        localStorage.setItem("visits", String(v));
        sessionStorage.setItem("counted", "1");
      } else v -= 1;
    } catch {}
    setN(Math.max(v, 1));
  }, []);
  const digits = String(n ?? 0).padStart(6, "0");
  return (
    <div className="mt-3">
      <p className="px mb-1 text-[0.5rem] uppercase text-muted">{lang === "id" ? "kunjunganmu ke-" : "your visit no."}</p>
      <div className="flex gap-1">
        {[...digits].map((d, i) => (
          <span key={i} className="px border-2 border-line bg-black px-1.5 py-1 text-xs text-lime">{d}</span>
        ))}
      </div>
    </div>
  );
}
