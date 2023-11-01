import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java28() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5" >
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Exception Handling</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">  
                           <p>The Exception Handling in Java is one of the powerful mechanism to handle the runtime errors so that the normal flow of the application can be maintained.</p>
                           <p>In this tutorial, we will learn about Java exceptions, it's types, and the difference between checked and unchecked exceptions.</p>


                           <p>What is Exception in Java?</p>
                           <p>Dictionary Meaning: Exception is an abnormal condition.</p>
                           <p>In Java, an exception is an event that disrupts the normal flow of the program. It is an object which is thrown at runtime.</p>


                           <p>What is Exception Handling?</p>
                           <p>Exception Handling is a mechanism to handle runtime errors such as ClassNotFoundException, IOException, SQLException, RemoteException, etc.</p>

                           <p>Advantage of Exception Handling</p>
                           <p>The core advantage of exception handling is to maintain the normal flow of the application. An exception normally disrupts the normal flow of the application; that is why we need to handle exceptions.</p>
                           <p>Suppose there are 10 statements in a Java program and an exception occurs at statement 5; the rest of the code will not be executed, i.e., statements 6 to 10 will not be executed. However, when we perform exception handling, the rest of the statements will be executed. That is why we use exception handling in Java.</p>


                           <p>Hierarchy of Java Exception classes</p>
                           <p>The java.lang.Throwable class is the root class of Java Exception hierarchy inherited by two subclasses: Exception and Error. The hierarchy of Java Exception classes is given below:</p>
                           {/* img */}



                           <p>Types of Java Exceptions</p>
                           <p>There are mainly two types of exceptions: checked and unchecked. An error is considered as the unchecked exception. However, according to Oracle, there are three types of exceptions namely:</p>
                           <ol>
                            <li>Checked Exception</li>
                            <li>Unchecked Exception</li>
                            <li>Error</li>
                           </ol>


                           <p>Difference between Checked and Unchecked Exceptions</p>
                           <p>1. Checked Exception</p>
                           <p>The classes that directly inherit the Throwable class except RuntimeException and Error are known as checked exceptions. For example, IOException, SQLException, etc. Checked exceptions are checked at compile-time.</p>

                           <p>2. Unchecked Exception</p>
                           <p>The classes that inherit the RuntimeException are known as unchecked exceptions. For example, ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException, etc. Unchecked exceptions are not checked at compile-time, but they are checked at runtime.</p>
                           
                           <p>3. Error</p>
                           <p>Error is irrecoverable. Some example of errors are OutOfMemoryError, VirtualMachineError, AssertionError etc.</p>


                           <p>Java Exception Keywords</p>
                           <p>Java provides five keywords that are used to handle the exception. The following table describes each</p>
                           <table>
                            <thead>
                                <tr>
                                    <tr>Keyword</tr>
                                    <tr>Discriotion</tr>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>try</td>
                                    <td>The "try" keyword is used to specify a block where we should place an exception code. It means we can't use try block alone. The try block must be followed by either catch or finally.</td>
                                </tr>
                                <tr>
                                    <td>catch</td>
                                    <td>The "catch" block is used to handle the exception. It must be preceded by try block which means we can't use catch block alone. It can be followed by finally block later.</td>
                                </tr>
                                <tr>
                                    <td>finally</td>
                                    <td>The "finally" block is used to execute the necessary code of the program. It is executed whether an exception is handled or not.</td>
                                </tr>
                                <tr>
                                    <td>throw</td>
                                    <td>	The "throw" keyword is used to throw an exception.</td>
                                </tr>
                                <tr>
                                    <td>throws</td>
                                    <td>The "throws" keyword is used to declare exceptions. It specifies that there may occur an exception in the method. It doesn't throw an exception. It is always used with method signature.</td>
                                </tr>
                            </tbody>
                           </table>

                           {/* example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}