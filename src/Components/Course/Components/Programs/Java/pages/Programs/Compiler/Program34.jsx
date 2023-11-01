import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program34() {

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
                            <p className='fs-5 fw-semibold'>34. Java Program to find volume of sphere.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class ValumeOfSphere&#123;<br/>
                                double area(double radius)&#123;<br/>
                                return (4/3 * Math.PI * radius * radius * radius);<br/>
                                &#125;<br/>
                                &#125;<br/>
                                class Sphere&#123;<br/>
                                public static void main(String a[])&#123;<br/>
                                double r = 3;<br/>
                                System.out.println("Radius of Sphere: "+r);<br/>
                                ValumeOfSphere obj = new ValumeOfSphere();<br/>
                                double ans = obj.area(r);<br/>
                                System.out.println("Valume of Sphere is "+ ans);<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                            Radius of Sphere: 3.0<br/>
Valume of Sphere is 113.09733552923255
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}