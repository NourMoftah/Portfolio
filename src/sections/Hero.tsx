"use client";

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arr-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

import { HeroOrbit } from "@/components/HeroOrbit";
export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-23 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.1)_10%,rgba(0,0,0,0.7)_70%,transparent_100%)]">
        <div
          className="absolute inset-0 pointer-events-none -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit x="10%" y="15%" rotation={10}>
          <StarIcon className="size-6 text-emerald-400" />
        </HeroOrbit>
        <HeroOrbit x="53%" y="15%" rotation={10}>
          <StarIcon className="size-6 text-emerald-400" />
        </HeroOrbit>
        <HeroOrbit x="27%" y="46%" rotation={10}>
          <StarIcon className="size-6 text-emerald-400" />
        </HeroOrbit>
        <HeroOrbit x="11%" y="60%" rotation={10}>
          <StarIcon className="size-6 text-emerald-400" />
        </HeroOrbit>

        <HeroOrbit x="85%" y="20%" rotation={-20}>
          <SparkleIcon className="size-5 text-emerald-300/30" />
        </HeroOrbit>

        <HeroOrbit x="30%" y="25%" rotation={0}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit x="70%" y="35%" rotation={45}>
          <StarIcon className="size-10 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit x="15%" y="50%" rotation={-15}>
          <SparkleIcon className="size-6 text-emerald-300/40" />
        </HeroOrbit>

        <HeroOrbit x="90%" y="60%" rotation={5}>
          <div className="size-3 rounded-full bg-emerald-300/10" />
        </HeroOrbit>

        <HeroOrbit x="25%" y="70%" rotation={30}>
          <StarIcon className="size-20 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit x="75%" y="75%" rotation={-30}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit x="50%" y="85%" rotation={15}>
          <div className="size-2 rounded-full bg-emerald-300/30" />
        </HeroOrbit>

        <HeroOrbit x="40%" y="90%" rotation={-10}>
          <StarIcon className="size-6 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            className="size-[100px]"
            src={memojiImage}
            alt="person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500  inset-0 absolute animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Bulding Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4  relative z-10">
          <button
            onClick={() => {
              document
                .getElementById("project")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white hover:transition-colors hover:text-gray-900 "
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <a
            href="/cv/Nour-Saad-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-transparent hover:transition-colors hover:text-white hover:border hover:border-white/15"
          >
            <span className="font-semibold">Download CV</span>
            <ArrowDown className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
