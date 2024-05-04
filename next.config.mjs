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
        protocol: 'https',
        hostname: 'assets.chucknorris.host'
      }
		],
	},
};

export default nextConfig;
