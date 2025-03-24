import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mertulas.dev';
  
  const staticPages = [
    '',
    '/about',
    '/projects',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projects = [
    { slug: 'project-1', lastModified: new Date('2023-09-01') },
    { slug: 'project-2', lastModified: new Date('2023-10-15') },
    { slug: 'project-3', lastModified: new Date('2023-12-20') },
  ].map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projects];
} 