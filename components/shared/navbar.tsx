"use client";

import { navItems } from "@/constants/navItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	return (
		<nav className='max-w-4xl mx-auto py-6 mt-6 shadow-xl rounded-md sm:rounded-full bg-pink-200 px-10'>
			<ul className='flex justify-center gap-8 flex-wrap'>
				{navItems.map((navItem) => {
					const isActive = pathname === navItem.link;
					return (
						<li key={navItem.title}>
							<Link
								href={navItem.link}
								className={cn(
									"font-medium text-sm px-9 py-3.5 rounded-md",
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
