import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-6 w-full">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}
