export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  technologies?: string[];
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}
