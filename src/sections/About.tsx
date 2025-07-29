"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithupIcon from "@/assets/icons/github.svg";
import { TexhIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileImojii from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxitems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: " JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: " HTML5",
    iconType: HTMLIcon,
  },
  {
    title: " CSS3",
    iconType: CssIcon,
  },
  {
    title: " React",
    iconType: ReactIcon,
  },
  {
    title: " Chrome",
    iconType: ChromeIcon,
  },
  {
    title: " Githup",
    iconType: GithupIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "👾",
    left: "10%",
    top: "35%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "55%",
    top: "45%",
  },
  {
    title: "fitness",
    emoji: "🏋🏻",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:28 " id="about">
      <div className="container">
        <SectionHeader
          title="A Glimpse Into My World"
          eyebrow="About Me"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h=[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={bookImage}
                  alt="Book Cover"
                  className="w-32 h-auto md:w-25 rounded-lg"
                />
              </div>
            </Card>
            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                className=" pt-6"
                title="My Toolbox"
                description=" Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <ToolBoxItems
                Items={toolboxItems}
                className=""
                itemsWrapperClasssName="animate-move-left [animation-duration:30s] "
              />
              <ToolBoxItems
                Items={toolboxItems}
                className="mt-6 "
                itemsWrapperClasssName="animate-move-right [animation-duration:30s]"
              />
            </Card>

            <Card className="h-[320px]  flex flex-col   md:col-span-3 lg:col-span-3">
              <CardHeader
                title="Beyond the Code"
                description=" Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
