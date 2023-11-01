import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program4() {

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
                            <p className='fs-5 fw-semibold'>4. Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class Calculate&#123;<br />
                                static int SumTwoNumbers(int a, int b)&#123;<br />
                                return (a+b);<br />
                                &#125;<br />

                                static int SubstractTwoNumbers(int a, int b)&#123;<br />
                                return (a-b);<br />
                                &#125;<br />

                                static int MultiplyTwoNumbers(int a, int b)&#123;<br />
                                return (a*b);<br />
                                &#125;<br />

                                static int DivideTwoNumbers(int a, int b)&#123;<br />
                                return (a/b);<br />
                                &#125;<br />

                                static int RemainderTwoNumbers(int a, int b)&#123;<br />
                                return (a%b);<br />
                                &#125;<br />

                                public static void main(String a[])&#123;<br />
                                System.out.print("Sum of Two numbers: "+ SumTwoNumbers(6,5));<br />
                                System.out.print("\nSubstract of Two numbers: "+ SubstractTwoNumbers(6,5));<br />
                                System.out.print("\nMultiply of Two numbers: "+ MultiplyTwoNumbers(6,5));<br />
                                System.out.print("\nDivide Two numbers: "+ DivideTwoNumbers(6,5));<br />
                                System.out.print("\nRemaider of Two numbers: "+ RemainderTwoNumbers(6,5));<br />

                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Sum of Two numbers: 11 <br/>
                                Substract of Two numbers: 1 <br/>
                                Multiply of Two numbers: 30 <br/>
                                Divide Two numbers: 1 <br/>
                                Remaider of Two numbers: 1
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}