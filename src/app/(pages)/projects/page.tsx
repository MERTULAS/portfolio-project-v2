import React from 'react'
import { Metadata } from 'next';
import "./projectsPage.scss";
import ProjectCard from '@/components/ProjectCard';
import { IProject } from '@/types';
import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'MERT ULAS - Projects | Web Developer Portfolio',
  description: 'Explore Mert Ulas\'s software development projects including React, Next.js, TypeScript, Python and more. Machine learning, web applications, and game development work.',
  keywords: 'projects, software development, web development, react, next.js, typescript, python, machine learning, application development, mert ulas',
  openGraph: {
    title: 'MERT ULAS - Projects | Web Developer Portfolio',
    description: 'Explore Mert Ulas\'s software development projects including React, Next.js, TypeScript, Python and more. Machine learning, web applications, and game development work.',
    url: 'https://mertulas.dev/projects',
    type: 'website',
    images: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MERT ULAS - Projects',
    description: 'Mert Ulas\'s software development projects',
    images: [],
  },
  alternates: {
    canonical: 'https://mertulas.dev/projects',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ProjectsPage = () => {

  const projects: IProject[] = [
    {
      title: 'Learned',
      description: 'Large Scale Machine/Deep Learning library for Python',
      images: ['/assets/img/projects/learned.png'],
      link: 'https://github.com/MERTULAS/learned',
      tags: ['Python', 'Machine Learning', 'Deep Learning', 'Neural Networks'],
      slug: 'learned',
      seoDescription: 'Learned is a large-scale machine learning and deep learning library for Python providing comprehensive tools for building and training neural networks.',
      datePublished: '2025-03-28',
      projectType: 'library',
      technologies: ['Python', 'NumPy']
    },
    {
      title: 'Raycaster Engine',
      description: 'Raycaster Engine in JavaScript',
      images: ['/assets/img/projects/raycaster1.gif', '/assets/img/projects/raycaster2.gif'],
      link: 'https://github.com/MERTULAS/RayCastingEngineJS',
      tags: ['JavaScript', 'Raycasting', '3D Game Engine', 'Game Development', 'Computer Graphics'],
      slug: 'raycaster-engine',
      seoDescription: 'A Raycaster Engine developed with JavaScript, used to create classic FPS-style graphics rendering.',
      datePublished: '2025-03-28',
      projectType: 'game-engine',
      technologies: ['JavaScript', 'Canvas API']
    },
    {
      title: 'War in Space 2D',
      description: 'A 2D space combat game developed with Pygame, featuring background effects and shooting stars created with particles.',
      images: ['/assets/img/projects/war-in-space1.png', '/assets/img/projects/war-in-space2.png', '/assets/img/projects/war-in-space3.png', '/assets/img/projects/war-in-space4.png', '/assets/img/projects/war-in-space5.png'],
      link: 'https://github.com/MERTULAS/War_in_Space_2D_Pygame',
      tags: ['Python', 'Pygame', 'Game Development'],
      slug: 'war-in-space-2d',
      seoDescription: 'A 2D space combat game developed with Pygame, featuring background effects and shooting stars created with particles.',
      datePublished: '2025-03-28',
      projectType: 'game',
      technologies: ['Python', 'Pygame']
    },
    {
      title: 'Direactree',
      description: 'A React UI component npm package for creating and managing directories in a tree structure',
      images: ['/assets/img/projects/direactree.png'],
      link: 'https://direactree-documentation.vercel.app/',
      tags: ['React', 'UI Component', 'Tree Structure', 'File System'],
      slug: 'direactree',
      seoDescription: 'Direactree is a React UI component package for creating and managing directories in a tree structure, ideal for file system-like interfaces.',
      datePublished: '2025-03-28',
      projectType: 'ui-component',
      technologies: ['React', 'TypeScript', 'npm']
    },
    {
      title: 'Revelation Performance',
      description: 'A corporate full-stack website built for Revelation Performance, including an admin panel, backend service, and public website',
      images: ['/assets/img/projects/revelation-performance1.gif', '/assets/img/projects/revelation-performance6.png', '/assets/img/projects/revelation-performance7.png', '/assets/img/projects/revelation-performance5.png', '/assets/img/projects/revelation-performance4.png'],
      link: 'https://www.revelationperformance.com/',
      tags: ['Next.js', 'TypeScript','Express', 'MongoDB', 'SCSS', 'Admin Panel', 'Backend Service'],
      slug: 'revelation-performance',
      seoDescription: 'Corporate full-stack website developed for Revelation Performance, a company that provides chip tuning services for vehicles. Includes an admin panel, backend service, and public website.',
      datePublished: '2025-03-28',
      projectType: 'full-stack website',
      technologies: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'SCSS', 'Responsive Design']
    }
  ];

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareSourceCode",
        "name": project.title,
        "description": project.seoDescription || project.description,
        "codeRepository": project.link,
        "programmingLanguage": {
          "@type": "ComputerLanguage", 
          "name": project.technologies ? project.technologies[0] : project.tags[0]
        },
        "datePublished": project.datePublished,
        "image": project.images[0],
        "author": {
          "@type": "Person",
          "name": "Mert Ulaş",
          "url": "https://mertulas.dev"
        },
        "url": `${project.link}`
      }
    })),
    "numberOfItems": projects.length
  };
  
  return (
    <main className="projects-page">
      <Script id="project-list-schema" type="application/ld+json">
        {JSON.stringify(projectListSchema)}
      </Script>
      <header>
        <h1>Projects</h1>
      </header>
      <section className="projects-container" aria-label="Projects list">
        {projects.map((project, index) => (
          <article key={index} className="project">
            <ProjectCard project={project} />
          </article>
        ))}
      </section>
      <footer className="projects-page-footer">
        <p>
          I'm always working on new projects. If you want to see all my projects, you can visit my GitHub profile.
        </p>
        <Link href="https://github.com/MERTULAS" title="My GitHub Profile" aria-label="Go to my GitHub profile">
          <GithubOutlined className='github-icon' /> All Projects
        </Link>
      </footer>
    </main>
  )
}

export default ProjectsPage;