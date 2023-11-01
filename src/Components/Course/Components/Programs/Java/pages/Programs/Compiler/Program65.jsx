import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program65() {

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
                            <p className='fs-5 fw-semibold'>65. Write a Java program that accepts three numbers and check All numbers are equal or not.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class CheckEqualNumber&#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner scanner = new Scanner(System.in);<br />
                                System.out.print("Enter the first number: ");<br />
                                int num1 = scanner.nextInt();<br />

                                System.out.print("Enter the second number: ");<br />
                                int num2 = scanner.nextInt();<br />

                                System.out.print("Enter the third number: ");<br />
                                int num3 = scanner.nextInt();<br />

                                if (num1 == num2 && num2 == num3) &#123;<br />
                                System.out.println("All three numbers are equal.");<br />
                                &#125; else &#123;<br />
                                System.out.println("The numbers are not equal.");<br />
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