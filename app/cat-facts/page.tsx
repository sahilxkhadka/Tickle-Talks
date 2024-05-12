import CatImage from "@/components/cat-facts/cat-image";
import Author from "@/components/icons/author";
import Cat from "@/components/icons/cat";
import NextBtn from "@/components/shared/next-btn";
import { catFacts } from "@/constants/cat-facts";
import { revalideCatFacts } from "@/lib/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cat Facts",
	description: "Random facts and images of cats.",
};

export default function CatFacts() {
	const randomIndex = Math.ceil(Math.random() * 10);
	const randomCatFact = catFacts[randomIndex];
	return (
		<div>
			<div className='text-center mb-3 sm:mb-6 from-purple-400 bg-gradient-to-r text-xl sm:text-3xl font-extrabold to-orange-400 bg-clip-text text-transparent animate-text-display'>
				{randomCatFact}
			</div>
			<div className='my-3 sm:my-6 flex gap-3 items-center justify-end pr-2 sm:pr-12'>
				<Author />
				<p className='font-semibold'>ra_gya00</p>
			</div>
			<div className='mb-3 sm:mb-6'>
				<CatImage />
			</div>
			<form action={revalideCatFacts}>
				<NextBtn text='Next purr-ese'>
					<Cat />
				</NextBtn>
			</form>
		</div>
	);
}
