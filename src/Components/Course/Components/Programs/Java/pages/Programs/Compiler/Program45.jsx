import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program45() {

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
                            <p className='fs-5 fw-semibold'>45. Java Program to calculate electricity bill.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class ElectricityBill&#123;
                                public static void main(String a[])&#123;
                                float oldReading = 18;
                                float newReading = 118;
                                float units = newReading-oldReading;
                                float fixedCharges = 40;
                                float eneryDuty = 0.15f;
                                float bill=0;
                                if(units&lt;=100)&#123;
                                bill+=units*4;
                                &#125;
                                else&#123;
                                bill+=units*5;
                                &#125;
                                float totalBill = bill + fixedCharges + eneryDuty*units;
                                System.out.println(totalBill);
                                &#125;
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                            455.0
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}