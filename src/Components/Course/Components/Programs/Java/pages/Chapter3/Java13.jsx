import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java13(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Type Casting</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>In Java, type casting is a method or process that converts a data type into another data type in both ways manually and automatically. The automatic conversion is done by the compiler and manual conversion performed by the programmer. </p>

                            <p className='fs-3 fw-medium mt-5'>Type casting</p>
                            <p>Convert a value from one data type to another data type is known as type casting.</p>


                            <p className='fs-3 fw-medium mt-5'>Types of Type Casting</p>
                            <p>There are two types of type casting:</p>
                            <ul>
                                <li>Widening Type Casting</li>
                                <li>Narrowing Type Casting</li>
                            </ul>


                            <p className='fs-3 fw-medium mt-5'>Widening Type Casting</p>
                            <p>Converting a lower data type into a higher one is called widening type casting. It is also known as implicit conversion or casting down. It is done automatically. It is safe because there is no chance to lose data. It takes place when:</p>
                            <ul>
                                <li>Both data types must be compatible with each other.</li>
                                <li>The target type must be larger than the source type.</li>
                            </ul>


                            <p className='fs-3 fw-medium mt-5'>Narrowing Type Casting</p>
                            <p>Converting a higher data type into a lower one is called narrowing type casting. It is also known as explicit conversion or casting up. It is done manually by the programmer. If we do not perform casting then the compiler reports a compile-time error.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}