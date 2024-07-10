"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Runner.io",
    description:
      "Developed an advanced online IDE supporting multiple programming languages with real-time updates and scalable containerized environments.",
    stack: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Kubernetes" },
      { name: "Socket.io" },
      { name: "TypeScript" },
      { name: "React" },
    ],
    image: "/assets/work/t1.png",
    live: "https://github.com/prithviyadav/runner.io",
    github: "https://github.com/prithviyadav/runner.io",
  },
  {
    num: "02",
    category: "fullstack",
    title: "FindFlat.io",
    description:
      "Developed a scalable real estate platform with secure authentication, real-time chat, and dynamic property listings.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Prisma" },
      { name: "JWT" },
      { name: "Cookies" },
      { name: "Socket.io" },
    ],
    image: "/assets/work/t2.png",
    live: "https://github.com/prithviyadav/findflat.io",
    github: "https://github.com/prithviyadav/findflat.io",
  },
  {
    num: "03",
    category: "machinelearning",
    title: "LipReader.io",
    description:
      "Designed a model using CNNs and LSTMs to transcribe lip movements into text, achieving 95.2% accuracy on the GRID corpus.",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "OpenCV" },
    ],
    image: "/assets/work/t3.png",
    live: "https://github.com/prithviyadav/lipReader",
    github: "https://github.com/prithviyadav/lipReader",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Quiz.io",
    description:
      "Revolutionizing the quiz and trivia experience by harnessing the immense potential of artificial intelligence. Join the fun and invite others too!",
    stack: [
      { name: "Next.js" },
      { name: "NextAuth" },
      { name: "OpenAI" },
      { name: "ReactQuery" },
      { name: "Prisma" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://github.com/prithviyadav/quiz.io",
    github: "https://github.com/prithviyadav/quiz.io",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div
                className="text-8xl leading-none font-extrabold text-transparent
text-outline"
              >
                {project.num}
              </div>
              {/* project category */}
              <h2
                className="text-[42px] font-bold leading-none
group-hover: text-accent transition-all duration-500 capitalize"
              >
                {project.title} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GithubRepository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] realtive group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover p-2"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
