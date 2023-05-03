import { moviePath } from "./path";

export default async function getUpcomingMovies() {
	const response = await fetch(
		moviePath + `upcoming?api_key=${process.env.API_KEY}`
	);
	const data = await response.json();
	return data.results;
}
