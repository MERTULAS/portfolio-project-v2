import React from 'react'
import { IProject } from '@/types'
import './projectCard.scss'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card" itemScope itemType="https://schema.org/SoftwareSourceCode">
      <header>
        <h3 itemProp="name">{project.title}</h3>
        <div className='project-type'>
          <span className='project-type-text'>{project.projectType?.replace('-', ' ').toLowerCase()}</span>
        </div>
      </header>
      <div className="project-content">
        <p className="project-description" itemProp="description">{project.description}</p>
        
        <div className="project-tags" aria-label="Project technologies">
          {project.tags && project.tags.map((tag, index) => (
            <span key={index} className="tag" itemProp="keywords">{tag}</span>
          ))}
        </div>
        
        <div className="project-card-images" aria-label={`${project.title} project images`}>
          {project.images.map((image, index) => (
            <Image 
              key={index}
              src={image} 
              alt={`${project.title} - Image ${index + 1}`}
              width={300}
              height={200}
              loading={index === 0 ? "eager" : "lazy"}
              className="project-image"
              itemProp={index === 0 ? "image" : undefined}
            />
          ))}
        </div>
        
        <meta itemProp="datePublished" content={project.datePublished || ""} />
        {project.technologies && (
          <meta 
            itemProp="programmingLanguage" 
            content={project.technologies.join(', ')} 
          />
        )}
        <meta itemProp="author" content="Mert Ulaş" />
        
        <footer className="project-footer">
          <Link 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            title={`View ${project.title} project`}
            aria-label={`View ${project.title} project`}
            itemProp="codeRepository"
          >
            Go to Project
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default ProjectCard;