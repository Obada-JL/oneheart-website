// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase timeout
  experimental: {
    serverComponentsExternalPackages: ["@vercel/analytics"],
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    // Optimize chunk loading
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: "framework",
            chunks: "all",
            test: /[\\/]node_modules[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return (
                module.size() > 160000 &&
                /node_modules[/\\]/.test(module.identifier())
              );
            },
            name(module) {
              const hash = crypto.createHash("sha1");
              hash.update(module.identifier());
              return hash.digest("hex").slice(0, 8);
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
  // Increase page generation timeout
  staticPageGenerationTimeout: 1000,
  // Add this to handle client-side navigation
  reactStrictMode: true,
  // Add this to handle static generation
  output: 'standalone',
  // Add these configurations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Add this for better error handling
  onError: (err) => {
    console.error('Next.js build error:', err);
  },
};

module.exports = nextConfig;
