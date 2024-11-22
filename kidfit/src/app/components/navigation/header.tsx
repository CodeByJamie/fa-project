import * as Dependencies from '../../../../lib/dependencies'

export default function header() {
	return (
		<div className='relative lg:flex lg:flex-row p-4 justify-between items-center bg-transparent select-none'>
			<Dependencies.Next.Link href="/" className='text-2xl text-white font-poppins font-bold bg-orange-500 rounded-xl p-1 px-2 cursor-pointer'>
				KF
			</Dependencies.Next.Link>
            <Dependencies.Next.Link href="/login" className="bg-zinc-900 h-max font-poppins p-1 px-3 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-200 cursor-pointer">Dashboard</Dependencies.Next.Link>
		</div>
	);
};
