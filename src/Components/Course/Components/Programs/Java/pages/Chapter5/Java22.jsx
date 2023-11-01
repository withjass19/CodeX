import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java22() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Constructors</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>In Java, a constructor is a block of codes similar to the method. It is called when an instance of the class is created. At the time of calling constructor, memory for the object is allocated in the memory.</p>
                            <p>It is a special type of method which is used to initialize the object.</p>
                            <p>Every time an object is created using the new() keyword, at least one constructor is called.</p>
                            <p>It calls a default constructor if there is no constructor available in the class. In such case, Java compiler provides a default constructor by default.</p>
                            <p>There are two types of constructors in Java: no-arg constructor, and parameterized constructor.</p>
                            <p>Note: It is called constructor because it constructs the values at the time of object creation. It is not necessary to write a constructor for a class. It is because java compiler creates a default constructor if your class doesn't have any.</p>


                            <p>Rules for creating Java constructor</p>
                            <p>There are two rules defined for the constructor.</p>
                            <ol>
                                <li>Constructor name must be the same as its class name</li>
                                <li>A Constructor must have no explicit return type</li>
                                <li>A Java constructor cannot be abstract, static, final, and synchronized</li>
                            </ol>


                            <p>Types of Constructors</p>
                            <p>There are teo types of constructors:</p>
                            <ol>
                                <li>Default constructor (no-arg constructor)</li>
                                <li>Parameterized constructor</li>
                            </ol>

                            <p>Default Constructor</p>
                            <p>A constructor is called "Default Constructor" when it doesn't have any parameter.</p>
                            <p>Syntax:</p>
                            <p>classname()&#123; &#125;</p>
                            {/* Example */}

                            <p>Parameterized Constructor</p>
                            <p>A constructor which has a specific number of parameters is called a parameterized constructor.</p>

                            <p>Why use the parameterized constructor?</p>
                            <p>The parameterized constructor is used to provide different values to distinct objects. However, you can provide the same values also.</p>
                            {/* Example */}


                            <p>Constructor Overloading</p>
                            <p>In Java, a constructor is just like a method but without return type. It can also be overloaded like Java methods.</p>
                            <p>Constructor overloading in Java is a technique of having more than one constructor with different parameter lists. They are arranged in a way that each constructor performs a different task. They are differentiated by the compiler by the number of parameters in the list and their types.</p>
                            {/* Example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}