import * as Components from '../components'
import * as Dependencies from '../../../lib/dependencies';

export default function Login() {
	return (
		<div className='relative bg-gradient-to-br from-zinc-900 to-zinc-950 min-h-screen flex justify-center items-center select-none'>
			<Components.Cards.formCard />
			<Components.Buttons.registerNewBtn />
		</div>
	);
}