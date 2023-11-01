import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program87() {

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
                            <p className='fs-5 fw-semibold'>87. Write a Java program to insert an element (specific position) into an array".</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Arrays;<br />
                                class InsertElementInArray &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] originalArray = &#123;1, 2, 3, 4, 5, 6&#125;;<br />
                                int insertElement = 99; <br />
                                int insertPosition = 3; <br />
                                if (insertPosition &lt; 0 || insertPosition &gt; originalArray.length) &#123;<br />
                                System.out.println("Invalid insert position.");<br />
                                return;<br />
                                &#125;<br />
                                int[] newArray = new int[originalArray.length + 1];<br />
                                for (int i = 0, j = 0; i &lt; originalArray.length; i++, j++) &#123;<br />
                                if (j == insertPosition) &#123;<br />
                                newArray[j] = insertElement;<br />
                                j++;<br />
                                &#125;<br />
                                newArray[j] = originalArray[i];<br />
                                &#125;<br />
                                if (insertPosition == originalArray.length) &#123;<br />
                                newArray[newArray.length - 1] = insertElement;<br />
                                &#125;<br />
                                System.out.println("Original Array: " + Arrays.toString(originalArray));<br />
                                System.out.println("Array after insertion: " + Arrays.toString(newArray));<br />
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