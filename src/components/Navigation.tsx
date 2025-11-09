import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Navigation() {
  const links = [
    { href: 'https://github.com/lhas-dev', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/luizhrqas/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/lhas.js/', icon: Instagram, label: 'Instagram' },
    { href: 'https://wa.me/5551991031355', icon: WhatsAppIcon, label: 'WhatsApp' },
    { href: 'mailto:luizhrqas@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://lhas-io.vercel.app/resume-luiz-almeida.pdf', icon: Download, label: 'Resume', download: true },
  ];

  // Base delay for icons to appear after Hero animations + 0.3s buffer
  // Hero completes at ~5.44s, then 0.3s delay = 5.74s
  const baseDelay = 5.74;
  const staggerDelay = 0.1;

  return (
    <TooltipProvider delayDuration={200}>
      <nav className="flex justify-center gap-4">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <Tooltip key={link.label}>
              <TooltipTrigger asChild>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: baseDelay + index * staggerDelay,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary hover:scale-125 transition-all duration-300 ease-in-out active:scale-95"
                  aria-label={link.label}
                  {...(link.download && { download: true })}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </nav>
    </TooltipProvider>
  );
}
