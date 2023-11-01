import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program32() {

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
                            <p className='fs-5 fw-semibold'>32. Java Program to find area of parallelogram.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class Parallelogram&#123;<br/>
                                public static void main(String a[])&#123;<br/>
                                double b = 30;<br/>
                                double h = 40;<br/>
                                System.out.println("Base of parallelogram is "+b);<br/>
                                System.out.println("Height of parallelogram is "+h);<br/>
                                System.out.println("Area of parallelogram is "+(b*h));<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Base of parallelogram is 30.0<br/>
                                Height of parallelogram is 40.0<br/>
                                Area of parallelogram is 1200.0<br/>
                                Side of triangle: 12.0<br/>
                                Area of Rhombus is 36.0
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}