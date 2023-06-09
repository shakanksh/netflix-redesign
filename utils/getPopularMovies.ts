import { moviePath } from "./path";

export default async function getPopularMovies() {
	const response = await fetch(
		moviePath + `popular?api_key=${process.env.API_KEY}`
	);
	const data = await response.json();
	return data.results;
}
