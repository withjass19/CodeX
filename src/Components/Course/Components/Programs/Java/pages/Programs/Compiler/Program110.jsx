import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program110() {

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
                            <p className='fs-5 fw-semibold'>110. Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class FactorialCalculator &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner scanner = new Scanner(System.in);<br />
                                System.out.print("Enter a number: ");<br />
                                int number = scanner.nextInt();<br />

                                long factorial = calculateFactorial(number);<br />

                                System.out.println("Factorial of " + number + " is " + factorial);<br />
                                &#125;<br />
                                public static long calculateFactorial(int n) &#123;<br />
                                if (n &lt; 0) &#123;<br />
                                return -1;<br />
                                &#125;<br />
                                if (n == 0 || n == 1) &#123;<br />
                                return 1;<br />
                                &#125;<br />
                                long result = 1;<br />
                                for (int i = 2; i &lt;= n; i++) &#123;<br />
                                result *= i;<br />
                                &#125;<br />
                                return result;<br />
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