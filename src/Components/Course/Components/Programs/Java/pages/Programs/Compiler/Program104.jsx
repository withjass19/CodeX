import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program104() {

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
                            <p className='fs-5 fw-semibold'>104. Write a Java Program to Search Key Elements in an Array.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class SearchArrayElement &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] array = &#123;10, 20, 30, 40, 50, 60&#125;;<br />
                                int key = 40;<br />

                                int index = searchKeyElement(array, key);<br />

                                if (index != -1) &#123;<br />
                                System.out.println("Element " + key + " found at index " + index);<br />
                                &#125; else &#123;<br />
                                System.out.println("Element " + key + " not found in the array.");<br />
                                &#125;<br />
                                &#125;<br />

                                public static int searchKeyElement(int[] array, int key) &#123;<br />
                                for (int i = 0; i &lt; array.length; i++) &#123;<br />
                                if (array[i] == key) &#123;<br />
                                return i;<br />
                                &#125;<br />
                                &#125;<br />
                                return -1;<br />
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