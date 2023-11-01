import React from 'react'
import '../../../../style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../../../../../Layouts/NavBar';
import Img from '../../../../../assets/images/java.png'
import Footer from '../../../../../Layouts/Footer';

export default function Chapter1(){
    return(
        <div>
            <div className="bgColor">
                <NavBar/>

                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Introduction</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p className='fs-2 fw-semibold'>What is Java?</p>
                            <p>Java is a popular programming language, created in 1995.</p>
                            <p>It is owned by Oracle, and more than 3 billion devices run Java.</p>
                            <p>It is used for:</p>
                            <ul>
                                <li>Mobile applications (specially Android apps)</li>
                                <li>Desktop applications</li>
                                <li>Web applications</li>
                                <li>Web servers and application servers</li>
                                <li>Games</li>
                                <li>Database connection</li>
                                <li>And much, much more!</li>
                            </ul>

                            <p className='fs-2 fw-semibold mt-5'>Why Use Java?</p>
                            <ul>
                                <li>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
                                <li>It is one of the most popular programming language in the world</li>
                                <li>It has a large demand in the current job market</li>
                                <li>It is easy to learn and simple to use</li>
                                <li>It is open-source and free</li>
                                <li>It is secure, fast and powerful</li>
                                <li>It has a huge community support (tens of millions of developers)</li>
                                <li>Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</li>
                                <li>As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}