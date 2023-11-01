import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program24() {

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
                            <p className='fs-5 fw-semibold'>24. Write a Java program to check if a positive number is a palindrome or not.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class PalindromeNumber&#123;<br />
                                public static void main(String args[])&#123;<br />
                                int new_num = 0;<br />
                                java.util.Scanner input = new java.util.Scanner(System.in);<br />

                                System.out.print("Enter a positive number: ");<br />
                                int num = input.nextInt();<br />

                                int Original_num = num;<br />

                                if(num&lt;0)&#123;<br />
                                System.out.println("Please enter a positive number.");<br />
                                &#125;<br />
                                else&#123;<br />
                                while(num&gt;0)&#123;<br />
                                int digit = num % 10;<br />
                                new_num = new_num * 10 + digit;<br />
                                num /= 10;<br />
                                &#125;<br />
                                if(Original_num == new_num)&#123;<br />
                                System.out.println(Original_num+" is palindrome");<br />
                                &#125;<br />
                                else&#123;<br />
                                System.out.println(Original_num+" is not palindrome");<br />
                                &#125;<br />
                                &#125;<br />
                                &#125;<br />
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Enter a positive number: 121<br />
                                121<br />
                                121 is palindrome
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}