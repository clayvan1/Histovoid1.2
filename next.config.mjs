/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Fix for HMR WebSocket errors
  webpack: (config, { dev, isServer }) => {
    // Fix for HMR ping errors
    if (dev && !isServer) {
      config.infrastructureLogging = {
        level: 'error',
        debug: false,
      };
    }
    return config;
  },
  // Disable HMR if issues persist (temporary fix)
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;