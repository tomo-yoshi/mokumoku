/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-around items-center bg-gradient-to-r from-theme_purple to-theme_blue w-11/12 h-1/2 max-h-[700px] rounded-3xl mx-auto overflow-hidden">
      <div className="w-1/2 max-w-[700px] h-full relative botto-0">
        <div className="absolute w-5/6  h-5/6 max-h-[700px] bottom-0 left-1/2 -translate-x-1/2 bg-white/20 rounded-full backdrop-blur-sm"></div>
        <img
          src="/assets/img/hero.png"
          alt="top_image"
          className="relative w-full object-cover"
        />
      </div>
      <div className="text-white w-1/2">
        <h1 className="font-secondary text-4xl">
          Won&apos;t you join Mokumoku-kai in Vancouver?
        </h1>
      </div>
    </div>
  );
};
