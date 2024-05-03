import DogFact from "@/components/dog-facts/dog-fact";
import NextBtn from "@/components/dog-facts/next-btn";
import getBase64 from "@/components/shared/get-base64";
import { getRandomDogImage, revalidateDogFacts } from "@/lib/actions";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function DogFacts() {
	const imageUrl = await getRandomDogImage();

	const blurData = await getBase64(imageUrl);
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
				placeholder={blurData as PlaceholderValue}
			/>
			<form action={revalidateDogFacts} className='flex justify-center mt-6'>
				<NextBtn />
			</form>
		</div>
	);
}
