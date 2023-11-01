import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program98() {

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
                            <p className='fs-5 fw-semibold'>98. Write a Java program to cyclically rotate a given array clockwise by one.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                            class CyclicRotation &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] array = &#123;1, 2, 3, 4, 5&#125;;<br />

                                cyclicallyRotateClockwise(array);<br />

                                System.out.println("Array after cyclic clockwise rotation:");<br />
                                printArray(array);<br />
                                &#125;<br />

                                public static void cyclicallyRotateClockwise(int[] array) &#123;<br />
                                if (array.length &lt; 2) &#123;<br />
                                return;<br />
                                &#125;<br />

                                int lastElement = array[array.length - 1];<br />

                                for (int i = array.length - 1; i &gt; 0; i--) &#123;<br />
                                array[i] = array[i - 1];<br />
                                &#125;<br />

                                array[0] = lastElement;<br />
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