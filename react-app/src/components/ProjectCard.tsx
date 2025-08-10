import flower1Dark from '../assets/flower1-dark.png';

export type ProjectProps = {
    title: string
    skills: string
    date: string
    shortDesc: string
    longDesc: string
    tags: ('community' | 'misc' | 'tech')[]
    link?: string
    pics?: string[]
}

const ProjectCard = (props: ProjectProps) => {
    const {title, skills, date, shortDesc, tags, link, pics,} = props
    return (
        <div className="proj-card">
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{skills}</p>
            <p>{shortDesc}</p>
            {pics && pics.length > 0 && <img src={pics[0]}/>}
        </div>
    );
}

export default ProjectCard;