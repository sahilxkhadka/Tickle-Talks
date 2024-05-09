import { revalidatePath, unstable_noStore } from "next/cache";
import { notFound } from "next/navigation";

export const getRandomDogImage = async () => {
	unstable_noStore();
	try {
		const res = await fetch("https://random.dog/woof.json");
		const data: RandomDogImgResponse = await res.json();
		const imageUrl = data.url;
		if (imageUrl.includes(".mp4") || imageUrl.includes(".webp")) {
			return "https://random.dog/9d91b704-2a44-4587-97cf-d73b3311b0c6.jpg";
		}
		return imageUrl;
	} catch (err) {
		notFound();
	}
};

export const getRandomDogFact = async () => {
	unstable_noStore();
	try {
		const res = await fetch("https://dog-api.kinduff.com/api/facts");
		const data: RandomDogFactResponse = await res.json();
		return data.facts[0];
	} catch (err) {
		console.log(err);
		notFound();
	}
};

export const revalidateDogFacts = async () => {
	"use server";
	revalidatePath("/dog-facts");
};
export const revalidateAnimeChan = async () => {
	"use server";
	revalidatePath("/anime-chan");
};

export const revalidateChuckNorris = async () => {
	"use server";
	revalidatePath("/chuck-norris");
};

export const getAnimeQuote = async () => {
	unstable_noStore();
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

export const getRandomCatImage = async () => {
	unstable_noStore();
	try {
		const res = await fetch("https://api.thecatapi.com/v1/images/search");
		const data: CatFactResponse[] = await res.json();
		const imageUrl = data[0].url;
		if (imageUrl.includes(".mp4") || imageUrl.includes(".webp")) {
			return "https://cdn2.thecatapi.com/images/cle.jpg";
		}
		return imageUrl;
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.stack);
		}
		throw new Error("Failed to retrieve data");
	}
};

export const revalideCatFacts = async () => {
	"use server";
	revalidatePath("/cat-facts");
};
