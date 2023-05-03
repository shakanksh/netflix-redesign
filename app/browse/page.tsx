import Link from "next/link";
import Image from "next/image";
import getPopularMovies from "@/utils/getPopularMovies";
import { imagePath } from "@/utils/path";
import MovieCard from "@/Components/MovieCard";

export default async function Browse() {
	const popularMovies = await getPopularMovies();
	return (
		<main className='bg-zinc-950 text-zinc-50'>
			<div className='grid gap-16 grid-cols-fluid'>
				{popularMovies.map((movie: any) => (
					<MovieCard movie={movie} key={movie.id} />
				))}
			</div>
		</main>
	);
}
