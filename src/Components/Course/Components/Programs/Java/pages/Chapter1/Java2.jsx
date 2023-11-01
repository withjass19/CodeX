import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java2(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Features Of Java</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            {/* <p className='fs-2 fw-semibold'>What is Java?</p> */}
                            <p>The primary objective of Java programming language creation was to make it portable, simple and secure programming language. Apart from this, there are also some excellent features which play an important role in the popularity of this language. The features of Java are also known as Java buzzwords.</p>
                            {/* <p>It is owned by Oracle, and more than 3 billion devices run Java.</p> */}
                            <p>A list of the most important features of the Java language is given below.</p>
                            <ol>
                                <li>Simple</li>
                                <li>Object-Oriented</li>
                                <li>Portable</li>
                                <li>Platform independent</li>
                                <li>Secured</li>
                                <li>Robust</li>
                                <li>Architecture neutral</li>
                                <li>Interpreted</li>
                                <li>High Performance</li>
                                <li>Multithreaded</li>
                                <li>Distributed</li>
                                <li>Dynamic</li>
                            </ol>

                            <p className='fs-3 fw-medium mt-5'>Simple</p>
                            <p>Java is very easy to learn, and its syntax is simple, clean and easy to understand. According to Sun Microsystem, Java language is a simple programming language because:</p>
                            <ul>
                                <li>Java syntax is based on C++ (so easier for programmers to learn it after C++).</li>
                                <li>Java has removed many complicated and rarely-used features, for example, explicit pointers, operator overloading, etc.</li>
                                <li>There is no need to remove unreferenced objects because there is an Automatic Garbage Collection in Java.</li>
                            </ul>

                            <p className='fs-3 fw-medium mt-5'>Object-oriented</p>
                            <p>Java is an object-oriented programming language. Everything in Java is an object. Object-oriented means we organize our software as a combination of different types of objects that incorporate both data and behavior.</p>
                            <p>Object-oriented programming (OOPs) is a methodology that simplifies software development and maintenance by providing some rules.</p>
                            <p>Basic concepts of OOPs are:</p>
                            <ol>
                                <li>Object</li>
                                <li>Class</li>
                                <li>Inheritance</li>
                                <li>Polymorphism</li>
                                <li>Abstraction</li>
                                <li>Encapsulation</li>
                            </ol>


                            <p className='fs-3 fw-medium mt-5'>Platform Independent</p>
                            <p>Java is platform independent because it is different from other languages like C, C++, etc. which are compiled into platform specific machines while Java is a write once, run anywhere language. A platform is the hardware or software environment in which a program runs.</p>
                            <p>There are two types of platforms software-based and hardware-based. Java provides a software-based platform.</p>
                            <p>The Java platform differs from most other platforms in the sense that it is a software-based platform that runs on top of other hardware-based platforms. It has two components:</p>
                            <ol>
                                <li>Runtime Environment</li>
                                <li>API(Application Programming Interface)</li>
                            </ol>
                            <p>Java code can be executed on multiple platforms, for example, Windows, Linux, Sun Solaris, Mac/OS, etc. Java code is compiled by the compiler and converted into bytecode. This bytecode is a platform-independent code because it can be run on multiple platforms, i.e., Write Once and Run Anywhere (WORA).</p>

                            
                            <p className='fs-3 fw-medium mt-5'>Secured</p>
                            <p>Java is best known for its security. With Java, we can develop virus-free systems. Java is secured because:</p>
                            <ul>
                                <li>No explicit pointer</li>
                                <li>Java Programs run inside a virtual machine sandbox</li>
                                <li>Classloader: Classloader in Java is a part of the Java Runtime Environment (JRE) which is used to load Java classes into the Java Virtual Machine dynamically. It adds security by separating the package for the classes of the local file system from those that are imported from network sources.</li>
                                <li>Bytecode Verifier: It checks the code fragments for illegal code that can violate access rights to objects.</li>
                                <li>Security Manager: It determines what resources a class can access such as reading and writing to the local disk.</li>
                            </ul>
                            <p>Java language provides these securities by default. Some security can also be provided by an application developer explicitly through SSL, JAAS, Cryptography, etc.</p>


                            <p className='fs-3 fw-medium mt-5'>Robust</p>
                            <p>The English mining of Robust is strong. Java is robust because:</p>
                            <ul>
                                <li>It uses strong memory management.</li>
                                <li>There is a lack of pointers that avoids security problems.</li>
                                <li>Java provides automatic garbage collection which runs on the Java Virtual Machine to get rid of objects which are not being used by a Java application anymore.</li>
                                <li>There are exception handling and the type checking mechanism in Java. All these points make Java robust.</li>
                            </ul>


                            <p className='fs-3 fw-medium mt-5'>Architecture-neutral</p>
                            <p>Java is architecture neutral because there are no implementation dependent features, for example, the size of primitive types is fixed.</p>
                            <p>In C programming, int data type occupies 2 bytes of memory for 32-bit architecture and 4 bytes of memory for 64-bit architecture. However, it occupies 4 bytes of memory for both 32 and 64-bit architectures in Java.</p>


                            <p className='fs-3 fw-medium mt-5'>High-performance</p>
                            <p>Java is faster than other traditional interpreted programming languages because Java bytecode is "close" to native code. It is still a little bit slower than a compiled language (e.g., C++). Java is an interpreted language that is why it is slower than compiled languages, e.g., C, C++, etc.</p>


                            <p className='fs-3 fw-medium mt-5'>Distributed</p>
                            <p>Java is distributed because it facilitates users to create distributed applications in Java. RMI and EJB are used for creating distributed applications. This feature of Java makes us able to access files by calling the methods from any machine on the internet.</p>


                            <p className='fs-3 fw-medium mt-5'>Multi-threaded</p>
                            <p>A thread is like a separate program, executing concurrently. We can write Java programs that deal with many tasks at once by defining multiple threads. The main advantage of multi-threading is that it doesn't occupy memory for each thread. It shares a common memory area. Threads are important for multi-media, Web applications, etc.</p>


                            <p className='fs-3 fw-medium mt-5'>Dynamic</p>
                            <p>Java is a dynamic language. It supports the dynamic loading of classes. It means classes are loaded on demand. It also supports functions from its native languages, i.e., C and C++.</p>
                            <p>Java supports dynamic compilation and automatic memory management (garbage collection).</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}