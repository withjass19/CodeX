import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program99() {

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
                            <p className='fs-5 fw-semibold'>99. java program to print all unique element in an array.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.HashSet;<br />
                                class UniqueElementsInArray &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                int[] array = &#123;1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8&#125;;<br />

                                printUniqueElements(array);<br />
                                &#125;<br />

                                public static void printUniqueElements(int[] array) &#123;<br />
                                HashSet&lt;Integer&gt; uniqueElements = new HashSet();<br />

                                for (int element : array) &#123;<br />
                                if (!uniqueElements.contains(element)) &#123;<br />
                                uniqueElements.add(element);<br />
                                System.out.println(element);<br />
                                &#125;<br />
                                &#125;<br />
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