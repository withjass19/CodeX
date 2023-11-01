import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program50() {

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
                            <p className='fs-5 fw-semibold'>50. Java Pogram To Find Distance Between Two Points.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class DistanceFormula&#123;<br/>
                                int Formula(double x1, double x2, double y1, double y2)&#123;<br/>
                                int sol = (int)Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));<br/>
                                return sol;<br/>
                                &#125;<br/>
                                &#125;<br/>
                                class Points&#123;<br/>
                                public static void main(String a[])&#123;<br/>
                                double x1, x2, y1, y2;<br/>
                                x1 = 4;<br/>
                                x2 = 0;<br/>
                                y1 = 3;<br/>
                                y2 = 0;<br/>
                                DistanceFormula obj = new DistanceFormula();<br/>
                                int ans = obj.Formula(x1,x2,y1,y2);<br/>

                                System.out.println("Distance Between Two Points is "+ans);<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                            Distance Between Two Points is 5
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}