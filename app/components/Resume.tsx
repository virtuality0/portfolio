import { Button } from "./Button";

export const Resume = () => {
  return (
    <div id="resume" className="flex justify-center w-full px-4 py-4">
      <a target="_blank" href="/My_Resume.pdf">
        <Button size="lg" variant="primary" text="Click to download resume !" />
      </a>
    </div>
  );
};
