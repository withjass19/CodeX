import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program30() {

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
                            <p className='fs-5 fw-semibold'>30. Java Program to find area of equilateral triangle.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4  p-3'>
                                class AreaOfEquilateralTriangle&#123;<br />
                                double area(double side)&#123;<br />
                                double a = (Math.sqrt(3)/4*(side*side));<br />
                                return a;<br />
                                &#125;<br />
                                &#125;<br />
                                class EquilateralTriangle&#123;<br />
                                public static void main(String a[])&#123;<br />
                                double side = 7;<br />
                                System.out.println("Side of triangle: "+side);<br />
                                AreaOfEquilateralTriangle obj = new AreaOfEquilateralTriangle();<br />
                                double ans = obj.area(side);<br />
                                System.out.println("Area of triangle is "+ ans);<br />
                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Side of triangle: 7.0<br />
                                Area of triangle is 21.217622392718745
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}