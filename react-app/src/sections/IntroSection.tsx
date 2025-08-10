import React, { useEffect, useState } from 'react';

const st1 = [
    "student studying CS @UWaterloo",
    "builder and tinkerer",
    "community organizer"
]

const st2 = [
    "passionate about the potential of technology and people",
    "passionate about empowering beginners in tech",
    "interested in AI, robotics, and science",
    "always learning",
]

const st3 = [
    "your next software engineer",
]

export default function IntroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const s1 = st1[index % st1.length];
    const s2 = st2[index % st2.length];
    const s3 = st3[index % st3.length];

    return (
        <div className="intro">
            <div>
                <h2>I'm Emma Xing, and I'm...</h2>
                <div className="intro-shuffle">
                    <p>a {s1}</p>
                    <p>who's {s2},</p>
                    <p>and {s3}.</p>
                </div>
                <img src="../assets/flower1-dark.png"></img>
                <div>
                    <p>I've always been curious and driven. My interests lie in diverse places - 
                        I almost went pre-med before pivoting to CS. I like learning about chem & bio, quantum physics, psychology/neuroscience, and people/relationships.
                        I also like to run, read, explore nature, cook/bake, and spend time with friends and family.
                    </p>
                </div>
            </div>
            <div>
                <h3>Here's what I'm working on now</h3>
                <p>Learning: diffusion policy for manipulating granular materials; React; Andrej Karpathy's ML series</p>
                <p>Building: finance startup; note-taking app; this website :)</p>
                <p>Working: as a full stack developer @ RBC</p>
                <p>Researching: robotic manipulation of granular materials via diffusion policy</p>
                <p><a href="https://www.goodreads.com/user/show/185891057-emma-xing" target="_blank" rel="noopener noreferrer">Reading: </a>"The Picture of Dorian Gray" by Oscar Wilde</p>
            </div>
        </div>
    )
}