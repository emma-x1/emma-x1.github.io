import { experiences } from '../data/experiences';
import ExperienceCard from '../components/ExperienceCard';

const ExperienceSection = () => (
    <div className="experience">
        <h2 className="section-title">Experience</h2>
        <h3>Incoming @ RBC Borealis, TextQL.</h3>
        {experiences.map((exp) => (
            <ExperienceCard key={exp.title} {...exp}/>
        ))}
        <a href="resume">See more on my resume</a>
        <a href="https://www.linkedin.com/in/emmaxing/" target="_blank" rel="noopener noreferrer">Let's connect on LinkedIn!</a>
    </div>
);

export default ExperienceSection;