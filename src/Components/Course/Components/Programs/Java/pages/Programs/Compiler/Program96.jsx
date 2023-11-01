import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program96() {

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
                            <p className='fs-5 fw-semibold'>96. Write a Java program to get the difference between the largest and smallest values in an array of integers.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class ArrayDifference &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] array = &#123;12, 5, 9, 20, 3, 16, 8&#125;;<br />

                                int difference = findDifference(array);<br />

                                System.out.println("Array: " + arrayToString(array));<br />
                                System.out.println("Difference between largest and smallest values: " + difference);<br />
                                &#125;<br />

                                public static int findDifference(int[] array) &#123;<br />
                                if (array.length == 0) &#123;<br />
                                return 0;<br />
                                &#125;<br />

                                int min = array[0];<br />
                                int max = array[0];<br />

                                for (int value : array) &#123;<br />
                                if (value &lt; min) &#123;<br />
                                min = value;<br />
                                &#125; else if (value &gt; max) &#123;<br />
                                max = value;<br />
                                &#125;<br />
                                &#125;<br />

                                return max - min; <br />
                                &#125;<br />

                                public static String arrayToString(int[] array) &#123;<br />
                                StringBuilder result = new StringBuilder("[");<br />
                                for (int i = 0; i &lt; array.length; i++) &#123;<br />
                                result.append(array[i]);<br />
                                if (i &lt; array.length - 1) &#123;<br />
                                result.append(", ");<br />
                                &#125;<br />
                                &#125;<br />
                                result.append("]");<br />
                                return result.toString();<br />
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