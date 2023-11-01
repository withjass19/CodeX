import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program16() {

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
                            <p className='fs-5 fw-semibold'>16. Write a Java program to print the odd numbers from 1 to 20.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class PrintOddNumbers&#123;<br />
                                static void printOddNumbers(int n)&#123;<br />
                                System.out.println("Odd Numbers:");<br />
                                for(int i=1; i&lt;=n; i++)&#123;<br />
                                if (i%2 != 0)&#123;<br />
                                System.out.println(i);<br />
                                &#125;<br />
                                &#125;<br />
                                &#125;<br />

                                public static void main(String a[])&#123;<br />
                                printOddNumbers(20);<br />
                                &#125;<br />
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                1<br />
                                3<br />
                                5<br />
                                7<br />
                                9<br />
                                11<br />
                                13<br />
                                15<br />
                                17<br />
                                19
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}