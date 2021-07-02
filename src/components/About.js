import React from 'react'
import "./About.css"
import { Divider } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function About() {
    return (
        <div className="about">
            <div className="about__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF3b0fFtiszXQ/profile-displayphoto-shrink_200_200/0/1622710313970?e=1628121600&v=beta&t=7OZ8xmsv9yE6ZW-5XXA0JgteUAi5imGNFqlj88mnxyc" alt="" />
            </div>
            <div className="about__bottom">
                <h1>Hi! I am Jaskaran Singh.</h1>
                <h2 style={{ fontWeight: '200' }}>I am a Full Stack Web Developer</h2>
                <Divider style={{ marginBottom: '10px' }} />
                <p>HTML | CSS | Javascript | Reactjs | MongoDB | mySQL | NodeJS | ExpressJS | C++</p>

                <div className="about__icons">
                    <a href="https://www.linkedin.com/in/jaskaran262/"><LinkedInIcon className="about__icon" style={{ color: ' #0E76A8' }} /></a>
                    <a href="https://github.com/jas-karan"><GitHubIcon className="about__icon" style={{ color: 'black' }} /></a>
                    <a href="https://twitter.com/avgDel"><TwitterIcon className="about__icon" style={{ color: '#1DA1F2' }} /></a>
                </div>
            </div>
        </div>
    )
}

export default About
