import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program52() {

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
                            <p className='fs-5 fw-semibold'>52. Write a Java program to take three numbers from the user and print the greatest number.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>

                                class LargestNumber&#123;
                                public static void main(String[] args)&#123;
                                java.util.Scanner input = new java.util.Scanner(System.in);
                                int num1,num2,num3;
                                System.out.println("Enter First number:");
                                num1=input.nextInt();
                                System.out.println("\nEnter Second number:");
                                num2=input.nextInt();
                                System.out.println("\nEnter third number:");
                                num3=input.nextInt();
                                System.out.println("\n\n");
                                if( num1 &gt;= num2 && num1 &gt;= num3)
                                System.out.println(num1 + " is the largest number.");

                                else if (num2 &gt;= num1 && num2 &gt;= num3)
                                System.out.println(num2 + " is the largest number.");

                                else
                                System.out.println(num3 + " is the largest number.");
                                &#125;
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