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
// },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true, // Next.js 16+ flag
  partialPrefetching: true, // Next.js 16+ flag

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**", // Matches any image size or path from placehold.co
      },
    ],
  },
};

export default nextConfig;
