import dogLoading from "@/public/images/dog-loading.jpg";

import Image from "next/image";

export default function Loading() {
	return (
		<div>
			<div className='text-center mb-3 sm:mb-6 from-purple-400 bg-gradient-to-r text-xl sm:text-3xl font-extrabold to-orange-400 bg-clip-text text-transparent animate-text-display'>
				WOUGH WOUGH WOUGH
			</div>
			<Image
				unoptimized
				alt='Running dog'
				src={dogLoading}
				width={780}
				height={440}
				className='object-contain h-96 sm:h-[440px] mx-auto'
			/>
		</div>
	);
}
