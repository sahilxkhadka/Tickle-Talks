import catError from "@/public/images/cat-error.jpg";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function NotFound() {
	const revalidate = async () => {
		"use server";
		revalidatePath("/dog-facts");
		redirect("/");
	};
	return (
		<div className='w-fit mx-auto'>
			<Image src={catError} alt='Swaggy dog' placeholder='blur' />
			<p className='my-6 text-center text-2xl font-semibold'>
				Currently busy yawning
			</p>
			<form action={revalidate}>
				<button className='button mx-auto block' type='submit'>
					Hit me up again
				</button>
			</form>
		</div>
	);
}
