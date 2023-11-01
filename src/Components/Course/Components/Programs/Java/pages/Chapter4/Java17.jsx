import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java17(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Switch Statement</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                           <p>The Java switch statement executes one statement from multiple conditions. It is like if-else-if ladder statement. The switch statement works with byte, short, int, long, enum types, String and some wrapper types like Byte, Short, Int, and Long. Since Java 7, you can use strings in the switch statement</p>
                           <p>In other words, the switch statement tests the equality of a variable against multiple values.</p>


                           <p>Points to Remember</p>
                           <ul>
                                <li>There can be one or N number of case values for a switch expression.</li>
                                <li>The case value must be of switch expression type only. The case value must be literal or constant. It doesn't allow variables.</li>
                                <li>The case values must be unique. In case of duplicate value, it renders compile-time error.</li>
                                <li>The Java switch expression must be of byte, short, int, long (with its Wrapper type), enums and string.</li>
                                <li>Each case statement can have a break statement which is optional. When control reaches to the break statement, it jumps the control after the switch expression. If a break statement is not found, it executes the next case.</li>
                                <li>The case value can have a default label which is optional.</li>
                           </ul>


                           <p>Syntax:</p>
                           <pre>
                            switch (expression)&#123;
                            <br/>
                            &nbsp;&nbsp;case value:
                                    <br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                                    <br />
                                    <br />
                                    &nbsp;&nbsp;default:
                                    <br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
                                    <br/>
                            &#125;
                           </pre>
                           {/* Img */}
                           {/* Example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}