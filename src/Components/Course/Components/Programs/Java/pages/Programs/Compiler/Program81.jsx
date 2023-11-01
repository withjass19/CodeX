import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program81() {

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
                            <p className='fs-5 fw-semibold'>81. Write a java program to count total number of lines from a string.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class LineCount &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner input = new Scanner(System.in);<br />

                                System.out.print("Enter a string with multiple lines: ");<br />
                                String inputString = input.nextLine();<br />

                                int lineCount = countLines(inputString);<br />

                                System.out.println("Total number of lines: " + lineCount);<br />
                                &#125;<br />

                                public static int countLines(String input) &#123;<br />
                                String[] lines = input.split("\n");<br />

                                return lines.length;<br />
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