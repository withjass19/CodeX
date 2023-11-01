import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program62() {

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
                            <p className='fs-5 fw-semibold'>62. Write a Java program to display the multiplication table of a given integer.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class MultiplicationTable&#123;<br />
                                public static void main(String args[])&#123;<br />
                                java.util.Scanner input = new java.util.Scanner(System.in);<br />
                                System.out.println("Enter number for multiplication table: ");<br />
                                int n = input.nextInt();<br />
                                for(int i = 1; i&lt;=10; i++)&#123;<br />
                                System.out.println(n+" X "+i+" = "+n*i);<br />
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