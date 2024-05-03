import NextBtn from "@/components/dog-facts/next-btn";
import { getAnimeQuote, revalidateAnimeChan } from "@/lib/actions";

export default async function AnimeChan() {
	const animeQuote = await getAnimeQuote();
	const { quote, character, anime } = animeQuote;
	return (
		<div>
			<h2 className='text-center'>
				Here&#39;s a quote by{" "}
				<span className='text-lg font-semibold'>{character}</span> from{" "}
				<span className='text-lg font-semibold'>{anime}</span>
			</h2>
			<div className='px-12 py-16 bg-white/50 backdrop-blur-md rounded-md shadow-quote mt-14'>
				<p className='text-2xl text-pretty font-extrabold italic bg-gradient-to-r from-blue-600 via-purple-400 to-green-500 text-transparent bg-clip-text'>
					&#34;{quote}&#34;
				</p>
				<p className='text-right text-lg font-medium mt-3'>- {character}</p>
			</div>
			<form action={revalidateAnimeChan} className='mt-8'>
				<NextBtn />
			</form>
		</div>
	);
}
