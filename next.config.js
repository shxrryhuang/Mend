/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // 👈 tells Next.js to build as static
    images: {
      unoptimized: true, // needed for GitHub Pages since Next Image optimizer won’t work
    },
  };
  
  module.exports = nextConfig;
  