"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaGitSquare,
  FaGithub,
  FaReact,
  FaDocker,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaWindows,
  FaRobot,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiKubernetes,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiPrisma,
  SiMysql,
  SiFirebase,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoSchoolSharp } from "react-icons/io5";

import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am a fourth-year BTech student deeply passionate about full stack web development, data structures and algorithms. My enthusiasm for languages like C++, C, JavaScript and Python drives my eagerness to apply theoretical knowledge to practical projects. I am genuinely excited about leveraging my skills to innovate and solve real-world challenges. Committed to continuous learning, I thrive on exploring new concepts and advancing in the dynamic field of computer science.",
  info: [
    { fieldName: "Name", fieldValue: "Prithvi Yadav" },
    { fieldName: "Phone", fieldValue: "+91 7042744824" },
    { fieldName: "Email", fieldValue: "prithvi.y24@gmail.com" },
    {
      fieldName: "Solved over",
      fieldValue: "1000+ problems over Coding Platforms",
    },
    { fieldName: "Codeforces", fieldValue: "Specialist in Codeforces" },
    { fieldName: "Codechef", fieldValue: "3 star coder at Codechef" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "Hindi, English" },
    { fieldName: "Nationality", fieldValue: "Indian" },
  ],
};

const education = {
  icon: <IoSchoolSharp />,
  title: "My education",
  description:
    "My academic journey in computer science equipped me with a strong theoretical foundation and practical skills in software development. I've focused on mastering current technologies and methodologies to solve complex challenges and drive innovation in technology.",
  items: [
    {
      institution: "Netaji Subhas University of Technology, Delhi",
      degree: "Bachelors in Computer Science and Engineering(AI)",
      score: "8.09",
      bo: "CGPA",
      duration: "2021-2025",
    },
    {
      institution: "Bhai Paramanand Vidya Mandir, Delhi",
      degree: "CBSE Class 12 (Intermediate)",
      score: "99.8%",
      bo: "DISTRICT TOPPER",
      duration: "2020-2021",
    },
    {
      institution: "Udemy",
      degree: "Full Stack Web Development",
      score: "View Certificate",
      bo: "",
      duration: "Certification",
    },
    {
      institution: "Coding Ninjas",
      degree: "Advanced Data Structures and Algorithms",
      score: "View Certificate",
      bo: "",
      duration: "Certification",
    },
    {
      institution: "Bhai Paramanand Vidya Mandir, Delhi",
      degree: "CBSE Class 10 (Matriculation)",
      score: "97%",
      bo: "SCHOOL TOPPER",
      duration: "2018-2019",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Proficient in full stack web development, specializing in front-end and back-end technologies. Skilled in API integration, Kubernetes, and database management. Adept at creating visually stunning webpages using HTML, CSS, JavaScript, and TypeScript, and leveraging frameworks like React.js, Next.js, and Bootstrap for effective design. Experienced in server-side development with Node.js, Express.js, Prisma, and MongoDB. Well-versed in version control with Git and GitHub, and comfortable with containerization and orchestration using Docker and Kubernetes.Additionally, I have hands-on experience with Pandas, NumPy, EmailJS, LeafletJS, and EJS for various application development needs. With a solid foundation in Data Structures and Algorithms, Object-Oriented Programming, and Database Management, I am equipped to handle complex programming challenges and deliver innovative solutions.",
  skillList: {
    Languages: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiTypescript />, name: "TypeScipt" },
      { icon: <FaGitSquare />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
    ],
    Frameworks: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiKubernetes />, name: "Kubernetes" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
    ],
    Databases: [
      { icon: <DiMongodb />, name: "MongoDB" },
      { icon: <SiFirebase />, name: "FireBase" },
      { icon: <SiPrisma />, name: "Prisma" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
    Courses: [
      { icon: <IoSchoolSharp />, name: "Data Structure and Algorithms" },
      { icon: <IoSchoolSharp />, name: "OOPS" },
      { icon: <FaDatabase />, name: "Database Management" },
      { icon: <FaWindows />, name: "Operating System" },
      { icon: <FaRobot />, name: "AI / ML" },
    ],
  },
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[7  0vh] w-full">
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] mb-20">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[500px]">
                  <div className="flex flex-wrap gap-[30px]">
                    {Object.keys(skills.skillList).map((category) => (
                      <div key={category} className="w-full">
                        <h4 className="text-2xl font-bold capitalize">
                          {category}
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2 xl:gap-[20px]">
                          {skills.skillList[category].map((skill, index) => (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-3 px-5 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <div className="flex sm:flex-row justify-between items-center flex-col w-[350px]">
                          <h3 className="text-xl max-w-[255px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex flex-col max-w-[260px]">
                            <p className="text-[12px] min-h-[30px] text-center">
                              {item.score === "View Certificate" ? (
                                item.institution === "Udemy" ? (
                                  <a
                                    href="https://www.udemy.com/certificate/UC-d212fa74-8550-4a01-aea8-42b42cae180d/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View Certificate
                                  </a>
                                ) : (
                                  <a
                                    href="https://drive.google.com/file/d/1dRy7Il9QbdXC6TD4ekfZgffChc24hsA4/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View Certificate
                                  </a>
                                )
                              ) : (
                                <span>{item.score}</span>
                              )}
                            </p>
                            <p className="text-[12px] min-h-[30px] text-center">
                              {item.bo}
                            </p>
                            <p></p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
