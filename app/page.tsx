import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
	redirect("/dog-facts");
}
