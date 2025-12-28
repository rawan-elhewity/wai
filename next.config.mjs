/** @type {import('next').NextConfig} */
const nextConfig = {
  // تحسين الصور
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // تحسين الأداء
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // تحسين التحميل
  experimental: {
    optimizeCss: true,
  },

  // ضغط أفضل
  compress: true,

  // تحسين webpack
  webpack: (config, { dev, isServer }) => {
    // تحسين في الإنتاج فقط
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: "all",
            name: "framework",
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
            },
            name(module) {
              const hash = require("crypto").createHash("sha1").update(module.identifier()).digest("hex").substring(0, 8);
              return `lib-${hash}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: "commons",
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name(module, chunks) {
              return `shared-${chunks.map((c) => c.name).join("-")}`;
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      };
    }

    // تحسين للتطوير - تقليل حجم الـ bundle
    if (dev) {
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
    }

    return config;
  },

  // تحسين الـ output
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
