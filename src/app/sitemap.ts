import { MetadataRoute } from 'next';

const projectsData = [
  {
    title: 'Learned',
    slug: 'learned',
    lastModified: new Date('2025-03-28')
  },
  {
    title: 'Raycaster Engine',
    slug: 'raycaster-engine',
    lastModified: new Date('2025-03-28')
  },
  {
    title: 'Direactree',
    slug: 'direactree',
    lastModified: new Date('2025-03-28')
  },
  {
    title: 'Revelation Performance',
    slug: 'revelation-performance',
    lastModified: new Date('2025-03-28')
  },
  {
    title: 'War in Space 2D',
    slug: 'war-in-space-2d',
    lastModified: new Date('2025-03-28')
  }
];

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

  const projects = projectsData.map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projects];
} 