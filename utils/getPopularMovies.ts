export default async function getPopularMovies() {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
	);
	const data = await response.json();
	return data.results;
}
