import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program135() {

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
                            <p className='fs-5 fw-semibold'>135. Write a Java program to test if a double number is an integer.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class TestIfDoubleIsInteger &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                double number1 = 5.0;<br />
                                double number2 = 7.5;<br />

                                testIfInteger(number1);<br />
                                testIfInteger(number2);<br />
                                &#125;<br />

                                public static void testIfInteger(double number) &#123;<br />
                                if (number == (int) number) &#123;<br />
                                System.out.println(number + " is an integer.");<br />
                                &#125; else &#123;<br />
                                System.out.println(number + " is not an integer.");<br />
                                &#125;<br />
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