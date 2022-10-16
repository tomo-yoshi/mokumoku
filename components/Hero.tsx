/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <div className="max-w-[1860px] flex flex-col lg:flex-row justify-around items-center bg-gradient-to-r from-theme_purple to-theme_blue w-11/12 h-1/2 max-h-[700px] rounded-3xl mx-auto overflow-hidden">
      <div className="w-1/2 max-w-[700px] h-full relative botto-0">
        <div className="absolute w-5/6  h-5/6 max-h-[700px] bottom-0 left-1/2 -translate-x-1/2 bg-white/20 rounded-full backdrop-blur-sm"></div>
        <img
          src="/assets/img/hero.png"
          alt="top_image"
          className="relative w-full object-cover"
        />
      </div>
      <div className="text-white w-10/12 lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-10 py-10 lg:py-0">
        <h1 className="font-secondary text-center lg:text-left text-2xl lg:text-4xl mb-0 lg:mb-4">
          Won&apos;t you join Mokumoku-kai in Vancouver?
        </h1>
        <h2 className="font-primary text-center lg:text-left text-sm lg:text-xl">
          A Japanese-style web developer&apos;s community
        </h2>
        <div className="flex gap-5 justify-center lg:justify-end items-center w-full lg:w-9/12 mx-auto pt-0 lg:pt-20">
          <Link href="/signup">
            <a className="border text-base lg:text-lg shadow-lg py-2 px-3 lg:px-5 w-32 lg:w-40 text-center rounded-2xl bg-white/10 font-secondary tracking-widest">
              Sing Up
            </a>
          </Link>
          <Link href="#howtojoin">
            <a className="border text-base lg:text-lg shadow-lg py-2 px-3 lg:px-5 w-32 lg:w-40 text-center rounded-2xl bg-white/10 font-secondary tracking-widest">
              How to Join
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
