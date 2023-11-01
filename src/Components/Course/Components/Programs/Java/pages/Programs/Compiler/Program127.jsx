import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program127() {

    return (
        <div>
            <div className="bg-black">
                <NavBar />
            </div>

            <div className="container-fluid">
                {/* <div className="row bg- dark text-white" style={{width:"100vw", height:"10vh"}}>
                    
                </div> */}

                <div className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-8" id='jass'>
                            <p className='fs-5 fw-semibold'>127. Write a Java method to find the area of a pentagon.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class PentagonArea&#123;<br />
                                public static void main(String[] args) &#123;<br />
                                double sideLength = 7.0;<br />
                                double area = calculatePentagonArea(sideLength);<br />
                                System.out.println("Area of the pentagon: " + area);<br />
                                &#125;<br />
                                public static double calculatePentagonArea(double sideLength) &#123;<br />
                                double area = (5.0 / 4.0) * Math.pow(sideLength, 2) / Math.tan(Math.PI / 5);<br />
                                return area;<br />
                                &#125;<br />
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Sum of Two numbers: 7
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}