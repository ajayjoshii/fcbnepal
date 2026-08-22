import Pastoral from "../../components/Pastoral";

export default function AboutHero() {
  return (
    <section className="bg-white ">
      <div className="mx-auto px-6 py-20 sm:px-8 lg:px-12 bg-blue-900">
        <div className="flex justify-center flex-col items-center min-w-screen  ">
          <p className="mb-4 text-sm text-yellow-400 font-semibold uppercase tracking-widest">
            About Our Church
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Leaders
          </h1>

          <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-white">
            Faithful servants committed to biblical teaching, shepherding,
            discipleship, and the care of God&apos;s people.
          </p>
        </div>

      </div>
      <Pastoral />

    </section>
  );
}