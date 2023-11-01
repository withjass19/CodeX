import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program29() {

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
                            <p className='fs-5 fw-semibold'>29. Java Program to find area of triangle.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class AreaOfTriangle&#123;<br />
                                double area(double height, double base)&#123;<br />
                                return 0.5*height*base;<br />
                                &#125;<br />
                                &#125;<br />
                                class Triangle&#123;<br />
                                public static void main(String a[])&#123;<br />
                                double h = 3;<br />
                                double b = 7;<br />
                                System.out.println("Height of triangle: "+h);<br />
                                System.out.println("Base of triangle: "+b);<br />
                                AreaOfTriangle obj = new AreaOfTriangle();<br />
                                System.out.println("Area of triangle is "+obj.area(h,b));<br />
                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Height of triangle: 3.0<br />
                                Base of triangle: 7.0<br />
                                Area of triangle is 10.5
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}