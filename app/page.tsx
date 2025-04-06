import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-6 w-full">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
