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
        animate={{ opacity: 1, paddingTop: "100px", paddingBottom: "100px" }}
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
        <div className="container items-center justify-center flex flex-col lg:flex-row mx-auto">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto rounded-full"
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
              Got an idea? Amazing, let’s make it real. 🚀
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7 }}
          className="overflow-hidden"
        >
          <motion.p
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-white/10 leading-tight text-5xl whitespace-nowrap font-bold"
          >
            React • TypeScript • Node.js • Next.js • Tailwind • Ruby • Ruby on
            Rails • Docker • AWS • CI/CD • Git • GitHub
          </motion.p>
          <motion.p
            animate={{
              x: [-500, 0],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-white/10 leading-tight text-5xl whitespace-nowrap font-bold"
          >
            Strapi • WordPress • Framer • Web3 • Vue • Postgres • WebSockets,
            eCommerce • SaaS • AI
          </motion.p>
          <motion.span
            initial={{ opacity: 1, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{
              duration: 20,
              delay: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-white/80 h-[1px] my-2 flex"
          />
        </motion.div>
      </main>
      <div className="absolute z-10 inset-0 w-full h-full opacity-10">
        <Waves lineColor="purple" backgroundColor="transparent" />
      </div>

      <footer className="bg-black py-8 px-10">
        <div className="container mx-auto px-4">
          <div className="mt-6 text-center text-sm text-gray-500">
            © 2011 - 2025 Luiz Almeida a.k.a lhas.io. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
