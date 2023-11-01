import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program10() {

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
                            <p className='fs-5 fw-semibold'>10. Write a Java program and compute the sum of the digits of an integer.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class SumOfDigitNumbers&#123;<br />
                                public static void main(String[] args)&#123;<br />
                                int num = 123;<br />
                                int digit;<br />
                                int sum = 0;<br />

                                while(num &#155; 0)&#123;<br />
                                digit = num % 10;<br />
                                sum = sum + digit;<br />
                                num = num/10;<br />
                                &#125;<br />
                                System.out.println("Sum of digits: "+sum);<br />
                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                            Sum of digits: 6
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}