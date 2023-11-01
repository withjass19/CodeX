import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program57() {

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
                            <p className='fs-5 fw-semibold'>57. Write a Java program to input 5 numbers from keyboard and find their sum and average.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class FiveInput&#123;<br />
                                public static void main(String args[])&#123;<br />
                                java.util.Scanner sc=new java.util.Scanner(System.in);<br />
                                int num1,num2,num3,num4,num5;<br />
                                System.out.println("Enter first number: ");<br />
                                num1=sc.nextInt();<br />
                                System.out.println("\nEnter second number: ");<br />
                                num2 = sc.nextInt();<br />
                                System.out.println("\nEnter third number: ");<br />
                                num3 = sc.nextInt();<br />
                                System.out.println("\nEnter fourth number: ");<br />
                                num4 = sc.nextInt();<br />
                                System.out.println("\nEnter fifth number: ");<br />
                                num5 = sc.nextInt();<br />

                                int sum = num1+num2+num3+num4+num5;<br />
                                System.out.println("Sum: "+sum);<br />

                                double avg = sum/5;<br />
                                System.out.println("Average: "+avg);<br />
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