import React from "react";

export default function header() {
	return (
		<div className='lg:flex lg:flex-row m-4 justify-between'>
			<span className='text-3xl text-white font-poppins font-semibold'>
				KidFit
			</span>
            <a href="/login" className="absolute right-4 top-4 bg-emerald-600 h-max font-poppins p-1 px-3 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-200 cursor-pointer">Dashboard</a>
		</div>
	);
};
