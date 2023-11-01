import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java12(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Data Types</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p className='fs-3 fw-medium mt-5'>Data Types in Java</p>
                            <p>Data types specify the different sizes and values that can be stored in the variable. There are two types of data types in Java:</p>
                            <ol>
                                <li>Primitive data types: The primitive data types include boolean, char, byte, short, int, long, float and double.</li>
                                <li>Non-primitive data types: The non-primitive data types include Classes, Interfaces, and Arrays</li>
                            </ol>


                            <p className='fs-3 fw-medium mt-5'>Java Primitive Data Types</p>
                            <p>In Java language, primitive data types are the building blocks of data manipulation. These are the most basic data types available in Java language.</p>
                            <p>There are 8 types of primitive data types:</p>
                            <ul> 
                                <li>boolean data type</li>
                                <li>byte data type</li>
                                <li>char data type</li>
                                <li>short data type</li>
                                <li>int data type</li>
                                <li>long data type</li>
                                <li>float data type</li>
                                <li>double data type</li>
                            </ul>

                            <table class="table table-bordered border-dark">
                                <thead className='table-dark'>
                                    <tr>
                                        <th>Data Type</th>
                                        <th>Defaul Value</th>
                                        <th>Default size</th>
                                    </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    <tr>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>1 bit</td>
                                    </tr>
                                    <tr>
                                        <td>char</td>
                                        <td>'\u0000'</td>
                                        <td>2 bytes</td>
                                    </tr>
                                    <tr>
                                        <td>byte</td>
                                        <td>0</td>
                                        <td>1 byte</td>
                                    </tr>
                                    <tr>
                                        <td>short</td>
                                        <td>0</td>
                                        <td>2 byte</td>
                                    </tr>
                                    <tr>
                                        <td>int</td>
                                        <td>0</td>
                                        <td>4 byte</td>
                                    </tr>
                                    <tr>
                                        <td>long</td>
                                        <td>0L</td>
                                        <td>8 byte</td>
                                    </tr>
                                    <tr>
                                        <td>float</td>
                                        <td>0.0f</td>
                                        <td>4 byte</td>
                                    </tr>
                                    <tr>
                                        <td>double</td>
                                        <td>0.0d</td>
                                        <td>8 byte</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className='fs-3 fw-medium mt-5'>Boolean Data Type</p>
                            <p>The Boolean data type is used to store only two possible values: true and false. This data type is used for simple flags that track true/false conditions.</p>
                            <p>The Boolean data type specifies one bit of information, but its "size" can't be defined precisely.</p>

                            <p className='fs-3 fw-medium mt-5'>Byte Data Type</p>
                            <p>The byte data type is an example of primitive data type. It isan 8-bit signed two's complement integer. Its value-range lies between -128 to 127 (inclusive). Its minimum value is -128 and maximum value is 127. Its default value is 0.</p>
                            <p>The byte data type is used to save memory in large arrays where the memory savings is most required. It saves space because a byte is 4 times smaller than an integer. It can also be used in place of "int" data type.</p>


                            <p className='fs-3 fw-medium mt-5'>Short Data Type</p>
                            <p>The short data type is a 16-bit signed two's complement integer. Its value-range lies between -32,768 to 32,767 (inclusive). Its minimum value is -32,768 and maximum value is 32,767. Its default value is 0.</p>
                            <p>The short data type can also be used to save memory just like byte data type. A short data type is 2 times smaller than an integer.</p>


                            <p className='fs-3 fw-medium mt-5'>Int Data Type</p>
                            <p>The int data type is a 32-bit signed two's complement integer. Its value-range lies between - 2,147,483,648 (-2^31) to 2,147,483,647 (2^31 -1) (inclusive). Its minimum value is - 2,147,483,648and maximum value is 2,147,483,647. Its default value is 0.</p>
                            <p>The int data type is generally used as a default data type for integral values unless if there is no problem about memory.</p>


                            <p className='fs-3 fw-medium mt-5'>Long Data Type</p>
                            <p>The long data type is a 64-bit two's complement integer. Its value-range lies between -9,223,372,036,854,775,808(-2^63) to 9,223,372,036,854,775,807(2^63 -1)(inclusive). Its minimum value is - 9,223,372,036,854,775,808and maximum value is 9,223,372,036,854,775,807. Its default value is 0. The long data type is used when you need a range of values more than those provided by int.</p>


                            <p className='fs-3 fw-medium mt-5'>Float Data Type</p>
                            <p>The float data type is a single-precision 32-bit IEEE 754 floating point.Its value range is unlimited. It is recommended to use a float (instead of double) if you need to save memory in large arrays of floating point numbers. The float data type should never be used for precise values, such as currency. Its default value is 0.0F.</p>


                            <p className='fs-3 fw-medium mt-5'>Double Data Type</p>
                            <p>The double data type is a double-precision 64-bit IEEE 754 floating point. Its value range is unlimited. The double data type is generally used for decimal values just like float. The double data type also should never be used for precise values, such as currency. Its default value is 0.0d.</p>


                            <p className='fs-3 fw-medium mt-5'>Char Data Type</p>
                            <p>The char data type is a single 16-bit Unicode character. Its value-range lies between '\u0000' (or 0) to '\uffff' (or 65,535 inclusive).The char data type is used to store characters.</p>


                            <p className='fs-3 fw-medium mt-5'>Why char uses 2 byte in java and what is \u0000 ?</p>
                            <p>It is because java uses Unicode system not ASCII code system. The \u0000 is the lowest range of Unicode system. To get detail explanation about Unicode visit next page.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}