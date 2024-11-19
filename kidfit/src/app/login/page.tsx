import LoginCard from "../components/loginCard";
import RegBtn from "../components/registerButton";
export default function Login() {
	return (
		<div className='relative bg-gradient-to-br from-zinc-900 to-zinc-950 min-h-screen flex justify-center items-center select-none'>
            <LoginCard />
            <RegBtn />
        </div>
	);
}
