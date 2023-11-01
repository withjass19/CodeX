import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java14(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Operators</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>Operator in Java is a symbol that is used to perform operations. For example: +, -, *, / etc.</p>
                            <p>There are many types of operators in Java which are given below:</p>
                            <ul>
                                <li>Unary Operator,</li>
                                <li>Arithmetic Operator,</li>
                                <li>Shift Operator,</li>
                                <li>Relational Operator,</li>
                                <li>Bitwise Operator,</li>
                                <li>Logical Operator,</li>
                                <li>Ternary Operator and</li>
                                <li>Assignment Operator.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}