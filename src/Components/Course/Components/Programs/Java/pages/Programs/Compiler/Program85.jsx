import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program85() {

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
                            <p className='fs-5 fw-semibold'>85. Write a Java program to test if an array contains a specific value.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class ArrayValue&#123;<br />
                                public static void main(String args[])&#123;<br />
                                int[] arr = &#123;1,2,3,4,5,6,7,8,9&#125;;<br />
                                int value = 5;<br />
                                int num = 0;<br />
                                for (int i : arr) &#123;<br />
                                if(i==value)&#123;<br />
                                num = 1;<br />
                                break;<br />
                                &#125;<br />
                                else&#123;<br />
                                num = 0;<br />
                                continue;<br />
                                &#125;<br />
                                &#125;<br />
                                if(num == 0)&#123;<br />
                                System.out.println("The array does not contain the value " + value);<br />
                                &#125;<br />
                                else&#123;<br />
                                System.out.println("The array contains the value " + value);<br />
                                &#125;<br />
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