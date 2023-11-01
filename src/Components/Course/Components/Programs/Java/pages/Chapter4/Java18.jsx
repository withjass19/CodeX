import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java18() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Looping Statements</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>The Java for loop is used to iterate a part of the program several times. If the number of iteration is fixed, it is recommended to use for loop</p>
                            <p>There are three types of for loops in Java.</p>
                            <ul>
                                <li>Simple for Loop</li>
                                <li>For-each or Enhanced for Loop</li>
                                <li>Lablesd for Loop</li>
                            </ul>


                            <p>Simple for Loop</p>
                            <p>A simple for loop is the same as C/C++. We can initialize the variable, check condition and increment/decrement value. It consists of four parts:</p>
                            <ol>
                                <li>A simple for loop is the same as C/C++. We can initialize the variable, check condition and increment/decrement value. It consists of four parts:</li>
                                <li>Condition: It is the second condition which is executed each time to test the condition of the loop. It continues execution until the condition is false. It must return boolean value either true or false. It is an optional condition.</li>
                                <li>Increment/Decrement: It increments or decrements the variable value. It is an optional condition.</li>
                                <li>Increment/Decrement: It increments or decrements the variable value. It is an optional condition.</li>
                            </ol>

                            <p>Syntax:</p>
                            <p>for(initialization;  condition;  increment/decrement)&#123;<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#92;&#92; statement or code to be executed <br />
                                &#125;
                            </p>
                            {/*Img  */}
                            {/* example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}