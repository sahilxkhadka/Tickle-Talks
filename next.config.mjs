/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "random.dog",
				port: "",
			},
		],
	},
};

export default nextConfig;
