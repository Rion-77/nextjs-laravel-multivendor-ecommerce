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
