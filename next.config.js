module.exports = {
  images: {
    domains: [], // Tambahkan domain yang diperbolehkan jika menggunakan Next.js Image
  },
  serverRuntimeConfig: {
    UPLOADS_DIR: './public/uploads', // Direktori unggahan
  },
  distDir: ".next",
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: '/api/:path*',
        destination: '/middleware/proxy',
      },
    ];
  },
};
