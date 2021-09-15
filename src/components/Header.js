import React from 'react';
import './Header.css';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'


const Header = () => {

    return (
        <div id="banner" className="container mt-5 text-center text-white rounded">
            <h1>Jason Bongiovanni</h1>
            <a href="mailto:jpbon@protonmail.com" type="button" className="btn btn-outline-primary active mx-1">
                <MdEmail></MdEmail>
            </a>
            <a href="http://www.linkedin.com/in/j-bongiovanni" type="button" className="btn btn-outline-primary active mx-1" target="_blank" rel="noopener noreferrer">
                <GrLinkedin></GrLinkedin>
            </a>
            <a href="https://github.com/JpBongiovanni" type="button" className="btn btn-outline-primary active mx-1" target="_blank" rel="noopener noreferrer">
                <FaGithub></FaGithub>
            </a>
            <p className="lead" >
                (781) 315-1959 <br />
                Full Stack Developer & Educatonal Technology Specialist
            </p>
        </div>
    );
}

export default Header;