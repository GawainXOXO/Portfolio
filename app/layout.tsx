import type { Metadata } from "next";
import { Silkscreen, VT323, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { Sidebar } from "@/components/Sidebar";
import { SITE } from "@/lib/data";
import { Boot, Stickers } from "@/components/Extras";

const px = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-px" });
const term = VT323({ subsets: ["latin"], weight: "400", variable: "--font-term" });
const script = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-script" });

export const metadata: Metadata = {
  title: `${SITE.fullName} — Portofolio`,
  description: "Portofolio Ryan Nathanael Budisetiawan: IT Digital Intern dan mahasiswa Computer Science (Software Engineering) — testing, UAT, CI/CD, dan machine learning.",
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${px.variable} ${term.variable} ${script.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="antialiased">
        <LangProvider>
          <Boot />
          <Stickers />
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col lg:flex-row lg:gap-10 lg:px-8">
            <Sidebar />
            <main className="w-full min-w-0 max-w-3xl flex-1 px-5 py-8 lg:px-0 lg:py-10">{children}</main>
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
