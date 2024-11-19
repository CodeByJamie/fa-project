import Header from "../components/header";
import AboutCard from "../components/aboutCard";

export default function about() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="flex flex-col px-10 gap-7">
        <AboutCard
          title="Our Mission"
          desc="Our mission at KidFit is to provide children and adults with the
            knowlege of heathy eating, with being able to track food intake and
            calories."
        />
        <div className="flex flex-row justify-end">
          <AboutCard
            title="What We Do"
            desc="We specialize in designing educational and interactive mobile
              applications that promote positive habits and raise awareness
              about the importance of nutrition, exercise, and mental
              well-being."
          />
        </div>

        <AboutCard
          title="Why It Matters"
          desc="With childhood obesity and related health concerns on the rise, our
            work is more important than ever. By encouraging healthier
            lifestyles through technology, we hope to foster a generation that
            values wellness and grows into thriving adults."
        />
      </section>
    </div>
  );
}
