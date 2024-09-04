/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "artic-web.imgix.net",
			},
		],
	},
};

export default nextConfig;
