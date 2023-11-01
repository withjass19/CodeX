import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java23() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Method Overloading and Overriding</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>Method Overloading</p>
                            <p>If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.</p>
                            <p>If we have to perform only one operation, having same name of the methods increases the readability of the program.</p>
                            <p>Suppose you have to perform addition of the given numbers but there can be any number of arguments, if you write the method such as a(int,int) for two parameters, and b(int,int,int) for three parameters then it may be difficult for you as well as other programmers to understand the behavior of the method because its name differs.</p>
                            <p>So, we perform method overloading to figure out the program quickly.</p>


                            <p>Advantage of method overloading</p>
                            <p>Method overloading increases the readability of the program.</p>


                            <p>Different ways to overload the method</p>
                            <p>There are two ways to overload the method in java</p>
                            <ol>
                                <li>By changing number of arguments</li>
                                <li>By changing the data type</li>
                            </ol>


                            <p>1. Method Overloading: changing no. of arguments</p>
                            <p>In this example, we have created two methods, first add() method performs addition of two numbers and second add method performs addition of three numbers.</p>
                            <p>In this example, we are creating static methods so that we don't need to create instance for calling methods.</p>
                            {/* Example */}


                            <p>Method Overloading: changing data type of arguments</p>
                            <p>In this example, we have created two methods that differs in data type. The first add method receives two integer arguments and second add method receives two double arguments.</p>
                            {/* example */}



                            <p>Method Overriding</p>
                            <p>If subclass (child class) has the same method as declared in the parent class, it is known as method overriding in Java.</p>
                            <p>In other words, If a subclass provides the specific implementation of the method that has been declared by one of its parent class, it is known as method overriding.</p>


                            <p>Usage of Java Method Overriding</p>
                            <ul>
                                <li>Method overriding is used to provide the specific implementation of a method which is already provided by its superclass.</li>
                                <li>Method overriding is used for runtime polymorphism</li>
                            </ul>


                            <p>Rules for Java Method Overriding</p>
                            <ol>
                                <li>The method must have the same name as in the parent class</li>
                                <li>The method must have the same parameter as in the parent class.</li>
                                <li>There must be an IS-A relationship (inheritance).</li>
                            </ol>
                            {/* Example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}