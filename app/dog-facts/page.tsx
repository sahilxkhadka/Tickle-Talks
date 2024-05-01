"use server";
import DogFact from "@/components/dog-facts/dog-fact";
import NextBtn from "@/components/dog-facts/next-btn";
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
			<form action={revalidate} className='flex justify-center mt-6'>
				<NextBtn />
			</form>
		</div>
	);
}
