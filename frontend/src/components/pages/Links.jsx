import React from 'react';
import './Links.css';
import linkedinLogo from './linkedin.png'; 
import githubLogo from './github.png'; 
import twitterLogo from './twitter.png'; 
import facebookLogo from './facebook.png'; 
import instagramLogo from './instagram.png'; 

const Links = () => {
    return (
        <div className="links-container">
            <h1>Connect with Me</h1>
            <div className="links-list">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="link-item">
                    <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
                </a>
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="link-item">
                    <img src={githubLogo} alt="GitHub" className="social-logo" />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="link-item">
                    <img src={twitterLogo} alt="Twitter" className="social-logo" />
                </a>
                <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="link-item">
                    <img src={facebookLogo} alt="Facebook" className="social-logo" />
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="link-item">
                    <img src={instagramLogo} alt="Instagram" className="social-logo" />
                </a>
            </div>
        </div>
    );
};

export default Links;