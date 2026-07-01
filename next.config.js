/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

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

  // Comprehensive security headers
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
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://pub-a73474e6018740cd9199660e9e4abb0e.r2.dev https://rubabsdigital-api.rdceojony.workers.dev https://rubabsdigital.com",
              "connect-src 'self' https://rubabsdigital-api.rdceojony.workers.dev",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
