import * as Interfaces from '../../../../lib/interfaces'

export default function aboutCard({ title, desc, icon }: Interfaces.aboutProps) {
	return (
		<div className='flexCol bg-zinc-50 max-w-fit p-8 rounded-2xl border-2 select-none bg-opacity-60'>
			<div className='flex flex-row items-center gap-2'>
				<span className='font-poppins font-bold text-3xl'>{title}</span>
                {icon}
			</div>
			<span className='max-w-screen-sm'>{desc}</span>
		</div>
	);
}
