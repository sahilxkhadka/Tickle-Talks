"use server";
import DogFact from "@/components/dog-facts/dog-fact";
import { getRandomDogImage } from "@/lib/actions";
import { dataUrl } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default async function DogFacts() {
	const imageUrl = await getRandomDogImage();

	const revalidate = () => {
		"use server";
		revalidatePath("/dog-facts");
	};
	return (
		<div>
			<div className='mb-6'>
				<DogFact />
			</div>
			<Image
				src={imageUrl}
				width={780}
				height={440}
				alt='Dog image'
				className='object-contain h-[440px] mx-auto'
				placeholder={dataUrl as PlaceholderValue}
			/>
			<form action={revalidate}>
				<button
					type='submit'
					className='relative mx-auto block mt-4 cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-pink-200 to-pink-400 active:scale-95'
				>
					<span className='w-full h-full flex items-center gap-2 px-12 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-r from-orange-400 to-pink-400 font-semibold '>
						Get Another
					</span>
				</button>
			</form>
		</div>
	);
}
