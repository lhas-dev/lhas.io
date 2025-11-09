export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-xl bg-background/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <a href="/" className="text-lg sm:text-xl font-bold hover:text-primary/80 transition-colors">
            Luiz Almeida
          </a>

          <nav className="flex items-center gap-4 sm:gap-6">
            <a
              href="/"
              className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            >
              Home
            </a>
            <a
              href="/projects"
              className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors min-h-[44px] flex items-center"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
