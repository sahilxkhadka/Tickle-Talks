import { getRandomDogImage } from "@/lib/actions";
import { dataUrl } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default async function DogFacts() {
	const imageUrl = await getRandomDogImage();
	return (
		<div>
			<Image
				src={imageUrl}
				width={780}
				height={640}
				alt='Dog image'
				className='object-contain h-[440px] mx-auto'
				placeholder={dataUrl as PlaceholderValue}
			/>
		</div>
	);
}
