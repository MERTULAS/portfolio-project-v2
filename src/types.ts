export interface IProject {
  title: string;
  description: string;
  images: string[];
  link: string;
  tags: string[];
  slug?: string;
  seoDescription?: string;
  datePublished?: string;
  projectType?: string;
  technologies?: string[];
};
