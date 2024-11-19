import React from "react";

export default function header() {
	return (
		<div className='relative lg:flex lg:flex-row p-4 justify-between items-center bg-transparent'>
			<a href="/" className='text-3xl text-white font-poppins font-bold bg-orange-500 rounded-xl p-1 px-2 cursor-pointer'>
				KF
			</a>
            <a href="/login" className="absolute right-4 top-4 bg-emerald-600 h-max font-poppins p-1 px-3 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-200 cursor-pointer">Dashboard</a>
		</div>
	);
};
