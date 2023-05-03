import Image from "next/image";
import Link from "next/link";
import { imagePath } from "@/utils/path";

export default function MovieCard({ movie }: { movie: any }) {
	return (
		<Link href={`/movie/${movie.id}`}>
			<div className='w-12 text-zinc-50'>
				{/* <Image
					src={imagePath + movie.poster_path}
					alt={movie.title}
					width={300}
					height={450}
					priority
				/> */}
				<Image
					src={imagePath + movie.backdrop_path}
					alt={movie.title}
					width={300}
					height={450}
					className='rounded-t-lg'
					priority
				/>
				{/* <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-zinc-950 to-transparent rounded-lg'></div> */}
			</div>
			<h1 className='text-xl font-semibold'>{movie.title}</h1>
		</Link>
	);
}
