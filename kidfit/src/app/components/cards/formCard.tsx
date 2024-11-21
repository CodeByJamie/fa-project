"use client";
import { useEffect, useState } from "react";
import { formProps } from "../../../../lib/interfaces";

export default function loginCard({ button, updatedData }: formProps) {
	const [data, setData] = useState({ email: "", password: "" });
    useEffect(() => {
        updatedData(data)
    },[data]);

	return (
		<div className='flex flex-col justify-center items-center border-2 border-zinc-950 p-8 bg-zinc-900 rounded-lg gap-4 w-2/5'>
			<h1 className='text-3xl text-orange-500 font-poppins font-semibold'>
				KidFit
			</h1>
			<label
				htmlFor='email'
				className='flex flex-col text-zinc-400 gap-2 text-xl w-full'
			>
				Email
				<input
					type='email'
					id='email'
                    onInput={(e) => {
                        setData({email: (e.target as HTMLInputElement).value, password: data.password})
                    }}
					className='text-zinc-200 rounded-lg bg-zinc-700 focus:outline-none p-1'
				/>
			</label>
			<label
				htmlFor='password'
				className='flex flex-col text-zinc-400 gap-2 text-xl w-full'
			>
				Password
				<input
					type='password'
					id='password'
                    onInput={(e) => {
                        setData({password: (e.target as HTMLInputElement).value, email: data.email})
                    }}
					className='text-black rounded-lg bg-zinc-700 focus:outline-none p-1'
				/>
			</label>
			{button}
		</div>
	);
}
