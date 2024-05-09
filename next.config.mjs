/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "random.dog",
				port: "",
			},
			{
				protocol: "https",
				hostname: "assets.chucknorris.host",
			},
			{
				protocol: "https",
				hostname: "cdn2.thecatapi.com",
			},
		],
	},
};

export default nextConfig;
