import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    turbo: {
      root: resolve(__dirname),
    },
  },
};

export default nextConfig;
