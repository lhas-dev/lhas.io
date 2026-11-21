import type { Project } from '@/types/project';

interface Props {
  project: Project;
  headingLevel?: 'h2' | 'h3';
}

// Static card (no hydration needed). Hover effects are CSS-only.
export function ProjectCard({ project, headingLevel = 'h2' }: Props) {
  const Heading = headingLevel;

  return (
    <a href={`/projects/${project.slug}`} className="group block fade-up">
      <article className="h-full overflow-hidden rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 border border-border/60 hover:border-border">
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
          <img
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            loading="lazy" decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6 space-y-3">
          <Heading className="text-2xl font-bold tracking-tight group-hover:text-primary/90 transition-colors">
            {project.title}
          </Heading>
          <p className="text-base font-light text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-2" aria-label="Technologies">
              {project.technologies.slice(0, 5).map((tech) => (
                <li
                  key={tech}
                  className="text-xs px-2 py-1 rounded bg-secondary/70 text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </a>
  );
}
