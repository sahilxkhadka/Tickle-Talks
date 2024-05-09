import { catFacts } from "@/constants/cat-facts";

export default function CatFacts() {
	const randomIndex = Math.ceil(Math.random() * 9);
	const randomCatFact = catFacts[randomIndex];
	return (
		<div>
			<div className='text-center from-purple-400 bg-gradient-to-r text-xl sm:text-3xl font-extrabold to-orange-400 bg-clip-text text-transparent animate-text-display'>
				{randomCatFact}
			</div>
		</div>
	);
}
