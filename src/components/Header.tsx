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

    if (isActive(path)) {
      return `${baseClasses} bg-white text-black`;
    }

    return `${baseClasses} text-muted-foreground hover:bg-white hover:text-black`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-xl bg-gradient-to-b from-neutral-900/90 to-black/90 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-2">
        <div className="flex flex-col md:flex-row py-2 gap-4 items-center md:gap-20">
          <a
            href="/"
            className="text-3xl lg:ml-40 font-bold hover:text-primary/80 transition-colors flex flex-col md:flex-row items-center justify-center md:items-end gap-1"
          >
            Luiz Almeida{" "}
            <span className="font-light text-lg lg:text-lg">
              Front-end Engineer
            </span>
          </a>

          <nav className="flex items-center gap-4 mb-2 md:mb-0 sm:gap-6">
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
