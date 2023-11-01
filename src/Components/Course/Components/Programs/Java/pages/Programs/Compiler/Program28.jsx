import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program28() {

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
                            <p className='fs-5 fw-semibold'>28. Java Program to find area of rectangle.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class AreaOfRectangle&#123;<br />
                                public static void main(String args[]) &#123;  <br />
                                int l= 5; <br />
                                System.out.println("The value of length: "+l);<br />

                                int b= 10;<br />
                                System.out.println("The value of Breadth: "+b);<br />

                                int area=l*b;<br />
                                System.out.println("Area of Rectangle is: " + area);   <br />
                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                The value of length: 5<br />
                                The value of Breadth: 10<br />
                                Area of Rectangle is: 50
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}