import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col items-center justify-between gap-10 px-5 py-16 md:py-24 lg:flex-row lg:py-32"
    >
      <div className="w-full space-y-8 lg:w-1/2">
        <h1 className="text-4xl font-bold leading-[1.15] text-ink sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />
          <span className="bg-brand bg-clip-text text-transparent">Development Stack</span>
        </h1>

        <p className="max-w-lg text-lg leading-7 text-gray-500">
          Explore frontend, backend, database, and tooling options, compare them side by side, and
          put together the stack that fits your next project.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#technologies" className="cursor-pointer rounded-[5px] border border-gray-500 bg-brand px-6 py-3 text-white transition hover:opacity-90">
            Explore Technologies
          </a>
          <a href="#footer" className="cursor-pointer rounded-[5px] border border-gray-500 px-6 py-3 text-ink transition hover:bg-gray-50">
            Learn More
          </a>
        </div>
      </div>

      <div className="flex w-full justify-center lg:w-1/2">
        <img src={banner} alt="Layered technology stack illustration" className="w-full max-w-md lg:max-w-lg" />
      </div>
    </section>
  );
};

export default Hero;