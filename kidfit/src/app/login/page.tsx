import LoginCard from "../components/cards/formCard";
import RegBtn from "../components/buttons/registerNewBtn";
import LoginButton from "../components/buttons/loginButton";
export default function Login() {
	return (
		<div className='relative bg-gradient-to-br from-zinc-900 to-zinc-950 min-h-screen flex justify-center items-center select-none'>
			<LoginCard button={<LoginButton />} />
			<RegBtn />
		</div>
	);
}
