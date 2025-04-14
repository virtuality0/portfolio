import projects from "../projects.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col px-4 py-4 gap-y-6 md:w-[95%] w-[85%] justify-center"
    >
      <span className="text-green-500 font-semibold text-3xl px-4 py-2">
        Projects
      </span>
      <Carousel className="w-full">
        <CarouselPrevious />
        <CarouselContent>
          {projects.projects.map((item) => {
            return (
              <CarouselItem className="shadow-lg shadow-green-500">
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  deploymentLink={item.deploymentLink}
                  linkToGithub={item.githubLink}
                  image="/images/second-brain.png"
                  tags={item.tags}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};
