import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program82() {

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
                            <p className='fs-5 fw-semibold'>82. Write a Java program to sum values of an array.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class SumOfElements&#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] num;<br />
                                int sum = 0;<br />
                                java.util.Scanner input=new java.util.Scanner(System.in);<br />
                                System.out.print("Enter the number of elements: ");<br />
                                int n=input.nextInt();<br />
                                num= new int[n];<br />
                                for(int i = 0; i &lt; n; i++) &#123;<br />
                                System.out.print("enter element "+(i+1)+": ");<br />
                                num[i]=input.nextInt();<br />
                                &#125;<br />
                                for(int i = 0; i &lt; n; i++)&#123;<br />
                                sum = sum + num[i];<br />
                                &#125;<br />
                                System.out.println("Sum of values: "+sum);<br />
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