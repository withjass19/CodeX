import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program102() {

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
                            <p className='fs-5 fw-semibold'>102. Write a Java Program to Sort Names in an Alphabetical Order.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class SortingAlphabeticalOder&#123;<br />
                                public static void main(String args[])&#123;<br />
                                String names[] = &#123;"Sourabh", "Anoop", "Harsh", "Alok", "Tanuj"&#125;;<br />
                                java.util.Arrays.sort(names);<br />
                                System.out.println("The names in alphabetical order are: ");<br />
                                for (int i = 0; i &lt; names.length; i++) &#123;<br />
                                System.out.println(names[i]);  <br />
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