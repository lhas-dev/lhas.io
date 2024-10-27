"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <motion.video
        className="absolute top-0 left-0 w-full min-h-full object-cover"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full min-h-full opacity-80"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 250, 0.5), rgba(0, 0, 0, 0.9))",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 flex pt-5 items-center gap-4 justify-center"
      >
        <img src="/logo1.svg" alt="Logo" className="w-32 h-32 mb-4" />
        
        <div><h1 className="text-white text-xl tracking-wide font-black uppercase">
          Luiz Almeida
        </h1>
        <h2 className="text-white text-xl tracking-wide font-light uppercase">
          Front-end Engineer
        </h2></div>
      </motion.div>

      <motion.div className="relative z-10 pt-5 flex flex-col md:flex-row items-center justify-center gap-9">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.75, delay: 1.5 }}
        >
          <motion.img
            whileHover={{ rotateX: 10, rotateY: -40, scale: 1.5 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{ perspective: 1000 }}
            src="/pixel.png"
            alt="Pixel Art"
            className="w-24"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-white max-w-lg px-10"
        >
          <p className="text-lg">
            a.k.a.{" "}
            <motion.a
              whileHover={{ scale: 1.05, fontWeight: "bold" }}
              transition={{ type: "spring", stiffness: 200 }}
              href="https://github.com/lhas-dev"
              className="underline inline-block"
              target="_blank"
            >
              @lhas-dev
            </motion.a>
            . I am a <strong>Senior Front-end Engineer</strong> with 14 years of
            experience in web development.
            <br />
            <br />I (usually) build softwares using{" "}
            <motion.a
              whileHover={{ scale: 1.05, fontWeight: "bold" }}
              transition={{ type: "spring", stiffness: 200 }}
              href="https://github.com/lhas-dev"
              className="underline inline-block"
              target="_blank"
            >
              React
            </motion.a>{" "}
            and{" "}
            <motion.a
              whileHover={{ scale: 1.05, fontWeight: "bold" }}
              transition={{ type: "spring", stiffness: 200 }}
              href="https://github.com/lhas-dev"
              className="underline inline-block"
              target="_blank"
            >
              Ruby on Rails
            </motion.a>
            .<br />
            <br />I have a 2-year-old daughter named Rubi. I also love
            practicing jiu-jitsu (purple belt), growing plants or having a
            quality time with my family when I&apos;m not programming.
            <br />
            <br />I started on programming when I decided to create one custom
            {' '}<motion.a
              whileHover={{ scale: 1.05, fontWeight: "bold" }}
              transition={{ type: "spring", stiffness: 200 }}
              href="https://github.com/opentibia/server"
              className="underline inline-block"
              target="_blank"
            >
              Open Tibia Server
            </motion.a> for me and my friends (like any teenage RPG fan would). <br /><br />After customizing some Lua and C++ scripts as a good <em>script kiddie</em>, I decided to start creating websites.<br /><br />
            Since then, I worked with some cool startups and corporations like like DI.FM, Renner SA, Pepsi, mLabs and others.
            <br /><br />I really enjoy shipping softwares to the internet, where a million people will use it. It is very satisfacting for me as developer see some software I helped being used by some random people.<br /><br />I love to learn new things and I&apos;m always looking for new
            challenges.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
