/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
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
    "Tailwind",
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
  return (
    <>
      <motion.header
        initial={{ opacity: 0, paddingTop: "0px", paddingBottom: "0px" }}
        animate={{ opacity: 1, paddingTop: "120px", paddingBottom: "120px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-black px-10 relative"
      >
        <div className="absolute inset-0 w-full h-[140px]">
          <video
            src="/video.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
            className="w-full h-full object-cover filter opacity-50"
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
        <div className="container mx-auto relative z-30">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-5xl font-bold text-white uppercase drop-shadow-md text-center mt-4"
          >
            Luiz Almeida
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-2xl font-light text-white drop-shadow-md uppercase tracking-widest text-center mt-1"
          >
            Front-End Engineer
          </motion.h2>
        </div>
      </motion.header>
      <main className="relative z-20">
        <div className="container items-center justify-center flex mx-auto">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="w-[300px] h-[300px] mx-auto rounded-full"
              style={{
                backgroundImage: "url('/me3.jpg')",
                backgroundSize: "108%",
                backgroundPosition: "top center",
              }}
            ></motion.div>
          </div>
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="text-white font-light max-w-2xl text-left uppercase tracking-widest px-10"
            >
              About Me
            </motion.p>
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "84px" }}
              transition={{ duration: 1, delay: 3 }}
              className="bg-white h-[2px] ml-10 my-2"
            />
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.2 }}
              className="text-white text-4xl leading-tight font-regular max-w-2xl mx-auto px-10"
            >
              <strong className="text-purple-500">Olá!</strong> With 14 years of
              experience in front-end development, I specialize in crafting{" "}
              <strong className="text-purple-500">pixel-perfect</strong>{" "}
              applications that scale.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 5.8 }}
              className="text-white text-xl font-light px-10 tracking-wider max-w-2xl mx-auto leading-tight mt-6"
            >
              I'm a fast-paced developer from 🇧🇷 Brazil. My focus on user
              experience has enabled companies of all sizes to achieve their
              goals.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 6.2 }}
              className="text-white text-xl font-light px-10 tracking-wider max-w-2xl mx-auto leading-tight mt-6"
            >
              Got an idea? Amazing, let’s make it real.
              <br />
              <br />
              Whether you’re an entrepreneur, a startup founder, or a business
              looking for a front-end specialist.
              <br />
              <br />
              I’m here to turn concepts into awesome apps. Let’s talk!
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7 }}
          className="flex mx-auto container items-center justify-center flex-wrap flex-row gap-3 my-20"
        >
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="https://github.com/lhas-dev"
            className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white shadow-md shadow-white/10 hover:shadow-purple-700/10 hover:bg-purple-700 hover:border-purple-700 hover:shadow-lg transition-all duration-300 text-gray-100 px-4 py-2 rounded-full"
            target="_blank"
          >
            <FaGithub className="text-2xl" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="https://www.linkedin.com/in/luizhrqas/"
            className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white shadow-md shadow-white/10 hover:shadow-purple-700/10 hover:bg-purple-700 hover:border-purple-700 hover:shadow-lg transition-all duration-300 text-gray-100 px-4 py-2 rounded-full"
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="https://www.instagram.com/lhas.js/"
            className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white shadow-md shadow-white/10 hover:shadow-purple-700/10 hover:bg-purple-700 hover:border-purple-700 hover:shadow-lg transition-all duration-300 text-gray-100 px-4 py-2 rounded-full"
            target="_blank"
          >
            <FaInstagram className="text-2xl" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="mailto:luizhrqas@gmail.com"
            className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white shadow-md shadow-white/10 hover:shadow-purple-700/10 hover:bg-purple-700 hover:border-purple-700 hover:shadow-lg transition-all duration-300 text-gray-100 px-4 py-2 rounded-full"
            target="_blank"
          >
            <FaEnvelope className="text-2xl" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="/resume.pdf"
            target="_blank"
            className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white shadow-md shadow-white/10 hover:shadow-purple-700/10 hover:bg-purple-700 hover:border-purple-700 hover:shadow-lg transition-all duration-300 text-gray-100 px-4 py-2 rounded-full"
          >
            <FaDownload className="text-2xl" /> Resume
          </motion.a>
        </motion.div>
      </main>
      <div className="absolute z-10 inset-0 w-full h-full opacity-10">
        <Waves lineColor="purple" backgroundColor="transparent" />
      </div>
      {/* <div className="container flex flex-col xl:flex-row gap-20 lg:gap-10 justify-center lg:justify-between mx-auto py-10 lg:py-20 lg:px-10 xl:items-start">
        <div className="flex flex-col md:flex-row gap-10 w-full px-10 lg:px-0 lg:max-w-[600px] lg:mx-auto lg:sticky top-0 lg:pt-10">
          
          <div className="flex flex-col">
            <div className="text-center md:text-left">
              <SplitText
                id="about-me"
                text="Luiz Almeida"
                className="text-4xl xl:text-5xl font-semibold text-left"
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
            <p className="text-2xl font-normal text-center md:text-left tracking-wide py-2">
              Front End Engineer
            </p>
            <p className="text-center md:text-left font-light tracking-wider leading-7 mt-1">
              I turn ideas into{" "}
              <span className="bg-neutral-100 px-2.5 rounded-full py-2 text-neutral-900">
                pixel-perfect
              </span>{" "}
              digital experiences for over a decade.
            </p>
          </div>
        </div>
        <span className="w-full h-[1px] bg-neutral-100 xl:hidden"></span>
        <div className="w-full relative overflow-hidden px-10 lg:px-0">
          <p className="text-lg font-light text-justify tracking-wider">
            I'm a software engineer with over 14 years of experience.
            <br />
            <br />
            I'm passionate about crafting{" "}
            <em className="font-semibold">
              pixel-perfect user interfaces
            </em>{" "}
            that blend thoughtful design with some advanced techniques in the
            engineering side.
            <br />
            <br />I started my career in 2010 and have worked with various
            technologies across industries worldwide, such as SaaS and
            e-commerce.
            <br />
            <br />
            I'm a{" "}
            <strong className="font-semibold">fast-paced developer</strong>, and
            I enjoy solving problems and being creative.
            <br />
            <br />
            I've balanced simultaneous roles, delivering high-quality solutions
            for both full-time and freelance engagements.
            <br />
            <br />
            I’m seeking new opportunities to bring my skills to dynamic teams
            and help build innovative and scalable software solutions using{" "}
            <strong className="font-semibold">modern technologies</strong>.
            <br />
            <br />
            In my free time, I'm usually practicing <em>Brazilian Jiu-Jitsu</em>
            , gardening, hanging out with my wife, daughter and four cats.
          </p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex justify-center xl:justify-start flex-wrap flex-row gap-3 mt-10"
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
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white hover:bg text-gray-100 px-4 py-2 rounded-full"
            >
              <FaDownload className="text-2xl" /> Resume
            </motion.a>
            <motion.a
              variants={listVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              href="https://github.com/lhas-dev"
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white hover:bg text-gray-100 px-4 py-2 rounded-full"
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
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white hover:bg text-gray-100 px-4 py-2 rounded-full"
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
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white hover:bg text-gray-100 px-4 py-2 rounded-full"
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
              className="text-lg font-light tracking-wider flex items-center gap-2 bg-black border border-white hover:bg text-gray-100 px-4 py-2 rounded-full"
              target="_blank"
            >
              <FaEnvelope className="text-2xl" /> Email
            </motion.a>
          </motion.div>
        </div>
      </div> */}
      {/* <div className="w-full h-[300px] relative overflow-hidden opacity-10">
        <Waves />
      </div> */}

      {/* <div className="py-20 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="px-10 flex-shrink-0 text-center lg:text-left">
            <SplitText
              id="technologies"
              text="Technologies"
              className="text-4xl md:text-5xl font-semibold text-left"
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
            className="flex flex-row flex-wrap  justify-center lg:justify-end gap-3  w-full lg:px-10"
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

      <div className="w-full h-[1px] bg-neutral-100"></div>

      <div className="py-20 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex-shrink-0 text-center lg:text-left lg:px-10">
            <SplitText
              id="projects"
              text="Recent Projects"
              className="text-4xl md:text-5xl font-semibold text-left"
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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 w-full justify-end px-10"
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
                  className="w-full lg:max-w-[240px] shadow-2xl hover:drop-shadow-lg rounded-lg text-neutral-100 p-4 bg-neutral-900 hover:bg-neutral-800 hover:text-neutral-100 transition-all"
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
      </div> */}

      {/* <footer className="bg-gray-100 py-8 px-10">
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
                  href="https://github.com/lhas-dev"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/luizhrqas"
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
                  href="https://www.instagram.com/lhas.js"
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
        </footer> */}
    </>
  );
}
