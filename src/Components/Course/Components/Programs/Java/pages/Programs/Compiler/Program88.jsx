import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program88() {

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
                            <p className='fs-5 fw-semibold'>88. Write a Java program to reverse an array of integer values.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class ReverseArray &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] originalArray = &#123;1, 2, 3, 4, 5&#125;;<br />
                                int[] reversedArray = reverseIntArray(originalArray);<br />

                                System.out.print("Original Array: ");<br />
                                printIntArray(originalArray);<br />

                                System.out.print("Reversed Array: ");<br />
                                printIntArray(reversedArray);<br />
                                &#125;<br />
                                public static int[] reverseIntArray(int[] arr) &#123;<br />
                                int length = arr.length;<br />
                                int[] reversed = new int[length];<br />
                                for (int i = 0; i &lt; length; i++) &#123;<br />
                                reversed[i] = arr[length - 1 - i];<br />
                                &#125;<br />
                                return reversed;<br />
                                &#125;<br />
                                public static void printIntArray(int[] arr) &#123;<br />
                                for (int num : arr) &#123;<br />
                                System.out.print(num + " ");<br />
                                &#125;<br />
                                System.out.println();<br />
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