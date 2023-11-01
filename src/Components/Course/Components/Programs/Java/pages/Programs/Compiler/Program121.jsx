import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program121() {

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
                            <p className='fs-5 fw-semibold'>121. Write a Java method to find the smallest number among three numbers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class SmallestNumber&#123;<br />
                                public static void main(String[] args)&#123;<br />
                                java.util.Scanner input = new java.util.Scanner(System.in);<br />
                                System.out.print("Input the first number: ");<br />
                                int x = input.nextInt();<br />
                                System.out.print("Input the Second number: ");<br />
                                int y = input.nextInt();<br />
                                System.out.print("Input the third number: ");<br />
                                int z = input.nextInt();<br />

                                int small = Math.min(Math.min(x,y),z);<br />
                                System.out.println("Smallest number is "+small);<br />
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