import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program90() {

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
                            <p className='fs-5 fw-semibold'>90. Write a Java program to find the duplicate values of an array of integer values.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.HashSet;<br />
                                import java.util.Arrays;<br />
                                class FindDuplicateValues &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[findDuplicateValues&#123;&#125;] array = &#123;1, 2, 3, 4, 2, 5, 6, 4, 7&#125;;<br />

                                int[] duplicateValues = findDuplicateValues(array);<br />

                                System.out.println("Original Array: " + Arrays.toString(array));<br />
                                System.out.println("Duplicate Values: " + Arrays.toString(duplicateValues));<br />
                                &#125;<br />

                                public static int[] findDuplicateValues(int[] array) &#123;<br />
                                HashSet&lt;Integer&gt; uniqueValues = new HashSet();<br />
                                HashSet&lt;Integer&gt; duplicateSet = new HashSet();<br />

                                for (int value : array) &#123;<br />
                                if (!uniqueValues.add(value)) &#123;<br />
                                duplicateSet.add(value);<br />
                                &#125;<br />
                                &#125;<br />

                                int[] result = new int[duplicateSet.size()];<br />
                                int index = 0;<br />
                                for (int value : duplicateSet) &#123;<br />
                                result[index++] = value;<br />
                                &#125;<br />

                                return result;<br />
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