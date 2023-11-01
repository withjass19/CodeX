import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program8() {

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
                            <p className='fs-5 fw-semibold'>8. Write a Java program to convert a binary number to decimal number.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4  p-3'>
                                class BinaryToDecimal<br />
                                &#123;<br />
                                public static void main(String argsp[]) throws NumberFormatException<br />
                                &#123;<br />
                                java.util.Scanner sc = new java.util.Scanner(System.in);<br />
                                System.out.print("Enter your binary number : ");<br />
                                String binary=sc.next();<br />

                                int decimal=Integer.parseInt(binary,2);<br />

                                System.out.println("Decimal number for Binary "+binary+" is "+decimal);<br />
                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                            Enter your binary number : 1001001 <br/>
Decimal number for Binary 1001001 is 73
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}