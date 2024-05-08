import Navbar from "@/components/shared/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fun House",
	description: "A simple set of fun things to do on the web.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				<div className='mx-4 sm:mx-auto max-w-4xl my-7'>{children}</div>
			</body>
		</html>
	);
}
