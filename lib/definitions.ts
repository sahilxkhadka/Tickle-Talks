type RandomDogImgResponse = {
	fileSizeBytes: string;
	url: string;
};

type RandomDogFactResponse = {
	facts: string[];
	success: boolean;
};

type AnimeQuoteResponse = {
	quote: string;
	anime: string;
	character: string;
};

type JokesResponse = {
	icon_url: string;
	id: string;
	url: string;
	value: string;
	updated_at: string;
};
