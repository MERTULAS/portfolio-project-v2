import React from 'react'
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'MERT ULAS - Contact',
  description: 'Contact me for your web development needs. I specialize in creating fast, responsive and modern web applications.',
  keywords: 'contact, web development, software projects, react, next.js, typescript, application development, hire developer',
  openGraph: {
    title: 'MERT ULAS - Contact',
    description: 'Get in touch with Mert Ulaş for your next web project',
    url: 'https://mertulas.dev/contact',
    type: 'website',
  },
};

const ContactPage = () => {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default ContactPage;