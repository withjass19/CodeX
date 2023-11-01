import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program116() {

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
                            <p className='fs-5 fw-semibold'>116. Write a Java program to print out all Armstrong numbers between 1 to 600 using loop.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class ArmstrongNumbers &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                for (int number = 1; number &lt;= 600; number++) &#123;<br />
                                if (isArmstrongNumber(number)) &#123;<br />
                                System.out.println(number);<br />
                                &#125;<br />
                                &#125;<br />
                                &#125;<br />

                                public static boolean isArmstrongNumber(int number) &#123;<br />
                                int originalNumber, remainder, result = 0;<br />
                                int n = 0;<br />

                                originalNumber = number;<br />

                                for (originalNumber = number; originalNumber != 0; originalNumber /= 10) &#123;<br />
                                n++;<br />
                                &#125;<br />

                                originalNumber = number;<br />

                                while (originalNumber != 0) &#123;<br />
                                remainder = originalNumber % 10;<br />
                                result += Math.pow(remainder, n);<br />
                                originalNumber /= 10;<br />
                                &#125;<br />

                                return result == number;<br />
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