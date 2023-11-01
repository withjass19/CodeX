import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program91() {

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
                            <p className='fs-5 fw-semibold'>91. Write a Java program to convert an array to ArrayList.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.ArrayList;<br />
                                import java.util.Arrays;<br />
                                class ArrayToArrayList &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                String[] array = &#123;"apple", "banana", "cherry", "date"&#125;;<br />

                                ArrayList&lt;String&gt; arrayList = convertArrayToArrayList(array);<br />
                                System.out.println("ArrayList: " + arrayList);<br />
                                &#125;<br />

                                public static &lt;T&gt; ArrayList&lt;T&gt; convertArrayToArrayList(T[] array) &#123;<br />
                                ArrayList&lt;T&gt; arrayList = new ArrayList(Arrays.asList(array));<br />

                                return arrayList;<br />
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