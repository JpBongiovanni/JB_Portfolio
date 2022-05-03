import React from 'react'
import NavBar from '../NavBar/Nav-Bar'
import Header from '../Header/Header'
import wdd_logo from '../../images/world_diety_database_logo.jpg'
import login_logo from '../../images/login.png'
import python_logo from '../../images/python_logo.jpeg'
import api_logo from '../../images/api_logo.gif'
import java_logo from '../../images/javaLogo.png'

import './Homepage.css'

const Homepage = () => {

    
    return (
    
    <div className="body">
        <Header></Header>
        <NavBar></NavBar>
        <div className="container mt-3">
            <h3 className="border border-primary border-3">Current Projects:</h3>
            <div className="row">
                <div className="col-lg-3">
                    <div className="card m-b-3 border border-primary border-3">
                        <a className="img_card" href="https://worlddeitydb.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="img card-img-top" src={wdd_logo} alt="World Deity Database" /></a>
                        <div className="card-body">
                            <a href="https://worlddeitydb.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h5 className="card-title">World Deity Database</h5></a>
                            <p className="card-text">The World Database is a tool used to aggregate information from users around the world in the field of ancient religions, cultures and traditional beliefs. Built with an intuitive backend and a user friendly frontend by styling with Bootstrap 4.0, Python 2.2 and Django. The database serves as a hub for specific information and sources in a niche field to serve researchers as they study ancient cultures.
                                </p>
                                <a href="https://github.com/JpBongiovanni/WorldDeityDatabase/blob/main/README.md" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View On GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <div className="card m-b-3 border border-primary border-3">
                        <a className="img_card" href="https://jb-portfolio.vercel.app/gaming_news" target="_blank" rel="noopener noreferrer"><img className="img card-img-top" src={api_logo} alt="Log In Application" width="200px" height="145px" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="https://jb-portfolio.vercel.app/gaming_news" target="_blank" rel="noopener noreferrer">Gaming News API</a></h5>
                            <p className="card-text">The Gaming News API was created utilizing Express, Axios, and Cheerio. The API scrapes the webpages of various gaming news sites for a specific game franchise, and then returns the newest headlines for your favorite video games. Click here or on the navbar for the most up-to-date news on the Super Mario franchise, or visit rapidapi.com to test endpoints, and copy code snippets to utilize the API for your own project.</p>
                            <div className="row">
                                <div className="col">
                                    <a href="https://github.com/JpBongiovanni/gaming_news_api/blob/main/index.js" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View On GitHub</a>
                                </div>
                                <div className="col">
                                    <a href="https://rapidapi.com/JpBongiovanni/api/video-game-news/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View On RapidApi</a>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <div className="card m-b-3 border border-primary border-3">
                        <a className="img_card" href="https://github.com/JpBongiovanni/JB_Portfolio" target="_blank" rel="noopener noreferrer"><img className="img card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Log In Application" width="200px" height="145px" /></a>
                        <div className="card-body">
                            <h5 className="card-title">Personal Website (React)</h5>
                            <p className="card-text">My personal website was made using Create React App, and is continuously updated to showcase HTML, CSS, Javascript, and React Components. The website includes a lits of my current projects, an About Me section, a Blog section, and two APIs. </p>
                            <a href="https://github.com/JpBongiovanni/JB_Portfolio" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View On GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card m-b-3 border border-primary border-3">
                        <a className="img_card" href="https://github.com/JpBongiovanni/EmployeeManagerFrontEnd/blob/main/README.md" target="_blank" rel="noopener noreferrer"><img className="img card-img-top" src={java_logo} alt="Python Functions Library" /></a>
                        <div className="card-body">
                            <h5 className="card-title">Employee Manager (Java)</h5>
                            <p className="card-text">The Employee Manager Application was created using the Java Spring Boot framework with MySQL connectivity, and Angular frontend. The application enables users to interact through a GUI to add, edit, filter, and delete entries in the MySqL database</p>
                            <a href="https://github.com/JpBongiovanni/EmployeeManagerFrontEnd/blob/main/README.md" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View On GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h3 className="mb-3 border border-primary border-3">Work Experience:</h3>
                    <div className="card mb-5 rounded border border-primary border-3">
                        <div className="card-body">
                            <div className="mx-3">
                                <h4>Yongsan International School of Seoul</h4>
                                <div><strong>2016-2021 | Seoul, south Korea</strong></div>
                                Middle School humanities teacher <br></br>
                                Assistant Athletic Trainer
                                <ul className="list-group list-group-flush mt-2">
                                    <li className="list-group-item">-Taught 12 WASC accredited (US curriculum) humanities classes per week (Social Studies, Geography, history, philosophy) to over 70 students from over 20 nationalities</li>
                                    <div className="breaker"></div>
                                    <li className="list-group-item">-Planned and delivered engaging curriculum that aligned with WASC and South Korean Board of Education standards leveraging teaching expertise and creativity to innovative and adapt approaches for instruction that captured student interest in a remote (Covid -19) setting
                                    </li>
                                    <div className="breaker"></div>
                                    <li className="list-group-item">-Promoted student engagement with the use of various technology applications to enhance learning in the classroom including Schoology, Powerschool, Classcraft, Class Dojo, Google Apps, Discord, Zoom, Big Blue Button, and Rubicon Atlas
                                    </li>
                                    <div className="breaker"></div>
                                    <li className="list-group-item">-Collaborated with grade level team and professional learning communities to enhance student learning through analysis of test data, and best practice of 21st Century learning methods
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3 className="mb-3 border border-primary border-3">Additonal Experience:</h3>
                    <div className="card shadow mb-5 bg-white rounded border border-primary border-3">
                        <div className="card-body">
                            <div className="mx-3"></div>
                            <h4>Chungdham Learning</h4>
                            <div><strong>2010-2015</strong></div>
                            ESL Instructor
                            <ul className="list-group list-group-flush ">
                                <li className="expLi list-group-item">CHUNGDHAM APRIL INSTITUTE | Seoul, South Korea |  2011-2015
                                </li>
                                <div className="breaker"></div>
                                <li className="expLi list-group-item">CHUNGDHAM LEARNING | Incheon, South Korea | 2010-2011</li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-3">
                <h3 className="mb-3 border border-primary border-3">Skills:</h3>
                <div className="card shadow mb-5 bg-white rounded border border-primary border-3">
                    <div className="card-body">
                        <div className="mx-3">
                            
                            <ul className="list-group">
                                <h3 className='skills-title'>Languages</h3>
                                <li className="expLi list-group-item">Python</li>
                                <li className="expLi list-group-item">Java</li>
                                <li className="expLi list-group-item">JavaScript</li>
                                <li className="expLi list-group-item">TypeScript</li>
                                <li className="expLi list-group-item">HTML</li>
                                <li className="expLi list-group-item">CSS</li>
                                <hr></hr>
                                <h3 className='skills-title'>Databases</h3>
                                <li className="expLi list-group-item">Node.js</li>
                                <li className="expLi list-group-item">MySQL</li>
                                <li className="expLi list-group-item">MongoDB</li>
                                <li className="expLi list-group-item">PostgreSQL</li>
                                <hr></hr>
                                <h3 className='skills-title'>Frameworks/Libraries</h3>
                                <li className='expLi list-group-item'>Django</li>
                                <li className='expLi list-group-item'>Spring Boot</li>
                                <li className='expLi list-group-item'>Angular</li>
                                <li className='expLi list-group-item'>React</li>
                                <li className='expLi list-group-item'>Express</li>
                                <li className='expLi list-group-item'>Pandas</li>
                                <li className='expLi list-group-item'>Kaboom</li>
                                <li className='expLi list-group-item'>Bootstrap</li>
                                <hr></hr>
                                <h3 className='skills-title'>Tools</h3>
                                <li className='expLi list-group-item'>Heroku</li>
                                <li className='expLi list-group-item'>Vercel</li>
                                <li className='expLi list-group-item'>Axios</li>
                                <li className='expLi list-group-item'>Cheerio</li>
                                <li className='expLi list-group-item'>APIs</li>
                                <li className='expLi list-group-item'>AWS</li>
                                <li className='expLi list-group-item'>GitHub</li>
                                <li className='expLi list-group-item'>eclipseIDE</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <NavBar></NavBar>
    </div>
    );
}

export default Homepage