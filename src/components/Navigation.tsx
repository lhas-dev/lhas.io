import { Github, Linkedin, Instagram, Mail, Download } from 'lucide-react';

export function Navigation() {
  const links = [
    { href: 'https://github.com/lhas-dev', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/luizhrqas/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/lhas.js/', icon: Instagram, label: 'Instagram' },
    { href: 'mailto:luizhrqas@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://lhas-io.vercel.app/resume-luiz-almeida.pdf', icon: Download, label: 'Resume', download: true },
  ];

  return (
    <nav className="flex justify-center gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label={link.label}
            {...(link.download && { download: true })}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </nav>
  );
}
