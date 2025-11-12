import { motion } from "motion/react";
import { ReactIcon } from "./icons/ReactIcon";
import { RubyIcon } from "./icons/RubyIcon";

export const Badges = () => {
  const badges = [
    {
      id: "experience",
      content: "10+",
      subtitle: "years of exp.",
      bgColor: "bg-[#22c55e]",
      textColor: "text-white",
      tooltip: "10+ years of experience",
      isText: true,
    },
    {
      id: "react",
      icon: ReactIcon,
      bgColor: "bg-[#61dafb]",
      textColor: "text-white",
      tooltip: "React Expert",
      isText: false,
    },
    {
      id: "ruby",
      icon: RubyIcon,
      bgColor: "bg-white",
      textColor: "text-[#cc342d]",
      tooltip: "Ruby Lover",
      isText: false,
    },
  ];

  return (
    <motion.div
      className="flex gap-4 justify-center lg:justify-start mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 5, duration: 0.5 }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.id}
          className={`w-16 h-16 ${badge.bgColor} rounded-lg flex items-center justify-center cursor-pointer`}
          aria-label={badge.tooltip}
          data-balloon-pos="up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 5 + index * 0.15,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {badge.isText ? (
            <div className="flex flex-col items-center justify-center">
              <span
                className={`text-2xl font-bold ${badge.textColor} leading-tight`}
              >
                {badge.content}
              </span>
              {badge.subtitle && (
                <span
                  className={`text-[0.75rem] ${badge.textColor} font-normal leading-tight`}
                >
                  {badge.subtitle}
                </span>
              )}
            </div>
          ) : (
            badge.icon && (
              <badge.icon className={`w-10 h-10 ${badge.textColor}`} />
            )
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
