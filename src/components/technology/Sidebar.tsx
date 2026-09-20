import { RxCross2 } from "react-icons/rx";
import type { Technology } from "../../types/technology";

interface Props {
  stack: Technology[];
  removeStack: (id: string) => void;
  removeAll: () => void;
}

const Sidebar = ({ stack, removeStack, removeAll }: Props) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-ink">Your Stack</h2>
      <p className="mt-1 text-gray-400">
        {stack.length > 0
          ? `${stack.length} ${stack.length === 1 ? "Technology" : "Technologies"} Selected`
          : "No technologies selected yet"}
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-gray-500 p-8 text-ink">
          Your Stack is empty
        </div>
      ) : (
        <ul className="mt-5 space-y-3">
          {stack.map((item) => (
            <li key={item.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt="" className="h-8 w-8" />
                <div>
                  <h3 className="font-semibold text-ink">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>

              <button
                aria-label={`Remove ${item.name}`}
                onClick={() => removeStack(item.id)}
                className="cursor-pointer rounded-full p-1 text-xl text-gray-500 transition hover:bg-red-50 hover:text-red-500"
              >
                <RxCross2 />
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={removeAll}
        className="mt-5 w-full cursor-pointer rounded-lg border border-red-300 py-2 text-red-500 transition hover:bg-red-50"
      >
        Remove All
      </button>
    </div>
  );
};

export default Sidebar;