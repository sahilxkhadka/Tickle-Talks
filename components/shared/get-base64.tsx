import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(url: string) {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error("Failed to fetch image");
		}
		const buffer = await res.arrayBuffer();
		const { base64 } = await getPlaiceholder(Buffer.from(buffer));
		console.log(base64);
		return base64;
	} catch (e) {
		if (e instanceof Error) console.log(e.stack);
	}
}
