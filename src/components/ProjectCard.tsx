import * as motion from 'motion/react-client';
import type { Project } from '@/types/project';

interface Props {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.a
      href={`/projects/${project.slug}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="group block"
    >
      <article className="overflow-hidden rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 border border-border/40 hover:border-border/60">
        {/* Thumbnail */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Fallback to gradient if image doesn't exist
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-primary/90 transition-colors">
            {project.title}
          </h3>
          <p className="text-base sm:text-lg font-light text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded bg-secondary/60 text-muted-foreground font-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </motion.a>
  );
}
