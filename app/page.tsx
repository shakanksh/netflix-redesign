import Link from "next/link";

export default function Home() {
	return (
		<main className='h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center gap-6'>
			<h1 className='text-2xl text-red-600 font-bold'>NETFLIX REDESIGN</h1>
			<p className='mx-5 md:mx-28 lg:mx-40 text-center'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
				assumenda cumque exercitationem maiores, beatae accusantium quam
				asperiores sequi hic minus repudiandae non, eaque distinctio? Provident
				quidem quasi cumque iusto deserunt.
			</p>
			<Link href='/browse'>
				<div className='px-10 py-5 bg-red-600 text-zinc-50 rounded-lg font-bold uppercase'>
					Browse The App
				</div>
			</Link>
		</main>
	);
}
