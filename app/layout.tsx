import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";
import { Sidebar } from "@/components/Sidebar";
import { SITE } from "@/lib/data";

const head = Fraunces({ subsets: ["latin"], variable: "--font-head" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const code = JetBrains_Mono({ subsets: ["latin"], variable: "--font-code" });

export const metadata: Metadata = {
  title: `${SITE.name} — Portofolio`,
  description: "Portofolio pribadi: proyek, skill, dan pengalaman.",
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={`${head.variable} ${body.variable} ${code.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="antialiased">
        <LangProvider>
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col lg:flex-row lg:gap-10 lg:px-8">
            <Sidebar />
            <main className="w-full max-w-3xl flex-1 px-5 py-10 lg:px-0">{children}</main>
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
