import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program61() {

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
                            <p className='fs-5 fw-semibold'>61. Write a Java program to display the n terms of odd natural number and their sum.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class OddNumbers&#123;<br />
                                public static void main(String args[])&#123;<br />
                                int i, n, sum = 0;<br />
                                System.out.print("Input number of terms is: ");<br />

                                java.util.Scanner input = new java.util.Scanner(System.in);<br />
                                n=input.nextInt();<br />

                                System.out.println ("\nThe odd numbers are :");<br />
                                for(i=1;i&lt;=n;i++)&#123;<br />
                                System.out.println (2*i-1);<br />
                                sum+=2*i-1;<br />
                                &#125;<br />

                                System.out.println ("The Sum of odd Natural Number upto " +n+" terms is: " +sum);<br />
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