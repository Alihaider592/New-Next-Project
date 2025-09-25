import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    domains: ["avatars.githubusercontent.com"], // whitelist GitHub avatars
  },
};

export default nextConfig;
