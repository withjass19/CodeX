import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program54() {

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
                            <p className='fs-5 fw-semibold'>54. Write a Java program to test a number is positive or negative.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class TestNumber&#123;<br />
                                public static void main(String args[])&#123;<br />
                                int num;<br />
                                java.util.Scanner sc = new java.util.Scanner(System.in);<br />
                                System.out.println("Enter a number: ");<br />
                                num=sc.nextInt();<br />
                                if(num &gt; 0)&#123;<br />
                                System.out.println(num+" is positive.");<br />
                                &#125;<br />
                                else if(num &lt; 0)&#123;<br />
                                System.out.println(num+" is negative.");<br />
                                &#125;<br />
                                else&#123;<br />
                                System.out.println(num+" is zero.");<br />
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