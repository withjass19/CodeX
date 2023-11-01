import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program130() {

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
                            <p className='fs-5 fw-semibold'>130. Write a Java method to displays prime numbers between 1 to 20.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class PrimeNumbers&#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int i, j;<br />
                                boolean isPrime;<br />
                                System.out.println("Prime numbers between 1 and 20 are:");<br />
                                for (i = 2; i &lt;= 20; i++) &#123;<br />
                                isPrime = true;<br />
                                for (j = 2; j &lt; i; j++) &#123;<br />
                                if (i % j == 0) &#123;<br />
                                isPrime = false;<br />
                                break;<br />
                                &#125;<br />
                                &#125;<br />
                                if (isPrime) &#123;<br />
                                System.out.println(i);<br />
                                &#125;<br />
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