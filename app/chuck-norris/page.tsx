import LikeBtn from "@/components/chuck-norris/like-btn";
import CowBoy from "@/components/icons/cowboy";
import NextBtn from "@/components/shared/next-btn";
import { revalidateChuckNorris } from "@/lib/actions";
import { calcucateDateDifference } from "@/lib/utils";
import chuckNorris from "@/public/images/chuck-norris.jpg";
import Image from "next/image";

export default async function ChuckNurris() {
	const res = await fetch("https://api.chucknorris.io/jokes/random");
	const data: JokesResponse = await res.json();

	const timeSpan = calcucateDateDifference(data.updated_at);
	return (
		<>
			<div className='bg-white shadow-quote py-5 px-3 max-w-2xl mx-auto mb-5'>
				<div className='flex gap-3 items-center border-b pb-2'>
					<Image
						src={chuckNorris}
						alt='Chuck Norris'
						width={48}
						height={48}
						className='rounded-full border-4 box-content border-rose-500'
						placeholder='blur'
					/>
					<div>
						<h3 className='leading-none font-medium mb-1'>Chuck Norris</h3>
						<p className='leading-none text-sm'>{timeSpan}</p>
					</div>
				</div>
				<div className='my-4'>
					<p>{data.value}</p>
				</div>
				<div>
					<LikeBtn />
				</div>
			</div>
			<form action={revalidateChuckNorris}>
				<NextBtn text='Next Joke'>
					<CowBoy />
				</NextBtn>
			</form>
		</>
	);
}
