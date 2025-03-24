import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MERT ULAS - Projects',
  description: 'My Projects',
  keywords: 'projects, web development, software projects, react, next.js, typescript, application development',
  openGraph: {
    title: 'MERT ULAS - Projects',
    description: 'My Projects',
    url: 'https://mertulas.dev/projects',
    type: 'website',
  },
};

const ProjectsPage = () => {
  return (
    <div>ProjectsPage</div>
  )
}

export default ProjectsPage;