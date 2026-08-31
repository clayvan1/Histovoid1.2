/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Vercel specific optimizations
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: [],
  },
  
  // Disable HMR in production
  webpack: (config, { dev, isServer }) => {
    // Only in development, not in Vercel builds
    if (!dev && !isServer) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'HotModuleReplacementPlugin'
      );
    }
    
    // Suppress HMR warnings in production
    if (!dev) {
      config.stats = 'errors-only';
      config.infrastructureLogging = {
        level: 'error',
      };
    }
    
    return config;
  },
  
  // Vercel deployment settings
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;