"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative w-full">
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bg2.mp4"
        autoPlay
        loop
        muted
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-80"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="container mx-auto relative z-10 flex pt-5 items-center justify-center gap-4"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75, delay: 1.5 }}
        >
          <motion.img
            whileHover={{ rotateX: 10, rotateY: -20, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{ perspective: 1000 }}
            src="/pixel.png"
            alt="Pixel Art"
            className="w-24"
          />
        </motion.div>

        <div>
          <h1 className="text-white text-xl tracking-wide font-black uppercase">
            Luiz Almeida
          </h1>
          <h2 className="text-white text-xl tracking-wide font-light uppercase">
            Front-end Engineer
          </h2>
        </div>
      </motion.div>

      <motion.div className="container px-10 py-5 mx-auto relative z-10 pt-5 flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-white"
        >
          <h1 className="text-white text-xl tracking-wide font-black uppercase">
            About Me
          </h1>
          <p className="text-lg text-justify mt-4">
            I&apos;m a Senior Front-End Engineer with 14 years of experience in
            web development, specializing in building high-quality software
            using React and Ruby on Rails.
          </p>
          <p className="text-lg text-justify mt-4">
            Outside of coding, I&apos;m a dedicated father to my two-year-old
            daughter, Rubi, and a passionate practitioner of jiu-jitsu, holding
            a purple belt. When I&apos;m not immersed in technology, I enjoy
            gardening and spending meaningful time with my family.
          </p>
          <h1 className="text-white text-xl tracking-wide font-black uppercase mt-6">
            My Journey
          </h1>
          <p className="text-lg text-justify mt-4">
            My programming journey began with a passion project: creating a
            custom Open Tibia Server for my friends and me, driven by a love for
            RPGs. I dove into scripting with Lua and C++, which sparked my
            interest in building websites and eventually led me into web
            development.
          </p>
          <h1 className="text-white text-xl tracking-wide font-black uppercase mt-6">
            About My Career
          </h1>
          <p className="text-lg text-justify mt-4">
            Over the years, I&apos;ve had the opportunity to work with a mix of
            innovative startups and large corporations, contributing to projects
            for companies like DI.FM, Renner SA, Pepsi, and mLabs.
          </p>
          <p className="text-lg text-justify mt-4">
            In 2018, I joined a crypto startup during the Bitcoin boom, where I
            developed solutions using web3.js to integrate the blockchain
            technology into the web.
          </p>
          <p className="text-lg text-justify mt-4">
            Currently, I&apos;m working on an AI project called cultiva.ai,
            which empowers Cannabis patients to set up their own grow systems
            with personalized guidance and resources.
          </p>
          <p className="text-lg text-justify mt-4">
            I&apos;m passionate about delivering software to the web, knowing
            that it will be used by millions worldwide. There&apos;s nothing
            more rewarding as a developer than witnessing my work making a
            difference for all the people around the world.
          </p>
          <p className="text-lg text-justify mt-4">
            I&apos;m a lifelong learner, always on the lookout for new
            challenges and opportunities to expand my skills.
          </p>
          <h1 className="text-white text-xl tracking-wide font-black uppercase mt-6">
            Contact Me
          </h1>
          <div className="flex gap-6 mt-4 mb-4">
            <motion.a
              href="https://github.com/lhas-dev"
              target="_blank"
              className="text-white hover:text-gray-400 text-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/luizhrqas/"
              target="_blank"
              className="text-white hover:text-blue-400 text-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/lhas.js/"
              target="_blank"
              className="text-white hover:text-pink-400 text-2xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
