import React from 'react';
import './Skills.css';

const skillsData = [
    { skill: 'JavaScript', level: 90 },
    { skill: 'React', level: 85 },
    { skill: 'CSS', level: 80 },
    { skill: 'Node.js', level: 75 },
    { skill: 'Python', level: 70 },
];

const Skills = () => {
    const renderStars = (level) => {
        const stars = Math.round(level / 20); 
        return (
            <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < stars ? 'star filled' : 'star'}>★</span>
                ))}
            </div>
        );
    };

    return (
        <div className="skills-container">
            <h1>My Skills</h1>
            <div className="skills-flex">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <h2 className="skill-name">{skill.skill}</h2>
                        {renderStars(skill.level)}
                        <p className="skill-level">{skill.level}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;