import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program41() {

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
                            <p className='fs-5 fw-semibold'>41. Java program to calculate average marks.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class AverageMarks&#123;<br/>
                                public static void main(String[] args) &#123;<br/>
                                java.util.Scanner input = new java.util.Scanner(System.in);<br/>
                                System.out.print("Enter the number of subjects: ");<br/>
                                int n=input.nextInt();<br/>

                                double[] mark=new double[n];<br/>

                                for(int i=0;i&lt;n;i++)&#123;<br/>
                                System.out.printf("Enter Marks %d : ",i+1);<br/>
                                mark[i]=input.nextDouble();<br/>
                                &#125;<br/>

                                double sum=0,average;<br/>

                                for (double m:mark)&#123;sum+=m;&#125;<br/>

                                average=(float)(sum/n);<br/>

                                System.out.println("Your Average marks is "+average);<br/>

                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Enter the number of subjects: 5<br/>
                                Enter Marks 1 : 56<br/>
                                Enter Marks 2 : 75<br/>
                                Enter Marks 3 : 89<br/>
                                Enter Marks 4 : 66<br/>
                                Enter Marks 5 : 78<br/>
                                Your Average marks is 72.80000305175781
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}