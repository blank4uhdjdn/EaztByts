import React from 'react';
import './Home.css';
import image from './ronaldo.avif'


const Home = () => {
    return (
        <div className="home-container">
            <div className="image-container">
                <img src={image} alt="My Profile" className="profile-image" />
            </div>
            <div className="education-details">
                <h1>My Education</h1>
                <ul>
                    <li>
                        <strong>Bachelor of Science in Computer Science</strong> - Himachal Pradesh Technical University
                    </li>
                    <li>
                        <strong>High School Diploma</strong> - Monal Public Sr. Sec. School
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;