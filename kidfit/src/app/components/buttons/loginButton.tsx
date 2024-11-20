import { fetchData } from "@/app/server/fetchData";

export default function loginButton() {
  return (
    <button className="bg-zinc-300 hover:bg-zinc-400 text-center p-1 rounded-lg w-1/2 transition-all duration-200 mt-3">
      Login
    </button>
  );
}
