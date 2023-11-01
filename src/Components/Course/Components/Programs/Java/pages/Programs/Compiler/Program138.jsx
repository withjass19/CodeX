import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program138() {

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
                            <p className='fs-5 fw-semibold'>138. Write a Java program to convert a float value to absolute value.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class ConvertFloatTOAbsoluteValue&#123;<br />
                                public static void main(String args[])&#123;<br />
                                java.util.Scanner Input = new java.util.Scanner(System.in);<br />
                                System.out.print("Enter Float value: ");<br />
                                float num = Input.nextFloat();<br />
                                System.out.println("Your value is "+num);<br />
                                System.out.println("Absolute value is "+Math.abs(num));<br />
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