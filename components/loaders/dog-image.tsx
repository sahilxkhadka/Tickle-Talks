import Image from "next/image";
import dogRunning from "@/public/images/dog-running.gif";

export default function DogImageLoader() {
	return (
		<Image
			unoptimized
			alt='Running dog'
			src={dogRunning}
			width={780}
			height={440}
			className='object-contain h-[440px] mx-auto'
		/>
	);
}
