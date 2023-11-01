import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program68() {

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
                            <p className='fs-5 fw-semibold'>68. Write a Java program to create a simple calculator.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class SimpleCalculator &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner input = new Scanner(System.in);<br />

                                System.out.print("Enter the first number: ");<br />
                                double num1 = input.nextDouble();<br />

                                System.out.print("Enter the second number: ");<br />
                                double num2 = input.nextDouble();<br />

                                System.out.println("Choose an operation:");<br />
                                System.out.println("1. Addition (+)");<br />
                                System.out.println("2. Subtraction (-)");<br />
                                System.out.println("3. Multiplication (*)");<br />
                                System.out.println("4. Division (/)");<br />

                                System.out.print("Enter the operation number: ");<br />
                                int operation = input.nextInt();<br />

                                double result;<br />

                                switch (operation) &#123;<br />
                                case 1:<br />
                                result = num1 + num2;<br />
                                System.out.println("Result: " + result);<br />
                                break;<br />
                                case 2:<br />
                                result = num1 - num2;<br />
                                System.out.println("Result: " + result);<br />
                                break;<br />
                                case 3:<br />
                                result = num1 * num2;<br />
                                System.out.println("Result: " + result);<br />
                                break;<br />
                                case 4:<br />
                                if (num2 != 0) &#123;<br />
                                result = num1 / num2;<br />
                                System.out.println("Result: " + result);<br />
                                &#125; else &#123;<br />
                                System.out.println("Error: Division by zero is not allowed.");<br />
                                &#125;<br />
                                break;<br />
                                default:<br />
                                System.out.println("Invalid operation.");<br />
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