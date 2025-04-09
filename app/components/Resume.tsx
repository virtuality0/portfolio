import { Button } from "./Button";

export const Resume = () => {
  return (
    <div id="resume" className="flex justify-center w-full px-4 py-4">
      <a target="_blank" href="/AyushResume.pdf">
        <Button
          size="lg"
          variant="primary"
          text="You can download my resume from here !"
        />
      </a>
    </div>
  );
};
