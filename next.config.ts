import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
  remotePatterns: [new URL("https://image.tmdb.org/**")], //fetch images from a third-party domains
}
};

export default nextConfig;
