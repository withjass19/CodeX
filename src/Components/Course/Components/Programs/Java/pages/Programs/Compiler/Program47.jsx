import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program47() {

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
                            <p className='fs-5 fw-semibold'>47. Java Program to calculate compound interest.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class Calculate_Compound_Interest&#123;<br/>
                                double formula(double p, double r, double t)&#123;<br/>
                                double CI = p*(Math.pow((1+r/100),t));<br/>
                                return CI;<br/>
                                &#125;<br/>
                                &#125;<br/>

                                class CompoundInterest&#123;<br/>
                                public static void main(String args[]) &#123;<br/>
                                double p;<br/>
                                double r;<br/>
                                double t;<br/>
                                java.util.Scanner Input = new java.util.Scanner(System.in);<br/>
                                System.out.print("Enter principle: ");<br/>
                                p = Input.nextDouble();<br/>
                                System.out.print("\nEnter Rate: ");<br/>
                                r = Input.nextDouble();<br/>
                                System.out.print("\nEnter Time(In Year): ");<br/>
                                t = Input.nextDouble();<br/>

                                System.out.println("Principle is "+p+" , "+"Rate is "+r+" and time is "+t);<br/>

                                Calculate_Compound_Interest CI = new Calculate_Compound_Interest();<br/>
                                double ans = CI.formula(p,r,t);<br/>
                                System.out.println("Compound Interest: "+ans);<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Enter principle: 10<br/>


                                Enter Rate: 10000<br/>

                                Enter Time(In Year): 2<br/>
                                Principle is 10.0 , Rate is 10000.0 and time is 2.0<br/>
                                Compound Interest: 102010.0
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}