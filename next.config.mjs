/** @type {import('next').NextConfig} */
const nextConfig = {
  // Halaman lama diarahkan ke halaman baru agar tautan lama tidak 404.
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: false },
      { source: "/journey", destination: "/", permanent: false },
      { source: "/achievements", destination: "/", permanent: false },
      { source: "/uses", destination: "/skills", permanent: false },
    ];
  },
};
export default nextConfig;
