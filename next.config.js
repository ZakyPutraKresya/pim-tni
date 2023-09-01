module.exports = {
  distDir: ".next",
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
    ];
  },
};
