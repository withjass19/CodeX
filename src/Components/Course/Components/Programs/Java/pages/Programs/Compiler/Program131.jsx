import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program131() {

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
                            <p className='fs-5 fw-semibold'>131. Write a Java method to find GCD and LCM of Two Numbers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class GCDandLCMCalculator &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int num1 = 24;<br />
                                int num2 = 36;<br />

                                int gcd = findGCD(num1, num2);<br />
                                int lcm = findLCM(num1, num2);<br />

                                System.out.println("GCD of " + num1 + " and " + num2 + " is " + gcd);<br />
                                System.out.println("LCM of " + num1 + " and " + num2 + " is " + lcm);<br />
                                &#125;<br />
                                public static int findGCD(int a, int b) &#123;<br />
                                if (b == 0) &#123;<br />
                                return a;<br />
                                &#125;<br />
                                return findGCD(b, a % b);<br />
                                &#125;<br />
                                public static int findLCM(int a, int b) &#123;<br />
                                return (a * b) / findGCD(a, b);<br />
                                &#125;<br />
                                &#125;<br />
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