import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com", // Photos de profil Google
      "avatars.githubusercontent.com", // Si vous ajoutez GitHub plus tard
      "images.unsplash.com", // Si vous utilisez Unsplash
    ],
  },
};

export default nextConfig;
