import { BJJBelt } from "@/components/BJJBelt";
import { motion } from "framer-motion";

export function Hero() {
  const text1 = "Crafting ";
  const text2 = "Digital Experiences";

  // Calculate total duration for typing animation
  const charDelay = 0.08; // delay between each character
  const text1Duration = text1.length * charDelay;
  const totalTypingDuration = (text1.length + text2.length) * charDelay;

  // Animation timing: Header ends at 0.5s, then 0.3s delay, Hero starts at 0.8s
  const heroStartDelay = 0.8;
  const typingStartDelay = 1.4; // Avatar appears at 0.8s, takes 0.6s = 1.4s

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Simple linear gradient from gray to black */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-black -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Avatar with BJJ Belt easter egg - animated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: heroStartDelay, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <img
              src="https://lhas-io.vercel.app/me3.jpg"
              alt="Luiz Almeida"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover shadow-2xl"
            />
            <BJJBelt />
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 max-w-2xl">
            {/* Main headline - letter by letter animation */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
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
                      delay: typingStartDelay + text1Duration + index * charDelay,
                      duration: 0.1,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
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
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground leading-relaxed"
            >
              Specialist Front-end Engineer with 10+ years building scalable web
              and mobile applications
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
              className="text-base sm:text-lg md:text-xl font-light text-muted-foreground/80"
            >
              LATAM 🇧🇷 • fast-paced developer, who enjoys crafting exceptional
              digital experiences worldwide
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
