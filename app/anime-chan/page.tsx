import Naruto from "@/components/icons/naruto";
import NextBtn from "@/components/shared/next-btn";
import { getAnimeQuote, revalidateAnimeChan } from "@/lib/actions";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "Anime Chan",
	description: "Random quotes for anime.",
};

export default async function AnimeChan() {
	const animeQuote = await getAnimeQuote();
	const { quote, character, anime } = animeQuote;
	return (
		<div>
			<h2 className='text-center'>
				Here&#39;s a quote by{" "}
				<span className='sm:text-lg font-semibold'>{character}</span> from
				<span className='sm:text-lg font-semibold'> {anime}</span>
			</h2>
			<div className='px-12 py-16 bg-white/50 backdrop-blur-md rounded-md shadow-quote my-8'>
				<p className='text-xl sm:text-2xl text-pretty font-semibold sm:font-extrabold italic bg-gradient-to-r from-blue-600 via-purple-400 to-green-500 text-transparent bg-clip-text'>
					&#34;{quote}&#34;
				</p>
				<p className='text-right sm:text-lg font-medium mt-3'>- {character}</p>
			</div>
			<form action={revalidateAnimeChan}>
				<NextBtn text='NeKusuto'>
					<Naruto />
				</NextBtn>
			</form>
		</div>
	);
}
