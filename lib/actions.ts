export const getRandomDogImage = async () => {
	try {
		const res = await fetch("https://random.dog/woo.json");
		const data: RandomDogImgResponse = await res.json();
		return data.url;
	} catch (err) {
		throw new Error("Error Fetching dog image");
	}
};
