import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program6() {

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
                            <p className='fs-5 fw-semibold'>6. Write a Java program to swap two variables.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class SwapTwoVariables&#123;<br />
                                public static void main(String a[])&#123;<br />

                                int x = 1, y = 2;<br />

                                System.out.println("Before swap");<br />
                                System.out.println("x = " + x + "\ny = " + y);<br />

                                int temp = x;<br />
                                x = y;<br />
                                y=temp;<br />

                                System.out.println("\n\nAfter swap");<br />
                                System.out.println("x = " + x + "\ny = " + y);<br />

                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Before swap
                                x = 1<br />
                                y = 2<br />

                                <br />
                                After swap<br />
                                x = 2<br />
                                y = 1
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}