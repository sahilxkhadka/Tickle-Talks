"use client";

import { useState } from "react";
import Heart from "../icons/heart";
import { cn } from "@/lib/utils";

export default function LikeBtn() {
	const [hasLiked, setHasLiked] = useState(false);

	const handleClick = () => {
		setHasLiked((prev) => !prev);
	};
	return (
		<button
			onClick={handleClick}
			className='flex justify-center items-center w-fit gap-1 hover:font-semibold cursor-pointer group font-medium text-sm'
		>
			<div
				className={cn(
					hasLiked ? "text-red-600 *:stroke-red-600" : "text-white"
				)}
			>
				<Heart />
			</div>
			Like
		</button>
	);
}
