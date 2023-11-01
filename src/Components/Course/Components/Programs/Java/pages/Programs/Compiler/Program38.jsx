import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program38() {

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
                            <p className='fs-5 fw-semibold'>38. Java program to find surface area of cuboid.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class AreaOfCuboid&#123;<br/>
                                double area(double l, double h, double b)&#123;<br/>
                                double a = 2*(l*b+b*h+h*l);<br/>
                                return a;<br/>
                                &#125;<br/>
                                &#125;<br/>
                                class Cuboid&#123;<br/>
                                public static void main(String a[])&#123;<br/>
                                double l = 12;<br/>
                                double b = 7;<br/>
                                double h = 5;<br/>
                                System.out.println("Length of Cuboid: "+l);<br/>
                                System.out.println("Width of Cuboid: "+b);<br/>
                                System.out.println("Height of Cuboid: "+h);<br/>
                                AreaOfCuboid obj = new AreaOfCuboid();<br/>
                                double ans = obj.area(l,b,h);<br/>
                                System.out.println("Area of Cylinder is "+ ans);<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Length of Cuboid: 12.0<br/>
                                Width of Cuboid: 7.0<br/>
                                Height of Cuboid: 5.0<br/>
                                Area of Cylinder is 358.0
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}