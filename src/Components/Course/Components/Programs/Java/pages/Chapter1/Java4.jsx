import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java4(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Applications of Java</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>The expansion of the Java programming language is very wide and it is proved by the statement 3 Billion Devices Runs Java which is shown during the installation of Java. Java provides a rich and wide range of API that helps programmers to develop applications. Using Java, we can develop different applications for different purposes. We can use Java technology to develop the following applications:</p>
                            <ul>
                                <li>Mobile App Development</li>
                                <li>Desktop GUI Applications</li>
                                <li>Web-based Applications</li>
                                <li>Gaming Applications</li>
                                <li>Big Data Technologies</li>
                                <li>Distributed Applications</li>
                                <li>Cloud-based Applications</li>
                                <li>IoT Applications</li>
                            </ul>
                            

                            <p className='fs-3 fw-medium mt-5'>Mobile App Development</p>
                            <p>The Java programming language can be considered as the official language for mobile application development. Most of the android applications build using Java. The most popular android app development IDE Android Studio also uses Java for developing android applications. So, if you are already familiar with Java, it will become much easier to develop android applications. The most popular android applications Spotify and Twitter are developed using Java.</p>


                            <p className='fs-3 fw-medium mt-5'>Desktop GUI Applications</p>
                            <p>We can also develop a GUI application using Java. Java provides AWT, JavaFX, and Swing for developing the GUI based desktop application. The tools contain the pre-assembled components like list, menu, button.</p>


                            <p className='fs-3 fw-medium mt-5'>Web-based Applications</p>
                            <p>It is also used for developing the web-based application because it provides vast support for web development through Servlet, JSP, and Struts. It is the reason that Java is also known as a server-side programming language. Using these technologies, we can develop a variety of applications. The most popular frameworks Spring, Hibernate, Spring Boot, used for developing web-based applications. LinkedIn, AliExpress, web.archive.org, IRCTC, etc. are the popular websites that are written using Java programming language.</p>


                            <p className='fs-3 fw-medium mt-5'>Game Development</p>
                            <p>Java is widely used by game development companies because it has the support of the open-source most powerful 3D engine. The engine provides unparalleled capacity when it comes to the context of the designing of 3D games. The most popular games developed in Java are Minecraft, Mission Impossible III, etc. There are some popular Frameworks and Libraries available for Game Development, like - LibGDX and OpenGL</p>


                            <p className='fs-3 fw-medium mt-5'>Big Data Technology</p>
                            <p>As many programming languages are available for Big Data Technology but still Java is the first choice for the same. The tool Hadoop HDFS platform for processing and storing big data applications is written in Java. In big data, Java is widely used in ETL applications such as Apache Camel and Apache Kafka. It is used to extract and transform data, and load in big data environments.</p>


                            <p className='fs-3 fw-medium mt-5'>Distributed Applications</p>
                            <p>The JINI (Java Intelligent Networking Infrastructure) provides the infrastructure to register and find distributed services based on its specification. It implements a mechanism that is known as JavaSpaces. It supports the distribution, persistence, and migration of objects in a network.</p>


                            <p className='fs-3 fw-medium mt-5'>Cloud-Based Applications</p>
                            <p>A cloud application is the on-demand availability of IT resources via the internet. The cloud-based application provides the service at a low cost. Java provides the environment to develop cloud-based applications. We can use Java to develop SaaS (Software as a Service), LaaS (Logging as a Service), and PaaS (Platform as a Service). The cloud application widely used to share data between companies or to develop applications remotely.</p>


                            <p className='fs-3 fw-medium mt-5'>IoT Application</p>
                            <p>IoT is a technology that connects the devices in its network and communicates with them. IoT has found almost in all the small devices such as health gears, smartphones, wearables, smart lighting, TVs, etc. For developing the IoT application there is a lot of programming languages that can be used but Java offers an edge to developers that is unparalleled. IoT programmers gravitate towards Java because of its security, flexibility, and versatility.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}