import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program113() {

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
                            <p className='fs-5 fw-semibold'>113. Write a Java program to calculate HCF of Two given numbers using loop.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class HCFCalculator &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner scanner = new Scanner(System.in);<br />
                                System.out.print("Enter the first number: ");<br />
                                int number1 = scanner.nextInt();<br />

                                System.out.print("Enter the second number: ");<br />
                                int number2 = scanner.nextInt();<br />
                                int hcf = calculateHCF(number1, number2);<br />
                                System.out.println("HCF of " + number1 + " and " + number2 + " is " + hcf);<br />
                                &#125;<br />
                                public static int calculateHCF(int a, int b) &#123;<br />
                                while (b != 0) &#123;<br />
                                int temp = b;<br />
                                b = a % b;<br />
                                a = temp;<br />
                                &#125;<br />
                                return a;<br />
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