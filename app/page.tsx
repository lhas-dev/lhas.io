/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import SplitText from "../components/SplitText";
import Waves from "@/components/Waves";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  const techStack = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Ruby",
    "Ruby on Rails",
    "Docker",
    "AWS",
    "CI/CD",
    "Git",
    "GitHub",
  ];
  const projects = [
    {
      title: "DI.FM",
      description: "Electronic music streaming service.",
      image: "/di.jpg",
      link: "https://di.fm",
    },
    {
      title: "Headshot.club",
      description: "AI Headshot Generator service.",
      image: "/headshot.jpg",
      link: "https://headshot.club",
    },
    {
      title: "JoVE",
      description: "Science video for university students.",
      image: "/jove.jpg",
      link: "https://jove.com",
    },
    {
      title: "Rovrstack.ai",
      description: "AI HealthTech platform for doctors.",
      image: "/rovr.jpg",
      link: "https://rovrstack.ai",
    },
  ];
  const listVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Animates children one after the other
      },
    },
  };

  return (
    <div className="min-h-screen">
      <div className="container flex flex-col lg:flex-row gap-20 justify-center lg:justify-between mx-auto py-20 lg:items-center">
        <div className="flex gap-10 w-full px-10 lg:px-0 lg:max-w-[600px]">
          <motion.img
            src="/me2.png"
            alt="Luiz Almeida"
            className="drop-shadow-2xl shrink-0 rounded-full w-[220px] h-[220px] object-cover object-center grayscale-[40%] transition-all hover:grayscale-[100%]"
          />
          <div className="flex flex-col">
            <div className="">
              <SplitText
                id="about-me"
                text="Luiz Almeida"
                className="text-5xl font-semibold text-left"
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>
            <p className="text-2xl font-normal text-left tracking-wide py-2">
              Front End Engineer
            </p>
            <p className="text-lg font-light tracking-wider">
              I turn ideas into pixel-perfect digital experiences for over a
              decade.
            </p>
          </div>
        </div>
        <div className="w-full relative overflow-hidden px-10 lg:px-0">
          <p className="text-lg font-light text-justify tracking-wider">
            I'm a software engineer with over 14 years of experience. I'm
            passionate about crafting{" "}
            <em className="font-semibold">pixel-perfect user interfaces</em>{" "}
            that blend thoughtful design with some advanced techniques in the
            engineering side.
            <br />
            <br />I started my career in 2010 and have worked with various
            technologies across industries, such as SaaS and e-commerce. I'm a{" "}
            <strong className="font-semibold">fast-paced developer</strong>, and
            I enjoy solving problems and being creative.
            <br />
            <br />
            I've balanced simultaneous roles, delivering high-quality solutions
            for both full-time and freelance engagements. I’m seeking new
            opportunities to bring my skills to dynamic teams and help build
            innovative and scalable software solutions using{" "}
            <strong className="font-semibold">modern technologies</strong>.
            <br />
            <br />
            In my free time, I'm usually practicing <em>Brazilian Jiu-Jitsu</em>
            , gardening, hanging out with my wife, daughter and five cats.
          </p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex justify-center lg:justify-start flex-wrap flex-row gap-3 mt-10"
          >
            <motion.a
              variants={listVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6, // Increase duration for smoother end
                ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
                damping: 20, // Controls oscillation and smoothness
                stiffness: 50, // Adjusts the spring force
                mass: 0.5, // Simulates lighter elements for smoother motion
              }}
              href="/resume.pdf"
              target="_blank"
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-gray-900 text-gray-100 px-4 py-2 rounded-full"
            >
              <FaDownload className="text-2xl" /> Resume
            </motion.a>
            <motion.a
              variants={listVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              href="https://github.com/lhas-dev"
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-gray-900 text-gray-100 px-4 py-2 rounded-full"
              target="_blank"
            >
              <FaGithub className="text-2xl" /> Github
            </motion.a>
            <motion.a
              variants={listVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              href="https://www.linkedin.com/in/luizhrqas/"
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-gray-900 text-gray-100 px-4 py-2 rounded-full"
              target="_blank"
            >
              <FaLinkedin className="text-2xl" /> Linkedin
            </motion.a>
            <motion.a
              variants={listVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              href="https://www.instagram.com/lhas.js/"
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-gray-900 text-gray-100 px-4 py-2 rounded-full"
              target="_blank"
            >
              <FaInstagram className="text-2xl" /> Instagram
            </motion.a>
            <motion.a
              variants={listVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              href="mailto:luizhrqas@gmail.com"
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-gray-900 text-gray-100 px-4 py-2 rounded-full"
              target="_blank"
            >
              <FaEnvelope className="text-2xl" /> Email
            </motion.a>
          </motion.div>
        </div>
      </div>
      <div className="w-full h-[300px] relative overflow-hidden opacity-10">
        <Waves />
      </div>

      <div className="py-20 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="w-full text-center lg:text-left">
            <SplitText
              id="technologies"
              text="Technologies"
              className="text-5xl font-semibold text-left"
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0,50px,0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="0px"
            />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-row flex-wrap  justify-center lg:justify-end gap-3  w-full"
          >
            <AnimatePresence>
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  variants={listVariants}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.6, // Increase duration for smoother end
                    ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
                    damping: 20, // Controls oscillation and smoothness
                    stiffness: 50, // Adjusts the spring force
                    mass: 0.5, // Simulates lighter elements for smoother motion
                  }}
                  className="bg-neutral-900 hover:bg-neutral-700 transition-all text-gray-100 text-lg font-medium px-4 py-2 rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="py-20 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex-shrink-0 text-center lg:text-left">
            <SplitText
              id="projects"
              text="Recent Projects"
              className="text-5xl font-semibold text-left"
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0,50px,0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="0px"
            />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-row flex-wrap gap-3 w-full justify-end"
          >
            <AnimatePresence>
              {projects.map((project) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  variants={listVariants}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.6, // Increase duration for smoother end
                    ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
                    damping: 20, // Controls oscillation and smoothness
                    stiffness: 50, // Adjusts the spring force
                    mass: 0.5, // Simulates lighter elements for smoother motion
                  }}
                  className="w-[240px] shadow-2xl hover:drop-shadow-lg rounded-lg text-neutral-100 p-4 bg-neutral-900 hover:bg-neutral-800 hover:text-neutral-100 transition-all"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[200px] object-cover object-top rounded-lg"
                  />
                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-lg font-light">{project.description}</p>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#about-me"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Recent Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="mailto:luizhrqas@gmail.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/lhas.js/"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            © 2025 Luiz Almeida a.k.a lhas.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
