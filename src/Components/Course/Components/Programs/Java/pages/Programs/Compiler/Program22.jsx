import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program22() {

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
                            <p className='fs-5 fw-semibold'>22. Write a Java program to count the number of even and odd elements in a given array.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class CountEvenOdd&#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner scanner = new Scanner(System.in);<br />

                                System.out.print("Enter the size of the array: ");<br />
                                int size = scanner.nextInt();<br />

                                int[] arr = new int[size];<br />

                                System.out.println("Enter the elements of the array:");<br />
                                for (int i = 0; i &lt; size; i++) &#123;<br />
                                arr[i] = scanner.nextInt();<br />
                                &#125;<br />

                                int even = 0;<br />
                                int odd = 0;<br /><br />

                                for (int i = 0; i &lt; size; i++) &#123;<br />
                                if (arr[i] % 2 == 0) &#123;<br />
                                even++;<br />
                                &#125; else &#123;<br />
                                odd++;<br />
                                &#125;<br />
                                &#125;<br />
                                System.out.println("Number of even elements: " + even);<br />
                                System.out.println("Number of odd elements: " + odd);<br />
                                &#125;<br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Enter the size of the array: 5<br />
                                Enter the elements of the array:<br />
                                1<br />
                                2<br />
                                4<br />
                                6<br />
                                8<br />
                                Number of even elements: 4<br />
                                Number of odd elements: 1
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}