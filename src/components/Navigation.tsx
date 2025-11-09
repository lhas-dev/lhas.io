import * as motion from "motion/react-client";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  DownloadIcon,
} from "@/components/icons/SocialIcons";

export function Navigation({ delay = 0 }: { delay?: number }) {
  const links = [
    { href: "https://github.com/lhas-dev", icon: GithubIcon, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/luizhrqas/",
      icon: LinkedinIcon,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/lhas.js/",
      icon: InstagramIcon,
      label: "Instagram",
    },
    {
      href: "https://wa.me/5551991031355",
      icon: WhatsAppIcon,
      label: "WhatsApp",
    },
    { href: "mailto:luizhrqas@gmail.com", icon: MailIcon, label: "Email" },
    {
      href: "https://lhas-io.vercel.app/resume-luiz-almeida.pdf",
      icon: DownloadIcon,
      label: "Resume",
      download: true,
    },
  ];

  // Base delay for icons to appear after Hero animations + 0.3s buffer
  // Hero completes at ~5.44s, then 0.3s delay = 5.74s
  const baseDelay = 5.74;
  const staggerDelay = 0.1;

  return (
    <nav className="flex justify-center gap-4">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: !!delay ? delay : baseDelay + index * staggerDelay,
              duration: 0.5,
              ease: "easeOut",
            }}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary hover:scale-125 transition-all duration-300 ease-in-out active:scale-95"
            aria-label={link.label}
            data-balloon-pos="up"
            {...(link.download && { download: true })}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </nav>
  );
}
