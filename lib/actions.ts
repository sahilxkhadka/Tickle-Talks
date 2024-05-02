import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export const getRandomDogImage = async () => {
	try {
		const res = await fetch("https://random.dog/woof.json");
		const data: RandomDogImgResponse = await res.json();
		const imageUrl = data.url;
		console.log(imageUrl);
		if (imageUrl.includes(".mp4") || imageUrl.includes(".webp")) {
			return "https://random.dog/9d91b704-2a44-4587-97cf-d73b3311b0c6.jpg";
		}
		return imageUrl;
	} catch (err) {
		notFound();
	}
};

export const getRandomDogFact = async () => {
	try {
		const res = await fetch("https://dog-api.kinduff.com/api/facts");
		const data: RandomDogFactResponse = await res.json();
		console.log(data.facts[0]);
		return data.facts[0];
	} catch (err) {
		console.log(err);
		notFound();
	}
};

export const revalidateDogFacts = () => {
	revalidatePath("/dog-facts");
};

export const getAnimeQuote = async () => {
	try {
		const res = await fetch("https://animechan.xyz/api/random");
		const data: AnimeQuoteResponse = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.stack);
		}
		throw new Error("Failed to retrieve data");
	}
};
