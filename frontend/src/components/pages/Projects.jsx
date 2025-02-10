import React from 'react';
import './Projects.css';
import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'This is a brief description of Project One.',
        image: image1, // Random image for Project One
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'This is a brief description of Project Two.',
        image:image2, // Random image for Project Two
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'This is a brief description of Project Three.',
        image: image3, // Random image for Project Three
    },
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-flex">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;