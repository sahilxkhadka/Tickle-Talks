import { getAnimeQuote } from "@/lib/actions";
import React from "react";

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
		</div>
	);
}
