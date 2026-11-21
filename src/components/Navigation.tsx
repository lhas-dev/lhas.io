import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  DownloadIcon,
} from "@/components/icons/SocialIcons";
import { site } from "@/data/site";

export function Navigation() {
  const links = [
    { href: site.github, icon: GithubIcon, label: "GitHub" },
    { href: site.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: `mailto:${site.email}`, icon: MailIcon, label: "Email" },
    { href: site.resume, icon: DownloadIcon, label: "Resume (PDF)", download: true },
  ];

  return (
    <nav aria-label="Contact links" className="relative flex justify-center gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        const external = link.href.startsWith("http");
        return (
          <a
            key={link.label}
            href={link.href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            {...(link.download && { download: "Luiz-Almeida-Resume.pdf" })}
            className="p-2 relative z-10 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary hover:scale-110 transition-all duration-300 ease-in-out active:scale-95"
            aria-label={link.label}
            data-balloon-pos="up"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </nav>
  );
}
