export const getRandomDogImage = async () => {
	try {
		const res = await fetch("https://random.dog/woof.json");
		const data: RandomDogImgResponse = await res.json();
		return data.url;
	} catch (err) {
		throw new Error("Error Fetching dog image");
	}
};
