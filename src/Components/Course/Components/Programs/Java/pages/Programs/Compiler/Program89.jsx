import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program89() {

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
                            <p className='fs-5 fw-semibold'>89. Write a Java program to find the common elements between two arrays.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Arrays;<br />
                                class CommonElementsInArrays &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] array1 = &#123;1, 2, 3, 4, 5&#125;;<br />
                                int[] array2 = &#123;3, 4, 5, 6, 7&#125;;<br />

                                int[] commonElements = findCommonElements(array1, array2);<br />

                                System.out.println("Array 1: " + Arrays.toString(array1));<br />
                                System.out.println("Array 2: " + Arrays.toString(array2));<br />
                                System.out.println("Common Elements: " + Arrays.toString(commonElements));<br />
                                &#125;<br />

                                public static int[] findCommonElements(int[] array1, int[] array2) &#123;<br />
                                int maxLength = Math.min(array1.length, array2.length);<br />
                                int[] result = new int[maxLength];<br />

                                int count = 0;<br />

                                for (int element : array1) &#123;<br />
                                if (containsElement(array2, element)) &#123;<br />
                                result[count] = element;<br />
                                count++;<br />
                                &#125;<br />
                                &#125;<br />
                                result = Arrays.copyOf(result, count);<br />

                                return result;<br />
                                &#125;<br />

                                public static boolean containsElement(int[] array, int element) &#123;<br />
                                for (int value : array) &#123;<br />
                                if (value == element) &#123;<br />
                                return true;<br />
                                &#125;<br />
                                &#125;<br />
                                return false;<br />
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