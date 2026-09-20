import { FaStar } from "react-icons/fa";
import type { BadgeType, Technology } from "../../types/technology";

interface Props {
  tech: Technology;
  addStack: (tech: Technology) => void;
  isAdded: boolean;
}

const badgeStyle: Record<BadgeType, string> = {
  Popular: "bg-blue-50 text-blue-500 border-blue-100",
  Versatile: "bg-green-50 text-green-500 border-green-100",
  Fast: "bg-orange-50 text-orange-500 border-orange-100",
  Standard: "bg-green-50 text-green-500 border-green-100",
  "Top SQL": "bg-blue-50 text-blue-500 border-blue-100",
  Cache: "bg-red-50 text-red-500 border-red-100",
  Ubiquitous: "bg-yellow-50 text-yellow-500 border-yellow-100",
  Essential: "bg-sky-50 text-sky-500 border-sky-100",
  Robust: "bg-red-50 text-red-500 border-red-100",
  Modern: "bg-cyan-50 text-cyan-500 border-cyan-100",
  Containers: "bg-blue-50 text-blue-500 border-blue-100",
};

const TechnologyCard = ({ tech, addStack, isAdded }: Props) => {
  return (
    <div className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition ${isAdded ? "border-pink-300" : "border-gray-100"}`}>
      <div className="flex items-start justify-between">
        <img className="h-8 w-8" src={tech.icon} alt={`${tech.name} icon`} loading="lazy" />
        <span className={`rounded-full border px-3 py-1 text-sm font-medium ${badgeStyle[tech.badge]}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-6 text-[22px] font-bold text-ink">{tech.name}</h3>
      <p className="mt-2 leading-6 text-gray-400">{tech.description}</p>

      <div className="mt-auto pt-6">
        <hr className="border-gray-200" />

        <div className="my-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="whitespace-nowrap rounded-[5px] bg-gray-200 px-2 py-0.5 text-sm font-bold text-gray-500">
            {tech.category}
          </span>
          <p className="whitespace-nowrap font-medium text-gray-500">{tech.difficulty}</p>
          <div className="flex shrink-0 items-center gap-1">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{tech.rating}</span>
          </div>
        </div>

        <button
          onClick={() => addStack(tech)}
          disabled={isAdded}
          className={`h-12 w-full rounded-2xl font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-gray-100 text-accent"
              : "cursor-pointer bg-black text-white hover:bg-gray-800 active:scale-[0.98]"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;