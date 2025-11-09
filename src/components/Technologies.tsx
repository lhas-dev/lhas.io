export function Technologies() {
  const technologies = [
    'React',
    'TypeScript',
    'Node.js',
    'Next.js',
    'Tailwind',
    'Ruby',
    'Ruby on Rails',
    'Docker',
    'AWS',
    'CI/CD',
    'Git',
    'GitHub',
    'Strapi',
    'WordPress',
    'Framer',
    'Web3',
    'Vue',
    'Postgres',
    'WebSockets',
    'eCommerce',
    'SaaS',
    'AI',
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">Technologies</h2>
      <p className="text-center text-muted-foreground leading-relaxed">
        {technologies.join(' • ')}
      </p>
    </section>
  );
}
