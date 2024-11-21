import { fetchData } from "@/app/server/fetchData";
import { triggerAlert } from "../../../../lib/alertHandler";
import { createData } from "@/app/server/createData";

export default function RegisterButton({data}: {data: {email: string, password: string}}) {
	return (
		<button
			className='bg-zinc-300 hover:bg-zinc-400 text-center p-1 rounded-lg w-1/2 transition-all duration-200 mt-3'
			onClick={async () => {
				const results = await JSON.parse(await fetchData({ email: "mcdonaldjamie14@gmail.com" }) as string);
				console.log(results.length);
				if (results.length > 0)
					return await triggerAlert({
						message:
							"An account already exists with this email address.",
						type: "error",
					});
					const duckySucksMyCock = await createData(data)
					console.log(duckySucksMyCock);
				}}
		>
			Register
		</button>
	);
}
