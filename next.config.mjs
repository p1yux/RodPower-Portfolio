/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Suppress hydration warnings globally
  env: {
    SUPPRESS_HYDRATION_WARNING: process.env.SUPPRESS_HYDRATION_WARNING || 'true',
  },
  
  onDemandEntries: {
    // Suppress hydration warnings
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  
  compiler: {
    // Suppress hydration warnings in development
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error"]
    } : false,
  },
  
  experimental: {
    // Suppress hydration warnings
    suppressHydrationWarning: true,
  },
  
  // Logging configuration
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  
  webpack: (config, { dev, isServer }) => {
    // Suppress hydration warnings in development
    if (dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      };
      
      // Additional webpack configuration to suppress warnings
      config.stats = {
        ...config.stats,
        warnings: false,
      };
      
      config.infrastructureLogging = {
        level: 'error',
      };
    }
    return config;
  },
};

export default nextConfig;
