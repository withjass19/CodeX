import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar'
import Footer from '../../../../../../../Layouts/Footer'
// import code1 from '../../../../../../../assets/images/code1.png'

export default function Program1() {

    return (
        <div>
            <div className="bg-black">
                <NavBar />
            </div>
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-8" id='jass'>
                            <p className='fs-5 fw-semibold'>1. Write a Java program to print ‘Hello World!’ on screen.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            {/* <img src={code1} className='rounded-3 bg-dark p-2 mt-3' alt="" srcset="" width='600px' /> */}
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class Hello&#123;<br />
                                public static void main(String a[])&#123;<br />
                                System.out.print("Hello World!");<br />
                                &#125;<br />
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Hello World!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}