import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export const getRandomDogImage = async () => {
	try {
		const res = await fetch("https://random.dog/woof.json");
		const data: RandomDogImgResponse = await res.json();
		console.log(data.url);
		if (data.url.includes(".mp4")) {
			console.log("video aayo hai");
			revalidatePath("/dog-facts");
		}
		return data.url;
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
