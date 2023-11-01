import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program7() {

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
                            <p className='fs-5 fw-semibold'>7. Write a Java program to convert a decimal number to binary numbers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class DecimalToBinaryNumber&#123;<br />
                                static void decToBinary(int n)<br />
                                &#123;<br />
                                for (int i = 3; i &#155;= 0; i--) &#123;<br />
                                int k = n &#155;&#155; i;<br />
                                if ((k & 1) &#155; 0)<br />
                                System.out.print("1");<br />
                                else<br />
                                System.out.print("0");<br />
                                &#125;<br />
                                &#125;<br />

                                public static void main(String[] args)<br />
                                &#123;<br />
                                int n = 1;<br />
                                System.out.println("Decimal - " + n);<br />
                                System.out.print("Binary - ");<br />
                                decToBinary(n);<br />
                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Decimal - 1 <br />
                                Binary - 0001
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}