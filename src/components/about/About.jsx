import React, { useContext } from 'react';

import Web from '../../images/web.jpg';
import Resume from '../../images/resume.jpg';
import './About.css';
import { ThemeContext } from '../../Context';
import resume from '../../Resume/Resume.pdf';

const About = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='about'>
            <div className="about-left">
                <div style={{ backgroundColor: darkMode && '#eff2f5'}} className="a-card bg"></div>
                <div className="a-card">
                    <img src={Web} alt="" className='a-img'/>
                </div>
            </div>
            <div className="about-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>TCS Digital Cadre | HackerRank problem solving 6* | Loves coding, implementing algorithms, and solving math problems | React JS | Typescript.</p>
                <p className='a-desc'>Tech enthusiast, who loves solving algorithmic problems with a Bachelor of Technology - BTech focused in Computer Science and Engineering from Government College of Engineering and Textile Technology, Serampore.</p>
                <div className="a-award">
                    <img src={Resume} alt="" className='a-award-img'/>
                    <div className="a-award-texts">
                        <h4 className='a-award-title' style={{ color: darkMode && 'white' }}>My Resume</h4>
                        <p className='a-award-desc'>
                            All certifications and relevant details are in the resume
                        </p>
                        <div className="columns-download">
                            <p>
                                <a href={resume} className="button" download="Resume" target='blank'>
                                    <i className="fa fa-download"></i>Download Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
