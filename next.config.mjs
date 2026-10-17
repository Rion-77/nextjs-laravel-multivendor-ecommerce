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

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "multivendor-ecommerce.test",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;
