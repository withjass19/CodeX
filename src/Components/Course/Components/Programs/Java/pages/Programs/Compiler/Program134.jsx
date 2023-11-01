import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program134() {

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
                            <p className='fs-5 fw-semibold'>134. Write a Java program to round a float number to specified decimals.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.math.BigDecimal;<br />
                                class Decimals&#123;<br />
                                public static void main(String args[])&#123;<br />
                                float x = 123.45678f;<br />
                                System.out.println("Before rounding : " +x);<br />

                                BigDecimal result;<br />
                                int DECIMAL_PLACE = 2;<br />
                                BigDecimal num = new BigDecimal(Float.toString(x));<br />
                                num = num.setScale(DECIMAL_PLACE, BigDecimal.ROUND_HALF_UP);<br />
                                System.out.println("\nAfter Rounding: "+num+"\n");<br />
                                &#125;<br />
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Sum of Two numbers: 7
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}