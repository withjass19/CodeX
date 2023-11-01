import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program97() {

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
                            <p className='fs-5 fw-semibold'>97. Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class SegregateZerosAndOnes &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] array = &#123;0, 1, 0, 1, 0, 1, 0, 0, 1, 1&#125;;<br />

                                segregateZerosAndOnes(array);<br />

                                System.out.println("Array after segregation: ");<br />
                                printArray(array);<br />
                                &#125;<br />

                                public static void segregateZerosAndOnes(int[] array) &#123;<br />
                                int left = 0;<br />
                                int right = array.length - 1;<br />

                                while (left &lt; right) &#123;<br />
                                while (array[left] == 0 && left &lt; right) &#123;<br />
                                left++;<br />
                                &#125;<br />

                                while (array[right] == 1 && left &lt; right) &#123;<br />
                                right--;<br />
                                &#125;<br />

                                if (left &lt; right) &#123;<br />
                                array[left] = 0;<br />
                                array[right] = 1;<br />
                                left++;<br />
                                right--;<br />
                                &#125;<br />
                                &#125;<br />
                                &#125;<br />

                                public static void printArray(int[] array) &#123;<br />
                                for (int i = 0; i &lt; array.length; i++) &#123;<br />
                                System.out.print(array[i] + " ");<br />
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