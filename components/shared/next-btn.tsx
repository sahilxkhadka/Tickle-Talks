import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
	text?: string;
};
export default function NextBtn({ text, children }: Props) {
	return (
		<button className='button mx-auto flex justify-center items-center gap-2'>
			{children}
			{text}
		</button>
	);
}
