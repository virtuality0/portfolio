import Link from "next/link";
import { Button } from "./Button";

interface ProjectCardComponentProps {
  title: string;
  description?: string;
  tags?: string[];
  linkToGithub?: string;
  deploymentLink?: string;
  image?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  linkToGithub,
  deploymentLink,
  image,
}: ProjectCardComponentProps) => {
  return (
    <div className="flex flex-col items-center gap-y-4 bg-black-700 px-4 py-4 rounded-lg shadow-md shadow-green-500 md:w-[75%] w-full md:h-96">
      <h1 className="text-3xl text-white font-medium">{title}</h1>
      <div className="md:flex-row flex flex-col gap-4 grow w-full items-center">
        <div className="rounded-md md:w-[45%] w-full shadow-md shadow-white/60">
          <img src={image} alt="project image" />
        </div>
        <div className="md:max-w-[50%] flex flex-col flex-wrap gap-y-8 px-4 py-4 grow">
          <p className="text-gray-600">{description}</p>
          <div className="flex gap-2 flex-wrap content-start">
            {tags?.map((item) => {
              return (
                <div
                  key={item}
                  className="px-2 py-1 bg-green-500 text-white font-medium rounded-2xl"
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="md:flex-row flex flex-col gap-2 w-full">
            <Link href={linkToGithub ?? ""}>
              <Button size="md" variant="secondary" text="See on github" />
            </Link>
            <Link href={deploymentLink ?? ""}>
              <Button size="md" variant="primary" text="Website" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
