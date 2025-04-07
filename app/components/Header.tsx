"use client";
import Link from "next/link";
import { Logo } from "../icons/logo";
import { Menu } from "../icons/menu";
import { useState } from "react";
import { Close } from "../icons/Close";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-4 py-4 bg-black-700 w-full md:w-[95%] rounded-md shadow-md shadow-green-500">
        <div className="flex gap-x-4 items-center px-2 py-2">
          <div className="text-green-500">
            <Logo size="lg" strokeWidth={3.0} />
          </div>
          <span className="text-white font-medium">Ayush.Dev</span>
        </div>
        <nav className="md:flex md:gap-x-4 md:items-center hidden px-2 py-2 text-white font-medium">
          <Link
            className="cursor-pointer hover:bg-green-500 px-2 py-2 rounded-md"
            href="#resume"
          >
            Resume
          </Link>
          <Link
            className="cursor-pointer hover:bg-green-500 px-2 py-2 rounded-md"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="cursor-pointer hover:bg-green-500 px-2 py-2 rounded-md"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
        <nav className="flex gap-x-4 items-center">
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
        <div
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <Close size="lg" /> : <Menu size="lg" />}
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute w-full bg-gray-700 flex flex-col px-2 py-2 text-white font-medium gap-y-4 top-20 rounded-md">
          <Link className="px-4 py-2" href="/resume">
            Resume
          </Link>
          <Link className="px-4 py-2" href="/projects">
            Projects
          </Link>
          <Link className="px-4 py-2" href="/contact">
            Contact
          </Link>
        </div>
      )}
    </>
  );
};
