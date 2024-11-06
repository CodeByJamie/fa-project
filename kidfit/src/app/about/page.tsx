'use client';
import Header from "../components/header";

export default function about() {
	return (
		<div className="scroll-smooth">
			<Header />
			<div className='mt-11 flex flex-col lg:justify-center items-center font-poppins gap-60 text-center'>
				<div className='flex flex-col items-center text-justify gap-3 lg:max-w-lg max-w-sm'>
					<h1 className='text-white lg:text-5xl text-4xl border-b-2 border-b-orange-400 pb-1'>Our Mission</h1>
					<span className='text-zinc-400'>
						Our mission is to inspire and empower children to make
						healthier choices by making nutrition and physical
						activity engaging and accessible.
					</span>
				</div>
				<div className='flex flex-col items-center gap-3 lg:max-w-lg max-w-sm text-justify'>
					<h1 className='text-white lg:text-5xl text-4xl border-b-2 border-b-rose-500 pb-1'>
						Why It Matters To Us
					</h1>
					<span className='text-zinc-400 '>
						By encouraging children to be mindful of what they eat
						and stay active, KidFit fosters positive habits that
						build confidence, improve focus, and enhance overall
						well-being.
					</span>
				</div>
			</div>
		</div>
	);
}
