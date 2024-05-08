import dogRunning from "../../public/images/dog-running.gif";

import Image from "next/image";

export default function Loading() {
	return (
		<div>
			<div className='text-center mb-3 sm:mb-6 from-purple-400 bg-gradient-to-r text-3xl font-extrabold to-orange-400 bg-clip-text text-transparent animate-text-display'>
				WOUGH WOUGH WOUGH
			</div>
			<Image
				unoptimized
				alt='Running dog'
				src={dogRunning}
				width={780}
				height={440}
				className='object-contain h-[440px] mx-auto'
			/>
		</div>
	);
}
