import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["images.unsplash.com", "upload.wikimedia.org", "logos-world.net"],
  },
};

export default nextConfig;
