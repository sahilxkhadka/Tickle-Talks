import { getRandomDogFact } from "@/lib/actions";

export default async function DogFact() {
	const fact = await getRandomDogFact();
	return (
		<div className='text-center from-purple-400 bg-gradient-to-r text-3xl font-extrabold to-orange-400 bg-clip-text text-transparent animate-text-display'>
			{fact}
		</div>
	);
}
