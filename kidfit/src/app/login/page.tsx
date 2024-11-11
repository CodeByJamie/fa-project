    export default function Login() {
    return (
        <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center border-2 border-zinc-950 p-8 bg-zinc-900 rounded-lg gap-4 w-2/5">
                <h1 className="text-3xl text-orange-500 font-poppins font-semibold">KidFit </h1>
                <label htmlFor="email" className="flex flex-col text-zinc-400 gap-2 text-xl w-full">
                    Email
                    <input type="email" id="email" className="text-zinc-200 rounded-lg bg-zinc-700 focus:outline-none p-1" />
                </label>
                <label htmlFor="password" className="flex flex-col text-zinc-400 gap-2 text-xl w-full">
                    Password
                    <input type="password" id="password" className="text-black rounded-lg bg-zinc-700 focus:outline-none p-1" />
                </label>
                <a href="" className="bg-zinc-300 hover:bg-zinc-400 text-center p-1 rounded-lg w-1/2 transition-all duration-200 mt-3">Login</a>
            </div>
            <a className="absolute bottom-4 right-4 bg-orange-500 text-white p-1 rounded-xl font-poppins px-2 cursor-pointer font-semibold"> Register</a>
        </div>
    );
}
