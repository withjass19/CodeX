import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program136() {

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
                            <p className='fs-5 fw-semibold'>136. Write a Java program to round up the result of integer division.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class RoundUpDivisionResult &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int dividend = 17;<br />
                                int divisor = 5;<br />

                                int result = roundUpDivision(dividend, divisor);<br />

                                System.out.println("Result of " + dividend + " / " + divisor + " (rounded up): " + result);<br />
                                &#125;<br />

                                public static int roundUpDivision(int dividend, int divisor) &#123;<br />
                                int result = dividend / divisor;<br />

                                if (dividend % divisor &gt; 0) &#123;<br />
                                result++;<br />
                                &#125;<br />

                                return result;<br />
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