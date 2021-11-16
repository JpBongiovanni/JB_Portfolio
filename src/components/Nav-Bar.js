import React from 'react';
import { Link } from "react-router-dom"
import { AiFillHome } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { ImBlogger2 } from 'react-icons/im';
import { BiBitcoin } from 'react-icons/bi';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import './Nav-Bar.css'

const NavBar = () => {


    return (
    <nav className="navbar rounded shadow">
        <ul className="nav nav-pills mx-auto d-sm-flex d-block flex-sm-nowrap">
            <li className="nav-item">
                <span>
                    <i aria-hidden='true'><AiFillHome /></i>
                </span>
                <span>
                    <Link to="/" className="btn m-2 px-5 text-white">HOME</Link>
                </span>
            </li>
            <li className="nav-item">
                <span>
                    <i aria-hidden='true'><BsPersonFill /></i>
                </span>
                <span>
                    <Link to="/aboutme" className="btn m-2 px-5 text-white">ABOUT ME</Link>
                </span>
            </li>
            <li className="nav-item">
                <span>
                    <i aria-hidden='true'><HiDocumentDuplicate /></i>
                </span>
                <span>
                    <Link to="/resume" className="btn m-2 px-5 text-white">RESUME</Link>
                </span>
            </li>
            <li className="nav-item">
                <span>
                    <i aria-hidden='true'><ImBlogger2 /></i>
                </span>
                <span>
                    <Link to="/blog" className="btn m-2 px-5 text-white">BLOG</Link>
                </span>
            </li>
            <li className="nav-item">
                <span>
                    <i aria-hidden='true'><BiBitcoin /></i>
                </span>
                <span>
                    <Link to="/crypto_info" className="btn m-2 px-5 text-white">Crypto Info</Link>
                </span>
            </li>
            <li className="nav-item">
                <span>
                    <i aria-hidden='true'><TiWeatherPartlySunny /></i>
                </span>
                <span>
                    <Link to="/weather" className="btn m-2 px-5 text-white">Weather</Link>
                </span>
            </li>
        </ul>
    </nav>
    );
}

export default NavBar;