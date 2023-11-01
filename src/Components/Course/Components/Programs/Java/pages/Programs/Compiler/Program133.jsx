import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program133() {

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
                            <p className='fs-5 fw-semibold'>133. Write a Java program to reverse an integer number.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class ReverseNumber&#123;<br />
                                public static void main(String[] args)&#123;<br />
                                int sum = 0, rem;<br />

                                java.util.Scanner input = new java.util.Scanner(System.in);<br />

                                System.out.println("Enter the number");<br />
                                int num=input.nextInt();<br />

                                System.out.println("Original number: "+num);<br />

                                while(num&gt;0)&#123;<br />
                                rem = num%10;<br />
                                sum = sum*10+rem;<br />
                                num = num/10;<br />
                                &#125;<br />

                                System.out.println("Reverse of a Number is "+sum);<br />
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