import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program101() {
    return (
        <div>
            <div className="bg-black">
                <NavBar />
            </div>

            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-8" id='jass'>
                            <p className='fs-5 fw-semibold'>101. Write a Java Program to Sort the Array in an Descending Order.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Arrays;<br />
                                import java.util.Collections;<br />
                                class SortArrayDescending &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Integer[] array = &#123;10, 5, 8, 1, 7, 4&#125;;<br />

                                Arrays.sort(array);<br />

                                Collections.reverse(Arrays.asList(array));<br />

                                System.out.println("Array in descending order: " + Arrays.toString(array));<br />
                                &#125;<br />
                                &#125;<br />

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