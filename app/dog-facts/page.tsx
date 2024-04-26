import { getRandomDogImage } from "@/lib/actions";
import React from "react";

export default async function DogFacts() {
	const imageUrl = await getRandomDogImage();
	console.log(imageUrl);
	return <div>DogFacts</div>;
}
