import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program21() {

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
                            <p className='fs-5 fw-semibold'>21. Write a Java program to swap the first and last elements of an array and create a new array.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class SwapArrayElements&#123;<br />
                                public static void main(String a[])&#123;<br />
                                int arr[] = &#123;1,2,3,4,3&#125;<br />

                                System.out.println("Before swap");<br />
                                for(int x: arr)&#123;<br />
                                System.out.print(x);<br />
                                &#125;<br />
                                System.out.println();<br />

                                int l = arr.length;<br />
                                int s = l-1;<br />

                                int temp = 0 ;<br />
                                temp = arr[0];<br />
                                arr[0]=arr[s];<br />
                                arr[s]=temp;<br />

                                System.out.println("\nAfter swapping");<br />
                                for (int j:arr)System.out.print(j + " ");<br />
                                &#125;<br />
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Before swap<br />
                                12343<br /><br />

                                After swapping<br />
                                3 2 3 4 1
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}