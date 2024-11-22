import * as Interfaces from "../../../../lib/interfaces";
import * as Components from '../../components'

export default function formCard({ component }: Interfaces.cardProps) {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-zinc-950 p-8 bg-zinc-900 rounded-lg gap-4 w-2/5">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-orange-500 font-poppins font-semibold">
          KidFit
        </h1>
        <span className="font-poppins text-zinc-400">
          {component === "login"
            ? "Log into your account"
            : "Register a new account"
          }
        </span>
      </div>
      {component === 'register' && (
        <label
        htmlFor="username"
        className="flex flex-col text-zinc-400 gap-2 text-xl w-full"
      >
        Username
        <input className="text-zinc-200 rounded-lg bg-zinc-700 focus:outline-none p-1" />
      </label>
      )}
      <label
        htmlFor="email"
        className="flex flex-col text-zinc-400 gap-2 text-xl w-full"
      >
        Email
        <input type="email" className="text-zinc-200 rounded-lg bg-zinc-700 focus:outline-none p-1" />
      </label>
      <label
        htmlFor="password"
        className="flex flex-col text-zinc-400 gap-2 text-xl w-full"
      >
        Password
        <input type="password" className="text-black rounded-lg bg-zinc-700 focus:outline-none p-1" />
      </label>
      {component === 'register' ? <Components.Buttons.registerAccount /> : <Components.Buttons.login />}
    </div>
  );
}
