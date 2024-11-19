import Image from "next/image";

export default function Home() {
	return (
		<div className="relative flex items-center justify-center min-h-screen min-w-screen bg-zinc-900 bg-opacity-75">
			<Image
				src={'/gym.jpg'}
				layout="fill"
				objectFit="cover"
				alt="Background of a gym environment"
				className="absolute -z-50 opacity-25"
			/>
			<a href="/about" className="absolute bg-zinc-800 border-zinc-700 border-2 w-max bottom-4 right-4 mx-5 text-center font-poppins text-white hover:scale-95 font-semibold rounded-xl py-1 px-4 transition duration-300 cursor-pointer">Learn more</a>
			<main className="relative mx-8 text-center">
				<div className="flex flex-col gap-5 items-center font-poppins text-white">
					<div className="flex flex-col lg:flex-row items-center text-7xl max-w-sm lg:max-w-none">
						<span>Welcome to </span>
						<span className="border-b-4 border-orange-400 ml-2">KidFit</span>
					</div>
					<p className="text-zinc-400 text-xl max-w-md">
						Monitor your childs calorie & food intake with our seamless app.
					</p>
					<a href="/login" className="bg-orange-500 hover:bg-orange-600 hover:scale-105 text-white font-semibold rounded-xl py-2 px-4 transition duration-300">
						Begin your journey
					</a>
				</div>
			</main>
		</div>
	);
}
