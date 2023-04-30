/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	domains: ["image.tmdb.org"],
};

module.exports = nextConfig;
