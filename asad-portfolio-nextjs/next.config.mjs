/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // three.js / react-three-fiber ESM packages ko Next transpile kare
  transpilePackages: ["three"],
};

export default nextConfig;
