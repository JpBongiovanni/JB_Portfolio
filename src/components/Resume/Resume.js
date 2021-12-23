import React from 'react'
import NavBar from '../NavBar/Nav-Bar';
import Header from '../Header/Header';
import "./Resume.css";
import resume from '../docs/ResumeJasonBon.pdf'

const Resume = () => {

    return (
        <div className="body">
            <Header></Header>
            <NavBar></NavBar>
            <div className="resume container mt-5 mb-5">
                <iframe title="resume" src={resume} width="100%" height="500px">
                </iframe>
            </div>
            <NavBar></NavBar>
        </div>
    )

}

export default Resume