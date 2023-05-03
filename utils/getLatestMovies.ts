import { moviePath } from "./path";

export default async function getLatestMovies() {
	const response = await fetch(
		moviePath + `latest?api_key=${process.env.API_KEY}`
	);
	const data = await response.json();
	return data.results;
}
