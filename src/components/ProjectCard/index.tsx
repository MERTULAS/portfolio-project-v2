import React from 'react';
import { IProject } from '@/types';
import './projectCard.scss';
import Link from 'next/link';
import Slider from './Slider';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {

  return (
    <div className="project-card" itemScope itemType="https://schema.org/SoftwareSourceCode">
      <header className="project-card-header">
        <h3 itemProp="name">{project.title}</h3>
        {project.projectType && (
          <div className='project-type'>
            <span className='project-type-text'>{project.projectType.replace('-', ' ').toLowerCase()}</span>
          </div>
        )}
      </header>

      <div className="project-content">
        <p className="project-description" itemProp="description">{project.description}</p>
        {project.tags?.length > 0 && (
          <div className="project-tags" aria-label="Project technologies">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag" itemProp="keywords">{tag}</span>
            ))}
          </div>
        )}

        <meta itemProp="datePublished" content={project.datePublished || ''} />
        {project.technologies && (
          <meta itemProp="programmingLanguage" content={project.technologies.join(', ')} />
        )}
        <meta itemProp="author" content="Mert Ulaş" />

        <div className="project-images">
          <Slider images={project.images} projectTitle={project.title} />
        </div>

        <footer className="project-footer">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            title={`Go to ${project.title} project`}
            aria-label={`Go to ${project.title} project`}
            itemProp="codeRepository"
          >
            Go to Project
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default ProjectCard;