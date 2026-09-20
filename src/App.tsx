import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast, type ToastOptions } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechnologySection from "./components/technology/TechnologySection";
import type { Technology } from "./types/technology";

const toastOptions: ToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Bounce,
};

function App() {
  // sob technology (data.json theke ashbe)
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // user-er nijer stack
  const [stack, setStack] = useState<Technology[]>([]);

  // page load hole ekbar data.json load korbe
  useEffect(() => {
    const controller = new AbortController();

    const loadTechnologies = async () => {
      try {
        const res = await fetch("/data.json", { signal: controller.signal });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data: Technology[] = await res.json();
        setTechnologies(data);
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadTechnologies();
    return () => controller.abort();
  }, []);

  const addStack = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) return;
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`, toastOptions);
  };

  const removeStack = (id: string) => {
    const tech = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${tech?.name ?? "Technology"} removed`, toastOptions);
  };

  const removeAll = () => {
    if (stack.length === 0) {
      toast.info("Your stack is already empty", toastOptions);
      return;
    }
    setStack([]);
    toast.error("Stack cleared", toastOptions);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <TechnologySection
        technologies={technologies}
        loading={loading}
        error={error}
        stack={stack}
        addStack={addStack}
        removeStack={removeStack}
        removeAll={removeAll}
      />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;