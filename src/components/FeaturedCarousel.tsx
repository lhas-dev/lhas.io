import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FeaturedPost {
  title: string;
  description: string;
  slug: string;
  coverSrc?: string;
}

interface Props {
  posts: FeaturedPost[];
}

export function FeaturedCarousel({ posts }: Props) {
  const [current, setCurrent] = useState(0);

  if (posts.length === 0) return null;

  const prev = () => setCurrent((c) => (c === 0 ? posts.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === posts.length - 1 ? 0 : c + 1));

  const post = posts[current];

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border/40 bg-secondary/20">
      <a href={`/blog/${post.slug}`} className="block">
        <div className="relative h-72 sm:h-96 bg-gradient-to-br from-neutral-800 to-neutral-900">
          {/* Cover image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              {post.coverSrc && (
                <img
                  src={post.coverSrc}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">
                  Featured
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-base font-light text-muted-foreground max-w-2xl">
                  {post.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </a>

      {/* Navigation arrows */}
      {posts.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground hover:bg-black/70 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-border/40 flex items-center justify-center text-foreground hover:bg-black/70 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 right-6 sm:right-8 flex gap-1.5">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  i === current ? 'bg-foreground w-4' : 'bg-foreground/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
