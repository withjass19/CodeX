import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java33() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5" >
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Applets</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">  
                           <p>Applet is a special type of program that is embedded in the webpage to generate the dynamic content. It runs inside the browser and works at client side.</p>

                           <p>Advantage of Applet</p>
                           <p>There are many advantages of applet. They are as follows:</p>
                           <ul>
                            <li>It works at client side so less response time.</li>
                            <li>Secured</li>
                            <li>It can be executed by browsers running under many plateforms, including Linux, Windows, Mac Os etc.</li>
                           </ul>

                           <p>Drawback of Applet</p>
                           <p>Plugin is required at client browser to execute applet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}