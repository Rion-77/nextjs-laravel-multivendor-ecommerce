/** @type {import('next').NextConfig} */
// const nextConfig = {
/* config options here */
// cacheComponents: true,
// partialPrefetching: true,
// };

// export default nextConfig;

// module.exports = {
// images: {
// remotePatterns: [new URL('https://placehold.co/600x400')],
//http://multivendor-ecommerce.test/img/fallback/category-fallback.svg
// },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true, 
  partialPrefetching: true,
  output: 'standalone',

  cacheLife: {
    categories: { stale: 300, revalidate: 900, expire: 86400 },
    home:       { stale: 40,  revalidate: 60, expire: 3600 },
    listing:    { stale: 60,  revalidate: 120, expire: 3600 },
    product:    { stale: 30,  revalidate: 60,  expire: 600 },
    seller:     { stale: 60,  revalidate: 300, expire: 3600 },
  },

  experimental: {
    staleTimes: { dynamic: 0, static: 30 },
  },

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "multivendor-ecommerce.test",
        pathname: "/**", 
      },
      {
        protocol: "https",
        hostname: "laravel-ecommerce.rioncreates.com",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
