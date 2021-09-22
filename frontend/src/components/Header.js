import React from 'react';
import './Header.css';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import axios from "axios";


const Header = () => {
    const [data, setData] = React.useState("");

    const fetchData = React.useCallback(async () => {
        axios
            .get("http://localhost:4000/")
            .then((response) => setData(response.data));
    }, []);
    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

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
                Full Stack Developer & Educatonal Technology Specialist <br />
            </p>
            {/* <div>{data.exampleMessage}</div> added backend checking on vercel*/}
            
        </div>
        
    );
}

export default Header;