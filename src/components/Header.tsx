import { useState, useEffect } from "react";

export function Header() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    console.log("ae", window.location.pathname);
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  const getLinkClassName = (path: string) => {
    const baseClasses =
      "text-sm sm:text-base px-2 py-1 rounded-md transition-all flex items-center";

    console.log("path", isActive(path));
    console.log("isActive", isActive(path));

    if (isActive(path)) {
      return `${baseClasses} bg-white text-black`;
    }

    return `${baseClasses} text-muted-foreground hover:bg-white hover:text-black`;
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 backdrop-blur-xl bg-gradient-to-b from-neutral-900/90 to-black/90 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          <a
            href="/"
            className="text-lg sm:text-xl font-bold hover:text-primary/80 transition-colors"
          >
            Luiz Almeida
          </a>

          <nav className="flex items-center gap-4 sm:gap-6">
            <a href="/" className={getLinkClassName("/")}>
              Home
            </a>
            <a href="/projects" className={getLinkClassName("/projects")}>
              Projects
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
