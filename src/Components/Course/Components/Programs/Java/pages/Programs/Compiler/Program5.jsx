import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program5() {

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
                            <p className='fs-5 fw-semibold'>5. Write a Java program that takes five numbers as input to calculate and print the average of the numbers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class Average&#123;<br />
                                public static void main(String a[])&#123;<br />
                                Scanner in = new Scanner(System.in);<br />

                                System.out.print("Input first number: ");<br />
                                int num1 = in.nextInt();<br />

                                System.out.print("Input second number: ");<br />
                                int num2 = in.nextInt();<br />

                                System.out.print("Input third number: ");<br />
                                int num3 = in.nextInt();<br />

                                System.out.print("Input fourth number: ");<br />
                                int num4 = in.nextInt();<br />

                                System.out.print("Enter fifth number: ");<br />
                                int num5 = in.nextInt();<br />

                                int avg = ((num1 + num2 + num3 + num4 + num5) / 5);<br />

                                System.out.println("Average of five numbers is: " + avg);<br />
                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Input first number: 10 <br />
                                Input second number: 20 <br />
                                Input third number: 30 <br />
                                Input fourth number: 40 <br />
                                Enter fifth number: 50 <br />
                                Average of five numbers is: 30
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}