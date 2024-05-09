import { getRandomCatImage, getRandomDogImage } from "@/lib/actions";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import getBase64 from "../shared/get-base64";

export default async function CatImage() {
	const imageUrl = await getRandomCatImage();
	const blurData = await getBase64(imageUrl);
	return (
		<Image
			src={imageUrl}
			width={780}
			height={440}
			alt='Dog image'
			className='object-contain min-h-80 sm:h-[440px] mx-auto'
			placeholder={blurData as PlaceholderValue}
		/>
	);
}
