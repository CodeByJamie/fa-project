import * as Components from "../components";
import * as Dependencies from "../../../lib/dependencies";

export default function about() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-200 to-slate-300">
      <Components.Navigation.header />
      <section className="flex flex-col px-10 gap-7 justify-center h-full">
        <Components.Cards.aboutCard
          title="Our Mission"
          desc="Our mission at KidFit is to provide children and adults with the
            knowlege of heathy eating, with being able to track food intake and
            calories."
          icon={<Dependencies.HeroIcons.RocketLaunchIcon className="size-6 fill-red-500" />}
        />
        <div className="flex flex-row justify-end">
          <Components.Cards.aboutCard
            title="What We Do"
            desc="We specialize in designing educational and interactive mobile
              applications that promote positive habits and raise awareness
              about the importance of nutrition, exercise, and mental
              well-being."
            icon={<Dependencies.HeroIcons.HandRaisedIcon className="size-6 fill-yellow-500" />}
          />
        </div>

        <Components.Cards.aboutCard
          title="Why It Matters"
          desc="With childhood obesity and related health concerns on the rise, our
            work is more important than ever. By encouraging healthier
            lifestyles through technology, we hope to foster a generation that
            values wellness and grows into thriving adults."
          icon={<Dependencies.HeroIcons.LockClosedIcon className="size-6 fill-amber-300" />}
        />
      </section>
    </div>
  );
}
