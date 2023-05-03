import { moviePath } from "./path";

export default async function getTopRatedMovies() {
	const response = await fetch(
		moviePath + `top_rated?api_key=${process.env.API_KEY}`
	);
	const data = await response.json();
	return data.results;
}
