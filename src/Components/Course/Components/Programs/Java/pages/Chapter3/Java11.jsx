import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java11(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Variables</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p className='fs-3 fw-medium mt-5'>Java Variables</p>
                            <p>A variable is a container which holds the value while the Java program is executed. A variable is assigned with a data type.</p>
                            <p>Variable is a name of memory location. There are three types of variables in java: local, instance and static.</p>
                            <p>There are two types of data types in Java: primitive and non-primitive.</p>


                            <p className='fs-3 fw-medium mt-5'>Variable</p>
                            <p>A variable is the name of a reserved area allocated in memory. In other words, it is a name of the memory location. It is a combination of "vary + able" which means its value can be changed.</p>


                            <p className='fs-3 fw-medium mt-5'>Types of Variables</p>
                            <p>There are three types of variables in Java:</p>
                            <ul>
                                <li>local variable</li>
                                <li>instance variable</li>
                                <li>static variable</li>
                            </ul>


                            <p className='fs-3 fw-medium mt-5'>Local Variable</p>
                            <p>A variable declared inside the body of the method is called local variable. You can use this variable only within that method and the other methods in the class aren't even aware that the variable exists.</p>
                            <p>A local variable cannot be defined with "static" keyword.</p>


                            <p className='fs-3 fw-medium mt-5'>Instance Variable</p>
                            <p>A variable declared inside the class but outside the body of the method, is called an instance variable. It is not declared as static.</p>
                            <p>It is called an instance variable because its value is instance-specific and is not shared among instances.</p>


                            <p className='fs-3 fw-medium mt-5'>Static variable</p>
                            <p>A variable that is declared as static is called a static variable. It cannot be local. You can create a single copy of the static variable and share it among all the instances of the class. Memory allocation for static variables happens only once when the class is loaded in the memory.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}