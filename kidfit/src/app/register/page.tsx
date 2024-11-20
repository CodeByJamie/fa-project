"use client";
import { triggerAlert } from "../../../lib/alertHandler";
import LoginCard from "../components/cards/formCard";
import { fetchData } from "../server/fetchData";

export default function Register() {
	return (
		<div className='relative bg-gradient-to-br from-zinc-900 to-zinc-950 min-h-screen flex justify-center items-center select-none'>
			<LoginCard />
			
			{/* TODO: Add function for register button after the form card
			
			<button
				className='absolute bottom-4 left-4 bg-pink-500 p-12 rounded-full hover:scale-150 duration-300'
				onClick={async () => {
					const results = await fetchData({ name: "Jamie" });
					console.log(results);
					if (results.length > 0)
						return await triggerAlert({
							message:
								"An account already exists with this email address.",
							type: "error",
						});
				}}
			>
				Testing DB
			</button> */}
		</div>
	);
}
