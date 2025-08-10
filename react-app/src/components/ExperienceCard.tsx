type ExperienceProps = {
    title: string
    company: string
    skills: string
    date: string
    description: string
}

const ExperienceCard = (props: ExperienceProps) => {
    const {title, company, skills, date, description} = props
    console.log(props)
    return (
        <div className="exp-card">
            <h3>{title} <span>@ {company}</span></h3>
            <p>{skills}</p>
            <p>{date}</p> 
            <p>{description}</p>
        </div>
    )
}

export default ExperienceCard;