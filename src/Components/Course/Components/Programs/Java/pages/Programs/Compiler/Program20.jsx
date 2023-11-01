import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program20() {

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
                            <p className='fs-5 fw-semibold'>20. Write a Java program to compute the sum of the first 100 prime numbers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class SumPrime&#123;<br />
                                public static void main(String a[])&#123;<br />
                                int sum = 0;<br />
                                for(int i=2;i&lt;=100;i++)&#123;<br />
                                boolean flag=true;<br />
                                for(int j=2;j&lt;=i/2;j++)&#123;<br />
                                if(i%j==0)&#123;<br />
                                flag=false;<br />
                                break;<br />
                                &#125;<br />
                                &#125;<br />
                                if(flag)&#123;<br />
                                sum+=i;<br />
                                &#125;<br />
                                &#125;<br />
                                System.out.println(sum);<br />
                                &#125;<br />
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                            1060
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}