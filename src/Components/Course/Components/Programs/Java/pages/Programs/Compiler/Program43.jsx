import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program43() {

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
                            <p className='fs-5 fw-semibold'>43. Java program to sum of N numbers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br/>
                                class SumOfN_Numbers&#123;<br/>
                                public static void main(String[] args) &#123;<br/>
                                int sum = 0;<br/>
                                Scanner Input = new Scanner (System.in);<br/>
                                System.out.println("Enter the number of terms you want sum");<br/>
                                int n=Input.nextInt();<br/>
                                int arr[] = new int[n];<br/>
                                System.out.println("enter the "+n+" numbers ");<br/>
                                for(int i=0;i&lt;n;i++)&#123;<br/>
                                System.out.print("Enter number "+(i+1)+" : ");<br/>
                                arr[i] = Input.nextInt();<br/>
                                &#125;<br/>

                                for(int i=0;i&lt;n;i++)&#123;<br/>
                                sum +=arr[i];<br/>
                                &#125;<br/>

                                System.out.println("sum of "+n+" numbers is "+sum);<br/>

                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Enter the number of terms you want sum<br/>
                                5<br/>
                                enter the 5 numbers<br/>
                                Enter number 1 : 12<br/>
                                Enter number 2 : 09<br/>
                                Enter number 3 : 33<br/>
                                Enter number 4 : 04<br/>
                                Enter number 5 : 58<br/>
                                sum of 5 numbers is 116
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}