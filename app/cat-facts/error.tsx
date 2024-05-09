"use client"; // Error components must be Client Components
import catError from "@/public/images/cat-error.jpg";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='w-fit mx-auto'>
			<Image
				src={catError}
				alt='Swaggy dog'
				placeholder='blur'
				className='object-contain min-h-80 sm:h-[440px] mx-auto'
			/>
			<p className='my-6 text-center text-2xl font-semibold'>
				BRB after the smoke break
			</p>
			<button
				onClick={() => reset()}
				className='button mx-auto block'
				type='submit'
			>
				Hit me up again
			</button>
		</div>
	);
}
