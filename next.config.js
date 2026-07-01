/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate trailing slashes for consistent URLs
  trailingSlash: false,

  // Enable image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-a73474e6018740cd9199660e9e4abb0e.r2.dev",
        pathname: "/rd-articles/**",
      },
      {
        protocol: "https",
        hostname: "rubabsdigital-api.rdceojony.workers.dev",
        pathname: "/images/**",
      },
    ],
  },

  // Security headers for SEO and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

