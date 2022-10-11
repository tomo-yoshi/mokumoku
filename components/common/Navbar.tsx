import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/assets/img/logo.png";
import { BsThreeDotsVertical, BsX } from "react-icons/bs";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav
      className={`fixed z-10 top-0 left-0 bg-white overflow-hidden w-screen h-20 text-theme_black text-base px-10 xl:px-20 flex items-center justify-between flex-col lg:flex-row`}
    >
      <div className="flex flex-row-reverse justify-between items-center w-full lg:w-auto">
        <Link href="/">
          <a
            rel="noopener noreferrer"
            className="block fixed top-0 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-0 lg:static"
          >
            <Image
              src={Logo}
              alt="mokumoku_logo"
              width={150}
              height={70}
              objectFit="contain"
            />
          </a>
        </Link>
        {open ? (
          <button
            className="block lg:hidden fixed top-5 right-3"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <BsX className=" fill-theme_black w-8 h-8" />
          </button>
        ) : (
          <button
            className="block lg:hidden fixed top-7 right-3"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <BsThreeDotsVertical className=" fill-theme_black w-7 h-7" />
          </button>
        )}
      </div>
      <div
        className={`${
          open
            ? "translate-x-0 flex fixed bg-white w-screen mt-20 lg:mt-0 py-10 lg:py-0"
            : "translate-x-[1000px] hidden lg:flex lg:translate-x-0"
        } transition-all mt-10 lg:mt-0 flex flex-col lg:flex-row gap-10 justify-center items-center pt-10 lg:pt-0`}
      >
        <Link href="/#about">
          <a className="font-primary">About</a>
        </Link>
        <Link href="/#schedules">
          <a className="font-primary">Schedules</a>
        </Link>
        <Link href="/#support">
          <a className="font-primary">Support</a>
        </Link>
        <Link href="/#organiser">
          <a className="font-primary">Organiser</a>
        </Link>
        <Link href="/sign-up">
          <a className="lg:hidden font-primary text-white w-28 h-auto py-2 flex justify-center items-center bg-gradient-to-r from-theme_purple to-theme_blue rounded-full">
            Sign Up
          </a>
        </Link>
        <Link href="/login">
          <a className="lg:hidden font-primary w-28 h-auto py-2 flex justify-center items-center border text-theme_blue border-theme_blue rounded-full">
            Login
          </a>
        </Link>
      </div>
      <div
        className={`${
          open
            ? "translate-x-0 hidden lg:flex"
            : "translate-x-[1000px] hidden lg:flex lg:translate-x-0"
        } transition-all flex flex-col lg:flex-row gap-3 pt-10 lg:pt-0`}
      >
        <Link href="/sign-up">
          <a className="font-primary text-white w-28 h-auto py-2 flex justify-center items-center bg-gradient-to-r from-theme_purple to-theme_blue rounded-full">
            Sign Up
          </a>
        </Link>
        <Link href="/login">
          <a className="font-primary w-28 h-auto py-2 flex justify-center items-center border text-theme_blue border-theme_blue rounded-full">
            Login
          </a>
        </Link>
      </div>
    </nav>
  );
};
