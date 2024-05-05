import DogFact from "@/components/dog-facts/dog-fact";
import NextBtn from "@/components/shared/next-btn";
import getBase64 from "@/components/shared/get-base64";
import {
	getRandomDogFact,
	getRandomDogImage,
	revalidateDogFacts,
} from "@/lib/actions";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Paw from "@/components/icons/paw";
import { Suspense } from "react";
import DogImageLoader from "@/components/loaders/dog-image";
import DogImage from "@/components/dog-facts/dog-image";

export const dynamic = "force-dynamic";

export default async function DogFacts() {
	return (
		<div>
			<div className='mb-6'>
				<DogFact />
			</div>
			<Suspense fallback={<DogImageLoader />}>
				<DogImage />
			</Suspense>
			<form action={revalidateDogFacts} className='flex justify-center mt-6'>
				<NextBtn text='Next Paw-lease!'>
					<Paw />
				</NextBtn>
			</form>
		</div>
	);
}
