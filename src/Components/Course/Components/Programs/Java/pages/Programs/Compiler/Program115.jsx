import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program115() {

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
                            <p className='fs-5 fw-semibold'>115. Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class FindLargestAndSmallestNumbers &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner scanner = new Scanner(System.in);<br />

                                int number;<br />
                                int largest = Integer.MIN_VALUE; <br />
                                int smallest = Integer.MAX_VALUE;<br />

                                char choice;<br />

                                do &#123;<br />
                                System.out.print("Enter a number: ");<br />
                                number = scanner.nextInt();<br />
                                largest = Math.max(largest, number);<br />
                                smallest = Math.min(smallest, number);<br />

                                System.out.print("Do you want to enter another number? (y/n): ");<br />
                                choice = scanner.next().charAt(0);<br />

                                &#125; while (choice == 'y' || choice == 'Y');<br />

                                System.out.println("Largest number entered: " + largest);<br />
                                System.out.println("Smallest number entered: " + smallest);<br />
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