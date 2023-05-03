import { moviePath } from "./path";

export default async function getRecommendations(id: string) {
	const response = await fetch(
		moviePath + `${id}/recommendations?api_key=${process.env.API_KEY}`
	);
	const data = await response.json();
	return data.results;
}
