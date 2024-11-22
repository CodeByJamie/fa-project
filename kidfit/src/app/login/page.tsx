import * as Components from '../components'

export default function Login() {
	return (
		<div className='relative bg-gradient-to-br from-zinc-900 to-zinc-950 min-h-screen flex justify-center items-center select-none'>
			<Components.Cards.formCard component='login' />
			<Components.Buttons.registerNewBtn />
		</div>
	);
}