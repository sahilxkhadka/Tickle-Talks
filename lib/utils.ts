import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#7986AC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
	typeof window === "undefined"
		? Buffer.from(str).toString("base64")
		: window.btoa(str);

export const dataUrl = `data:image/svg+xml;base64,${toBase64(
	shimmer(1000, 1000)
)}`;

export const calcucateDateDifference = (oldDate: string) => {
	const date = new Date(oldDate);
	const now = new Date();
	const diffInMilliSeconds = Number(now) - Number(date);
	const seconds = Math.round(diffInMilliSeconds / 1000);
	const minutes = Math.round(seconds / 60);
	const hours = Math.round(minutes / 60);
	const days = Math.round(hours / 24);
	const months = Math.round(days / 30);
	const years = Math.round(days / 365);

	if (seconds < 60) {
		return `${seconds} seconds ago`;
	} else if (minutes < 60) {
		return `${minutes} minutes ago`;
	} else if (hours < 24) {
		return `${hours} hours ago`;
	} else if (days < 30) {
		return `${days} days ago`;
	} else if (months < 12) {
		return `${months} months ago`;
	} else {
		return `${years} years ago`;
	}
};
