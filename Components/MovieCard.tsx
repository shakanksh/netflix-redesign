import Image from "next/image";
import Link from "next/link";
import { imagePath } from "@/utils/path";

export default function MovieCard({ movie }: { movie: any }) {
	return (
		<Link href={`/browse/${movie.id}`}>
			<div>
				<Image
					src={imagePath + movie.poster_path}
					alt={movie.title}
					width={500}
					height={750}
					className='rounded-t-md'
				/>
				<h2>{movie.title}</h2>
				<p>{movie.vote_average}</p>
			</div>
		</Link>
	);
}
