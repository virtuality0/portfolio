import projects from "../projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col px-4 py-4 gap-y-6 w-[95%] items-center"
    >
      <span className="text-green-500 font-semibold text-4xl px-4 py-2 underline">
        Projects
      </span>
      <div className="flex-col flex gap-4 items-center">
        {projects.projects.map((item) => {
          return (
            <ProjectCard
              key={item.title}
              title={item.title}
              description={item.description}
              deploymentLink={item.deploymentLink}
              linkToGithub={item.githubLink}
              image={item.image}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
};
