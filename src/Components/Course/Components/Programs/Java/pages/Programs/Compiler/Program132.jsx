import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program132() {

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
                            <p className='fs-5 fw-semibold'>132. Write a Java method to find factorial using recursion in java.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class FactorialCalculator &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int number = 5;<br />
                                long factorial = Factorial(number);<br />

                                System.out.println("Factorial of " + number + " is: " + factorial);<br />
                                &#125;<br />

                                public static long Factorial(int n) &#123;<br />
                                if (n == 0 || n == 1) &#123;<br />
                                return 1;<br />
                                &#125; else &#123;<br />
                                return n * Factorial(n - 1);<br />
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