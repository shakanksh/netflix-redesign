import { moviePath } from "./path";

export default async function getSimilarMovies(id: string) {
	const response = await fetch(
		moviePath + `${id}/similar?api_key=${process.env.API_KEY}`
	);
	const data = await response.json();
	return data.results;
}
