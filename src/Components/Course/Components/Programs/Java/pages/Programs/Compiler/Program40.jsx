import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program40() {

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
                            <p className='fs-5 fw-semibold'>40. Java program to find surface area of cube.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class AreaOfCube&#123;<br/>
                                double area(double s)&#123;<br/>
                                double a = 6*Math.pow(s,2);<br/>
                                return a;<br/>
                                &#125;<br/>
                                &#125;<br/>
                                class Cube&#123;<br/>
                                public static void main(String a[])&#123;<br/>
                                double s = 10;<br/>
                                System.out.println("side of CUbe: "+s);<br/>
                                AreaOfCube obj = new AreaOfCube();<br/>
                                double ans = obj.area(s);<br/>
                                System.out.println("Area of CUbe is "+ ans);<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                side of CUbe: 10.0<br/>
                                Area of CUbe is 600.0
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}