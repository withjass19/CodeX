import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program79() {

    return (
        <div>
            <div className="bg-black">
                <NavBar />
            </div>

            <div className="container-fluid">
                {/* <div className="row bg- dark text-white" style={{width:"100vw", height:"10vh"}}>
                    
                </div> */}

                <div className="container py-5">client/src/Components/Course/Components/Programs/Java/pages/Programs/Compiler/Program2.jsx
                    <div className="row justify-content-center align-items-center">
                        <div className="col-8" id='jass'>
                            <p className='fs-5 fw-semibold'>79. Write a java program to remove a particular character from a string.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class ReverseString&#123;<br />
                                public static void main(String args[])&#123;<br />
                                String str = "live";<br />
                                java.lang.StringBuffer input = new java.lang.StringBuffer();<br />
                                input.append(str);<br />
                                System.out.println("Original Word: "+str);<br />
                                System.out.println("Reversed word: "+input.reverse());<br />
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