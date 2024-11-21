"use client";
import FormCard from "../components/cards/formCard";
import RegisterButton from "../components/buttons/registerButton";
import { useState } from "react";

export default function Register() {
	const [data, setData] = useState({ email: "", password: "" });
	return (
		<div className='relative bg-gradient-to-br from-zinc-900 to-zinc-950 min-h-screen flex justify-center items-center select-none'>
			<FormCard updatedData={setData} button={<RegisterButton data={data} />} />
		</div>
	);
}
