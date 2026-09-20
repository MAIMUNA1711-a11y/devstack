import type { Technology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";

interface Props {
  technologies: Technology[];
  stack: Technology[];
  addStack: (tech: Technology) => void;
}

const TechnologyGrid = ({ technologies, stack, addStack }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          addStack={addStack}
          isAdded={stack.some((item) => item.id === tech.id)}
        />
      ))}
    </div>
  );
};

export default TechnologyGrid;