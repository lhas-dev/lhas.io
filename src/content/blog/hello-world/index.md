---
title: "Hello World: Building My Blog with Astro"
description: "A look at how I built this blog using Astro's content collections, React components, and Framer Motion animations."
date: 2026-02-20
tags: ["astro", "react", "typescript", "blog"]
featured: true
draft: false
---

## Why Astro?

After years of working with various frameworks, I've settled on **Astro** for my personal site. The combination of static-first architecture with islands of interactivity is exactly what a portfolio and blog needs.

### Content Collections

Astro 5.x introduced a powerful content collections API that makes managing blog posts a breeze. Each post is a markdown file with typed frontmatter, and images can be co-located right next to the markdown:

```
src/content/blog/
  hello-world/
    index.md
    cover.jpg
    diagram.png
```

### React Islands

While the pages are statically generated, interactive components like the featured carousel and animated cards use React with Framer Motion. Astro's `client:idle` directive ensures these components only hydrate when the browser is idle, keeping the initial page load fast.

## What's Next

I'll be writing about:

- **Front-end architecture** patterns I've learned over 10+ years
- **React & TypeScript** tips and best practices
- **Performance optimization** techniques for modern web apps
- **Mobile development** with React Native

Stay tuned for more posts!
