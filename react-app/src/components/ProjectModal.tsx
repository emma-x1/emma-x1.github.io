import React from 'react';
import { ProjectProps } from './ProjectCard';

type Props = {
    project: ProjectProps;
    onClose: () => void;
}

export default function ProjectModal({project, onClose} : Props) {
    return (
        <div className="project-modal" onClick={onClose}>
            <div className="project-modal-content">
                <button onClick={onClose}>x</button>
                <h3>{project.title}</h3>
                <p>{project.skills}</p>
                <p>{project.date}</p>
                <p>{project.longDesc}</p>
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"> View {project.title} </a>
                )}
                {project.pics && project.pics.length > 0 && (
                    <div className="project-images">
                        {project.pics.map((pic, index) => (
                            <img key={index} src={pic} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}