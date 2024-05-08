"use client";

import { navItems } from "@/constants/navItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	return (
		<nav className='max-w-4xl mx-4 sm:mx-auto py-4 sm:py-6 sm:mt-6 shadow-xl rounded-md sm:rounded-full bg-pink-200 px-10'>
			<ul className='flex justify-start sm:justify-center gap-8 sm:flex-wrap overflow-auto hide-scrollbar'>
				{navItems.map((navItem) => {
					const isActive = pathname === navItem.link;
					return (
						<li key={navItem.title}>
							<Link
								href={navItem.link}
								className={cn(
									"font-medium text-sm px-9 block py-2 sm:py-3.5 rounded-md whitespace-nowrap",
									isActive ? "bg-white shadow-sm" : "hover:bg-white"
								)}
							>
								{navItem.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
