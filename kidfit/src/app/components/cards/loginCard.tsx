"use client";

export default function loginCard() {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-zinc-950 p-8 bg-zinc-900 rounded-lg gap-4 w-2/5">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-orange-500 font-poppins font-semibold">
          KidFit
        </h1>
        <span className="font-poppins text-zinc-400">Log into your account</span>
      </div>
      <label
        htmlFor="email"
        className="flex flex-col text-zinc-400 gap-2 text-xl w-full"
      >
        Email
        <input className="text-zinc-200 rounded-lg bg-zinc-700 focus:outline-none p-1" />
      </label>
      <label
        htmlFor="password"
        className="flex flex-col text-zinc-400 gap-2 text-xl w-full"
      >
        Password
        <input className="text-black rounded-lg bg-zinc-700 focus:outline-none p-1" />
      </label>
    </div>
  );
}
