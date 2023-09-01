module.exports = {
  distDir: ".next",
  async rewrites() {
    return [
      // Menyusun rute untuk "/admin/dashboard" ke "/admin"
      {
        source: "/login",
        destination: "/auth/login",
      },
    ];
  },
};
