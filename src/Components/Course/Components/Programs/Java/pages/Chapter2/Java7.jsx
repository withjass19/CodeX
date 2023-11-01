import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java7(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Java Virtual Machine</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p className='fs-3 fw-medium mt-5'>JVM (Java Virtual Machine) Architecture</p>
                            <p>JVM (Java Virtual Machine) is an abstract machine. It is a specification that provides runtime environment in which java bytecode can be executed.</p>
                            <p>JVMs are available for many hardware and software platforms (i.e. JVM is platform dependent).</p>


                            <p className='fs-3 fw-medium mt-5'>What is JVM</p>
                            <p>It is:</p>
                            <ol>
                                <li>A specification where working of Java Virtual Machine is specified. But implementation provider is independent to choose the algorithm. Its implementation has been provided by Oracle and other companies.</li>
                                <li>An implementation Its implementation is known as JRE (Java Runtime Environment).</li>
                                <li>Runtime Instance Whenever you write java command on the command prompt to run the java class, an instance of JVM is created.</li>
                            </ol>


                            <p className='fs-3 fw-medium mt-5'>What it does</p>
                            <p>The JVM performs following operation:</p>
                            <ul>
                                <li>Loads code</li>
                                <li>Verifies code</li>
                                <li>Executes code</li>
                                <li>Provides runtime environment</li>
                            </ul>
                            <p>JVM provides definitions for the:</p>
                            <ul>
                                <li>Memory area</li>
                                <li>Class file format</li>
                                <li>Register set</li>
                                <li>Garbage-collected heap</li>
                                <li>Fatal error reporting etc.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}