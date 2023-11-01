import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program49() {

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
                            <p className='fs-5 fw-semibold'>49. Java Pogram to Calculate Commission Percentage.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class Calculate_Commission&#123;<br/>
                                float formula(float cp, float a)&#123;<br/>
                                return ((cp/100)*a);<br/>
                                &#125;<br/>
                                &#125;<br/>

                                class CommissionValue&#123;<br/>
                                public static void main(String args[])&#123;<br/>
                                float cp;<br/>
                                float a;<br/>

                                java.util.Scanner Input = new java.util.Scanner(System.in);<br/>

                                System.out.println("Enter the commision percentage: ");<br/>
                                cp = Input.nextFloat();<br/>

                                System.out.println("Enter the Amount: ");<br/>
                                a = Input.nextFloat();<br/>

                                Calculate_Commission CA = new Calculate_Commission();<br/>
                                float ans = CA.formula(cp,a);<br/>

                                System.out.println("Commission amount: "+ans);<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Enter the commision percentage:<br/>
                                50<br/>
                                Enter the Amount:<br/>
                                10000<br/>
                                Commission amount: 5000.0
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}