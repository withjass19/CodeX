import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program37() {

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
                            <p className='fs-5 fw-semibold'>37. Java Program to find volume of cone.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4  p-3'>
                                class ValumeOfCone&#123;<br/>
                                double area(double radius, double height)&#123;<br/>
                                return (1/3 * Math.PI * radius * radius * height);<br/>
                                &#125;<br/>
                                &#125;<br/>
                                class Cone&#123;<br/>
                                public static void main(String a[])&#123;<br/>
                                double r = 2;<br/>
                                double h = 5;<br/>
                                System.out.println("Radius of Cone: "+r);<br/>
                                System.out.println("Height of Cone: "+h);<br/>
                                ValumeOfCone obj = new ValumeOfCone();<br/>
                                double ans = obj.area(r,h);<br/>
                                System.out.println("Valume of cone is "+ ans);<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Radius of Cone: 2.0<br/>
                                Height of Cone: 5.0<br/>
                                Valume of cone is 50.26548245743669
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}