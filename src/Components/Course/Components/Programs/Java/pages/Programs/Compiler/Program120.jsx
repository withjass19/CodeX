import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program120() {

    return (
        <div>
            <div className="bg-black">
                <NavBar />
            </div>

            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-8" id='jass'>
                            <p className='fs-5 fw-semibold'>120. Write a Java method to compute the average of three numbers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class AverageOfThreeNumbers&#123;<br />
                                public static void main(String args[])&#123;<br />
                                java.util.Scanner input = new java.util.Scanner(System.in);<br />
                                System.out.println("enter first number: ");<br />
                                int num1 = input.nextInt();<br />
                                System.out.println("\nenter second number: ");<br />
                                int num2 = input.nextInt();<br />
                                System.out.println("\nenter third number: ");<br />
                                int num3 = input.nextInt();<br />
                                float avg =(num1+num2+num3)/3;<br />
                                System.out.println("\nAverage: "+avg);<br />
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