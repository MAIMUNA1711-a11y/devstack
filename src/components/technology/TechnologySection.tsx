import type { Technology } from "../../types/technology";
import TechnologyGrid from "./TechnologyGrid";
import Sidebar from "./Sidebar";

interface Props {
  technologies: Technology[];
  loading: boolean;
  error: string | null;
  stack: Technology[];
  addStack: (tech: Technology) => void;
  removeStack: (id: string) => void;
  removeAll: () => void;
}

const TechnologySection = ({ technologies, loading, error, stack, addStack, removeStack, removeAll }: Props) => {
  return (
    <section id="technologies" className="container mx-auto px-5">
      <div>
        <h2 className="text-4xl font-bold text-ink sm:text-5xl">
          Explore the <span className="text-accent">Technologies</span>
        </h2>
        <p className="my-4 text-lg text-gray-500">
          Pick one technology per category to build your ideal stack
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-10 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1 xl:order-1">
          {loading ? (
            <p className="py-20 text-center text-2xl font-semibold text-gray-400">Loading...</p>
          ) : error ? (
            <p className="py-20 text-center text-lg font-medium text-red-500">
              Couldn't load technologies: {error}
            </p>
          ) : (
            <TechnologyGrid technologies={technologies} stack={stack} addStack={addStack} />
          )}
        </div>

        <div className="order-first w-full xl:sticky xl:top-24 xl:order-2 xl:w-80 xl:shrink-0">
          <Sidebar stack={stack} removeStack={removeStack} removeAll={removeAll} />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;