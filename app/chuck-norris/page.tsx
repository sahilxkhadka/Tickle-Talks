export const dynamic = "force-dynamic";

export default async function ChuckNurris() {
	const res = await fetch("https://api.chucknorris.io/jokes/random");
	const data: JokesResponse = await res.json();
	console.log(data);
	return <div>{data.value}</div>;
}
