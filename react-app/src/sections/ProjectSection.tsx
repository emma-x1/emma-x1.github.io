import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard, { ProjectProps } from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

const tags = ['all', 'community', 'tech', 'misc'] as const

export default function ProjectSection() {
    
    const [selectedTag, setSelectedTag] = useState<'all' | 'community' | 'tech' | 'misc'>('all')
    const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

    const filtered = selectedTag === 'all'
        ? projects
        : projects.filter(p => p.tags.includes(selectedTag))

    return (
        <div className="projects">
            <h2>Projects</h2>
            {tags.map(tag => (
                <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    style={{
                        fontWeight: tag === selectedTag ? 'bold' : 'normal',
                        marginRight: '0.5rem',
                      }}                  
                >
                    {tag}
                </button>
            ))}
            {filtered.map(proj => (
                <div key={proj.title} onClick={() => setSelectedProject(proj)}>
                    <ProjectCard {...proj}/>
                </div>
            ))}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
};