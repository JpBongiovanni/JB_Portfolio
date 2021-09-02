import React from 'react';
import NavBar from './Nav-Bar';
import Header from './Header';
import './AboutMe.css';
import profile_pic from '../images/Profile_pic.png';
import houghton_logo from '../images/HoughtonLogo.jpg';
import cd_logo from '../images/CDLogo.jpg';
import cf_logo from '../images/CFLogo.jpg';
import bli_logo from '../images/BLILogo.jpg';
import google_logo from '../images/GoogLogo.jpg';
import ace_logo from '../images/ACELogo.jpg';

const AboutMe = () => {
    return (
        
        <div className="body">
            <Header></Header>
            <NavBar></NavBar>
            <div className="container">
                <div className="card shadow mb-5 p-3 mt-5 border-primary">
                    <div className="row">
                        <div className="col-md-9">
                            <h3 className="mt-2 mb-2">About Jason</h3>
                            <p className="px-4 about text-white">I am a software developer with over 10 years in international education and an agile learner passionate about technology. I am eager to leverage my global professional experiences, creativity, and expanding software development skills to create solutions, products, and services that have a meaningful impact on end users.</p>
                            <p className="px-4 about text-white">After graduating from Houghton College in Houghton NY with a bachelor's degree in intercultural studies, I aquired my ESL Certification and travelled to Seoul South Korea to teach english, and eventually started working at Yongsan International School of Seoul (YISS) after I completed Teacher Certification training through the Florida Department of Education. During my time at YISS I completed my Master's of Educational Technology, followed by Coding Dojo's part-time flex program where I was given my Javascript and Python Certification.</p>
                        </div>
                        <div className="col-md-3">
                            <img className="px-4 mt-1 profile_pic" src={profile_pic} alt="Jason" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                    <div className="card border-primary">
                        <div className="card-body">
                        <h3>Education</h3>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">
                                <img src={cd_logo} alt="coding dojo logo" width="60" height="60" />
                            </li>
                            <li className="list-group-item">
                                <div className="edexp">
                                    <p>Coding Dojo Python Full-Stack Web Development - HTML, JavaScript, Python 2020 - 2021</p>
                                </div>
                                <div className="breaker"></div>
                            </li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">
                                <img src={ace_logo} alt="coding dojo logo" width="60" height="60" />
                            </li>
                            <li className="list-group-item">
                                <div className="edexp">
                                    <p>American College of Education Masters of Educational Technology - Educational/Instrutional Technology - GPA: 4.0 2018 - 2019</p>
                                </div>
                                <div className="breaker"></div>
                            </li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item">
                                <img src={houghton_logo} alt="coding dojo logo" width="60" height="60" />
                            </li>
                            <li className="list-group-item">
                                <div className="edexp">
                                    <p>Houghton College Bachelor of Arts - Intercultural Studies Houghton, NY 2020 - 2021</p>
                                </div>
                                <div className="breaker"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card mt-5 mb-5 border-primary">
                    <div className="card-body">
                        <h3>Certifications</h3>
                        <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">
                            <img src={bli_logo} alt="coding dojo logo" width="60" height="60" />
                        </li>
                        <li className="list-group-item">
                            <div className="edexp">
                                <p>TEFL Certification The Boston Language Institute Issued Nov 2009 - No Expiration Date</p>
                            </div>
                            <div className="breaker"></div>
                        </li>
                        </ul>
                        <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">
                            <img src={cf_logo} alt="coding dojo logo" width="60" height="60" />
                        </li>
                        <li className="list-group-item">
                            <div className="edexp">
                                <p>CrossFit Level 1 Trainer CrossFit Inc. Issued Oct 2017 - Expires Oct 2022</p>
                            </div>
                            <div className="breaker"></div>
                        </li>
                    </ul>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">
                            <img src={google_logo} alt="coding dojo logo" width="60" height="60" />
                        </li>
                        <li className="list-group-item">
                            <div className="edexp">
                                <p>Google Certified Educator Level 1 Google Issued Jul 2019 - Expires July 2022</p>
                            </div>
                            <div className="breaker"></div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <NavBar></NavBar>
    </div>
    );
}

export default AboutMe