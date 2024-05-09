import Image from "next/image";
import dogLoading from "@/public/images/dog-loading.jpg";

export default function DogImageLoader() {
	return (
		<Image
			unoptimized
			alt='Running dog'
			src={dogLoading}
			width={780}
			height={440}
			className='object-contain h-[440px] mx-auto'
		/>
	);
}
