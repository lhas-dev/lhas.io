import { BJJBelt } from "@/components/BJJBelt";
import {
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
    <section className="relative pt-8 pb-16 sm:pt-12 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#070707] -z-10" />

      {/* Psychedelic code-flow illustration, faded out toward the text and the edges so it stays discreet. */}
      <div
        aria-hidden="true"
        className="hero-code-bg pointer-events-none absolute inset-0 -z-10 bg-[url('/images/hero-code-bg.svg')] bg-cover bg-center opacity-[0.16]"
      />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="text-left space-y-6 max-w-3xl">
            <p {...fade(0)} className="fade-up">
              <a
                href="#work-with-me"
                className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/50 transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                {site.availability}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </p>

            <h1
              {...fade(80)}
              className="fade-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] [text-shadow:0_4px_12px_rgba(0,0,0,0.4)]"
            >
              {/* Break before "AI Engineer" so the title reads "Senior Full Stack / AI Engineer". */}
              {site.role.replace(/ AI Engineer$/, "")}
              {site.role.endsWith(" AI Engineer") && (
                <>
                  <br />
                  AI Engineer
                </>
              )}
            </h1>

            <p
              {...fade(160)}
              className="fade-up text-xl sm:text-2xl font-light text-foreground/90 leading-snug"
            >
              {site.stack.join(" · ")}
            </p>

            <div
              {...fade(240)}
              className="fade-up space-y-3 text-base sm:text-lg font-light text-muted-foreground leading-relaxed"
            >
              {site.headline.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
              Most recently at{" "}
              <a
                href="https://www.housecallpro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="psy-link font-semibold text-foreground underline underline-offset-4"
              >
                Housecall Pro
              </a>
              .
              </p>
            </div>

            <div
              {...fade(320)}
              className="fade-up flex flex-wrap justify-start gap-3 pt-2"
            >
              <a
                href={site.resume}
                download="Luiz-Almeida-Resume.pdf"
                className="psy-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-semibold"
              >
                <DownloadIcon className="w-4 h-4" />
                Download resume
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="psy-card inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 border border-border/60 font-medium transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${site.email}`}
                className="psy-card inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 border border-border/60 font-medium transition-colors"
              >
                <MailIcon className="w-4 h-4" />
                Get in touch
              </a>
            </div>

            <div
              {...fade(400)}
              className="fade-up flex flex-wrap items-center justify-start gap-x-3 gap-y-1 text-sm text-muted-foreground/70"
            >
              <span>{site.location}</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span
                tabIndex={0}
                aria-label={`${site.timezone}: ${site.timezoneNote}`}
                data-balloon-pos="up"
                className="cursor-help underline decoration-dotted decoration-muted-foreground/40 underline-offset-4 hover:text-muted-foreground focus-visible:outline-none focus-visible:text-foreground"
              >
                {site.timezone}
              </span>
              <BJJBelt />
            </div>
          </div>

          {/* Profile photo: small above the text on mobile, large beside it on desktop. */}
          <div {...fade(120)} className="fade-up psy-ring relative shrink-0 rounded-full">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full bg-gradient-to-br from-emerald-400/25 via-white/5 to-transparent blur-xl"
            />
            <picture>
              <source srcSet="/images/luiz.webp" type="image/webp" />
              <img
                src="/images/luiz.jpg"
                alt={`Portrait of ${site.name}`}
                width={400}
                height={400}
                fetchPriority="high"
                decoding="async"
                className="relative h-24 w-24 sm:h-28 sm:w-28 lg:h-64 lg:w-64 rounded-full object-cover ring-1 ring-white/15 shadow-2xl shadow-black/60"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
