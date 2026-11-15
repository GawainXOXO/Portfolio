# Portofolio Ryan

Next.js 16 + Tailwind CSS 4 + TypeScript. Layout sidebar, dwibahasa (ID/EN), mode gelap/terang.

Halaman: Beranda, Tentang, Proyek (+ detail), Prestasi, Peralatan, Kontak.

## Mengisi konten
Semua teks ada di `lib/data.ts` (cari tanda `TODO`). Teks antarmuka ada di `lib/i18n.tsx`.

## Menjalankan
```bash
npm install
npm run dev
```

## Deploy ke Vercel
Import repo ini di vercel.com. Setelah itu setiap push ke `main` otomatis ter-deploy. Tidak perlu environment variable.
