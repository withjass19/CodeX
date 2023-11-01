import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program39() {

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
                            <p className='fs-5 fw-semibold'>39. Java program to find surface area of cylinder.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class AreaOfCylinder&#123;<br/>
                                double area(double r, double h)&#123;<br/>
                                double a = 2*Math.PI*r*h;<br/>
                                double b = 2*Math.PI*r*r;<br/>
                                return a+b;<br/>
                                &#125;<br/>
                                &#125;<br/>
                                class Cylinder&#123;<br/>
                                public static void main(String a[])&#123;<br/>
                                double r = 5;<br/>
                                double h = 10;<br/>
                                System.out.println("Radius of Cylinder: "+r);<br/>
                                System.out.println("Height of Cylinder: "+h);<br/>
                                AreaOfCylinder obj = new AreaOfCylinder();<br/>
                                double ans = obj.area(r,h);<br/>
                                System.out.println("Area of Cylinder is "+ ans);<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Radius of Cylinder: 14.0<br/>
                                Height of Cylinder: 20.0<br/>
                                Valume of Cylinder is 12315.043202071989
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}