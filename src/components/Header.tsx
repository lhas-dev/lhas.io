import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function Header({ currentPath = "/" }: { currentPath?: string }) {
  const isActive = (path: string) =>
    path === "/" ? currentPath === "/" : currentPath.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#060606]/90 backdrop-blur-xl">
      {/* Same container as the page sections, so the header lines up with the content. */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        <a href="/" className="group flex items-baseline gap-3 min-w-0" aria-label={`${site.name}, home`}>
          <span className="text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap font-[family-name:var(--font-heading)]">
            {site.name}
          </span>
          <span className="hidden md:inline text-sm text-muted-foreground truncate group-hover:text-foreground/80 transition-colors">
            {site.role}
          </span>
        </a>

        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2 -mr-3">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                  active
                    ? "text-foreground after:absolute after:left-3 after:right-3 after:-bottom-[13px] after:h-px after:bg-gradient-to-r after:from-cyan-400 after:to-violet-400"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
