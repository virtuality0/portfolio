import Link from "next/link";
import { Logo } from "../icons/logo";

export const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col gap-y-4 items-center px-2 py-2 bg-black-700 w-full"
    >
      <div className="text-green-500">
        <Logo size="lg" strokeWidth={3.0} />
      </div>
      <span className="text-white font-medium">Ayush.Dev</span>
      <nav className="flex gap-x-6 items-center">
        <Link href="https://github.com/virtuality0">
          <img
            className="w-5 md:w-10 cursor-pointer"
            src="/images/github.svg"
            alt="github"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/ayush-juyal-5401b5180/">
          <img
            className="w-5 md:w-10 cursor-pointer"
            src="/images/linkedin.svg"
            alt="linkedin"
          />
        </Link>
        <Link href="#">
          <img
            className="w-5 md:w-10 cursor-pointer"
            src="/images/twitter.svg"
            alt="twitter"
          />
        </Link>
      </nav>
    </div>
  );
};
