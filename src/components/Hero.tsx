import { BJJBelt } from "@/components/BJJBelt";
import * as motion from "motion/react-client";
import { CodeIcon } from "@/components/icons/SocialIcons";
import { useState, useEffect } from "react";
import { Badges } from "@/components/Badges";

export function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const text1 = "Crafting ";
  const text2 = "Digital Experiences";

  // Calculate total duration for typing animation
  const charDelay = 0.08; // delay between each character
  const text1Duration = text1.length * charDelay;
  const totalTypingDuration = (text1.length + text2.length) * charDelay;

  // Animation timing: Header ends at 0.5s, then 0.3s delay, Hero starts at 0.8s
  const heroStartDelay = 0.8;
  const typingStartDelay = 4; // Avatar appears at 0.8s, takes 0.6s = 1.4s

  return (
    <section className="relative lg:min-h-[100vh] flex items-center justify-center px-4 pt-6 pb-30 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background matching video color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060606] to-black -z-10" />

      {/* Large developer icon background */}
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        className="absolute top-[0%] left-[25%] lg:w-[100%] lg:h-[100%] inset-0 flex items-center justify-center -z-10"
      >
        <CodeIcon className="w-full h-full text-white opacity-[0.03]" />
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center gap-12 lg:gap-16">
          {/* Avatar with animated logo and BJJ Belt easter egg */}
          <div className="relative flex flex-col items-center gap-3">
            <video
              src="/animated-logo.mp4"
              autoPlay
              muted
              playsInline
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-2xl shadow-2xl"
            />
            <BJJBelt />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 max-w-2xl">
            {/* Main headline - plain text on server, animated on client */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] [text-shadow:0_4px_12px_rgba(0,0,0,0.4)]">
              <>
                {text1.split("").map((char, index) => (
                  <motion.span
                    key={`text1-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: typingStartDelay + index * charDelay,
                      duration: 0.1,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="text-primary/90">
                  {text2.split("").map((char, index) => (
                    <motion.span
                      key={`text2-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay:
                          typingStartDelay + text1Duration + index * charDelay,
                        duration: 0.1,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </>
            </h1>

            {/* Subheading - fade in after typing completes */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: typingStartDelay + totalTypingDuration + 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]"
            >
              Senior/Specialist Front-end Engineer with{" "}
              <strong>10+ years</strong> building scalable web and mobile
              applications
            </motion.p>

            {/* Description - fade in after subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: typingStartDelay + totalTypingDuration + 0.8,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="text-base sm:text-lg md:text-xl font-light text-muted-foreground/80 [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]"
            >
              LATAM 🇧🇷 • Fast-paced developer, who enjoys crafting exceptional
              digital experiences worldwide •{" "}
              <em className="opacity-40 font-light not-italic">
                React, React Native, Ruby on Rails, TypeScript
              </em>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
