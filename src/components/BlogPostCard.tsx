import * as motion from 'motion/react-client';

interface Props {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  coverSrc?: string;
  index?: number;
}

export function BlogPostCard({ title, description, date, slug, tags, coverSrc, index = 0 }: Props) {
  return (
    <motion.a
      href={`/blog/${slug}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="group block"
    >
      <article className="overflow-hidden rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 border border-border/40 hover:border-border/60 h-full flex flex-col">
        {/* Cover Image */}
        {coverSrc && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
            <img
              src={coverSrc}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-3 flex-1 flex flex-col">
          <time className="text-xs text-muted-foreground">{date}</time>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary/90 transition-colors">
            {title}
          </h3>
          <p className="text-sm sm:text-base font-light text-muted-foreground leading-relaxed flex-1">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-secondary/60 text-muted-foreground font-light"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </motion.a>
  );
}
