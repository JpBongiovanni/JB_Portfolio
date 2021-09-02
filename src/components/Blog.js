import React from 'react';
import NavBar from './Nav-Bar';
import Header from './Header';
import "./Blog.css";

const Blog = () => {
    return (
        <body>
            <Header></Header>
            <NavBar></NavBar>
            <div id = "blog" className="container mt-5">
                <p>Under construction</p>
            </div>
        </body>
    );
}

export default Blog