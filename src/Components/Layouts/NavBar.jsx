import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import {HomeLink,CourseLink,BlogLink,AboutLink,ContactLink,} from './style.js';
import { Link } from "react-router-dom";

export default function NavBar() {
    
    return (
        <div>
            <nav className="navbar bg-black bg-opacity-25 border-black border-bottom" data-bs-theme="dark">
                <div className="container p-2 mb-1">
                    <a href="/" className="navbar-brand">
                        <span class="h2">CodeX</span>
                    </a>
                    <ul class="nav nav-underline">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active p-2" id='HomeLink' onClick={HomeLink}>Home</Link>
                            {/* <a class="nav-link active p-2" id='HomeLink' aria-current="page" href="\" onClick={HomeLink}>Home</a> */}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-2" id='CourseLink' href="/courses" onClick={CourseLink}>Courses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-2" id='BlogLink' href="/" onClick={BlogLink}>Community</a>
                        </li>
                        <li class="nav-item">
                            {/* <Link to="/about" class="nav-link p-2" id='AboutLink' onClick={AboutLink}>About</Link> */}
                            <a class="nav-link p-2" id='AboutLink' href="/about" onClick={AboutLink}>About</a>
                        </li>
                        <li class="nav-item">
                        {/* <Link to="/contact" class="nav-link p-2" id='ContactLink' onClick={ContactLink}>Contact</Link> */}
                            <a class="nav-link p-2" id='ContactLink' href="/contact" onClick={ContactLink}>Contact</a>
                        </li>
                    </ul>
                    <form action="" className="d-flex">
                        <button className="btn btn-outline-light px-4">
                            <Link to="/sign-in" class="link-offset-2 link-underline link-underline-opacity-0 text-white">Sign In</Link>
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
}