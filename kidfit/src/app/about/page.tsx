import Image from "next/image";
import Header from "../components/header";

export default function about() {
  return (
    <div className="scroll-smooth relative">
      <Header />
      <div className="h-full w-1/2"></div>
        <div className="flex flex-col">

          <section className="flex flex-row justify-between items-center h-full w-full py-11 px-64">

            <div className="flex flex-col items-center text-justify gap-3 border-dashed border-2 border-emerald-500 p-4 rounded-lg">  
              <div className="flex flex-row items-center gap-2">
                <h1 className="lg:text-4xl text-3xl font-bold">Our Mission</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <span className="text-zinc-600 max-w-lg text-justify">
                Our mission is to inspire and empower children to make healthier
                choices by making nutrition and physical activity engaging and
                accessible.
              </span>
            </div>
            <Image
              src={"/kids.jpg"}
              width={250}
              height={0}
              alt="image of kids (stock)"
              className="rounded-3xl"
            />
          </section>

          <section className="flex flex-row-reverse justify-between items-center px-64 py-11">
            <div className="flex flex-col items-center gap-3 lg:max-w-lg max-w-sm text-justify border-dashed border-2 border-rose-500 p-4 rounded-xl">
              <div className="flex flex-row items-center gap-2">
                <h1 className="lg:text-4xl text-3xl font-bold">
                  Why It Matters To Us
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </div>
              <span className="text-zinc-600 ">
                By encouraging children to be mindful of what they eat and stay
                active, KidFit fosters positive habits that build confidence,
                improve focus, and enhance overall well-being.
              </span>
            </div>
            <Image
              src={"/cartoon-lift.png"}
              width={250}
              height={0}
              alt="funny orange weight lifting"
            />
          </section>
        </div>
        {/* TODO: Add features */}
        <section className="flex flex-col items-center text-justify gap-3">
          <h1 className="text-zinc-900 lg:text-5xl text-4xl ">Features</h1>
          <span className="text-zinc-500">
            Reminder to add features when added the program
          </span>
        </section>
      </div>
  );
}
