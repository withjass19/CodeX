import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java15(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Mathematical Functions</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p className='fs-3 fw-medium mt-5'>Java Math class</p>
                            <p>Java Math class provides several methods to work on math calculations like min(), max(), avg(), sin(), cos(), tan(), round(), ceil(), floor(), abs() etc.</p>
                            <p>Unlike some of the StrictMath class numeric methods, all implementations of the equivalent function of Math class can't define to return the bit-for-bit same results. This relaxation permits implementation with better-performance where strict reproducibility is not required.</p>
                            <p>If the size is int or long and the results overflow the range of value, the methods addExact(), subtractExact(), multiplyExact(), and toIntExact() throw an ArithmeticException.</p>
                            <p>For other arithmetic operations like increment, decrement, divide, absolute value, and negation overflow occur only with a specific minimum or maximum value. It should be checked against the maximum and minimum value as appropriate.</p>


                            <p className='fs-3 fw-medium mt-5'>Java Math Methods</p>
                            <p>The java.lang.Math class contains various methods for performing basic numeric operations such as the logarithm, cube root, and trigonometric functions etc. The various java math methods are as follows:</p>

                            <p className='fs-3 fw-medium mt-5'>Basic Math methods</p>
                            <table className='table table-bordered border-dark'>
                                <thead className='table-dark'>
                                    <tr>
                                        <td>Method</td>
                                        <td>Desctiption</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Math.abs()</td>
                                        <td>It will return the Absolute value of the given value</td>
                                    </tr>
                                    <tr>
                                        <td>Math.max()</td>
                                        <td>It returns the Largest of two values.</td>
                                    </tr>
                                    <tr>
                                        <td>Math.min()</td>
                                        <td>It is used to return the Smallest of two values.</td>
                                    </tr>
                                    <tr>
                                        <td>Math.round()</td>
                                        <td>It is used to round of the decimal numbers to the nearest value.</td>
                                    </tr>
                                    <tr>
                                        <td>Math.sqrt()</td>
                                        <td>It is used to return the square root of a number.</td>
                                    </tr>
                                    <tr>
                                        <td>Math.cbrt()</td>
                                        <td>It is used to return the cube root of a number.</td>
                                    </tr>
                                    <tr>
                                        <td>Math.pow()</td>
                                        <td>It returns the value of first argument raised to the power to second argument.</td>
                                    </tr>
                                    <tr>
                                        <td>Math.signum()</td>
                                        <td>It is used to find the sign of a given value.</td>
                                    </tr>
                                    <tr>
                                        <td>Math.ceil()</td>
                                        <td>It is used to find the smallest integer value that is greater than or equal to the argument or mathematical integer.</td>
                                    </tr>
                                    <tr>
                                        <td>Math.copySign()</td>
                                        <td>It is used to find the smallest integer value that is greater than or equal to the argument or mathematical integer</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}