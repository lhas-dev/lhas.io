import { BJJBelt } from "@/components/BJJBelt";
import {
  CodeIcon,
  DownloadIcon,
  LinkedinIcon,
  MailIcon,
} from "@/components/icons/SocialIcons";
import { site } from "@/data/site";

// Rendered as static HTML (no client directive): content is visible on first paint.
// Entrance motion is pure CSS (.fade-up in global.css) and disabled for prefers-reduced-motion.
export function Hero() {
  const fade = (delay: number) => ({ style: { animationDelay: `${delay}ms` } });

  return (
    <section className="relative flex items-center justify-center px-4 pt-8 pb-16 sm:px-6 sm:pt-12 lg:px-8 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#070707] -z-10" />

      <div
        aria-hidden="true"
        className="absolute top-[0%] left-[25%] lg:w-[100%] lg:h-[100%] inset-0 flex items-center justify-center -z-10"
      >
        <CodeIcon className="w-full h-full text-white opacity-[0.03]" />
      </div>

      <div className="max-w-5xl mx-auto w-full sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:items-start">
          <div className="text-center lg:text-left space-y-6 max-w-3xl">
            <p {...fade(0)} className="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                {site.availability}
              </span>
            </p>

            <h1
              {...fade(80)}
              className="fade-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] [text-shadow:0_4px_12px_rgba(0,0,0,0.4)]"
            >
              {site.role}
            </h1>

            <p
              {...fade(160)}
              className="fade-up text-xl sm:text-2xl font-light text-foreground/90 leading-snug"
            >
              {site.stack.join(" · ")}
            </p>

            <p
              {...fade(240)}
              className="fade-up text-base sm:text-lg font-light text-muted-foreground leading-relaxed"
            >
              {site.headline} Most recently at{" "}
              <strong className="font-semibold text-foreground">Housecall Pro</strong>.
            </p>

            <div
              {...fade(320)}
              className="fade-up flex flex-wrap justify-center lg:justify-start gap-3 pt-2"
            >
              <a
                href={site.resume}
                download="Luiz-Almeida-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors"
              >
                <DownloadIcon className="w-4 h-4" />
                Download resume
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 border border-border/60 font-medium transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 border border-border/60 font-medium transition-colors"
              >
                <MailIcon className="w-4 h-4" />
                Get in touch
              </a>
            </div>

            <div
              {...fade(400)}
              className="fade-up flex items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground/70"
            >
              <span>{site.location}</span>
              <BJJBelt />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
