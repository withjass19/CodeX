import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program95() {

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
                            <p className='fs-5 fw-semibold'>95. Write a Java program to find the number of even and odd integers in a given array of integers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class EvenOddCounter &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] numbers = &#123;1, 2, 3, 4, 5, 6, 7, 8, 9, 10&#125;;<br />
                                int evenCount = 0;<br />
                                int oddCount = 0;<br />
                                for (int number : numbers) &#123;<br />
                                if (number % 2 == 0) &#123;<br />
                                evenCount++;<br />
                                &#125; else &#123;<br />
                                oddCount++;<br />
                                &#125;<br />
                                &#125;<br />
                                System.out.println("Number of even integers: " + evenCount);<br />
                                System.out.println("Number of odd integers: " + oddCount);<br />
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