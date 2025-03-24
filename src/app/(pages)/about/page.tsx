import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MERT ULAS - About',
  description: 'About me',
  keywords: 'about, web development, software projects, react, next.js, typescript, application development',
  openGraph: {
    title: 'MERT ULAS - About',
    description: 'About me',
    url: 'https://mertulas.dev/about',
    type: 'website',
  },
};

const AboutPage = () => {
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage;