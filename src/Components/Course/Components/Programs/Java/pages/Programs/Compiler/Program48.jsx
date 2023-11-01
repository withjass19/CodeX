import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program48() {

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
                            <p className='fs-5 fw-semibold'>48. Java Program To Calculate Batting Average.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br/>
                                class calculateBattingAverage&#123;<br/>
                                public static void main(String[] args) &#123;<br/>
                                Scanner scanner = new Scanner(System.in);<br/>

                                System.out.println("Enter the total number of hits:");<br/>
                                int totalHits = scanner.nextInt();<br/>

                                System.out.println("Enter the total number of at-bats:");<br/>
                                int totalAtBats = scanner.nextInt();<br/>

                                double battingAverage = Average(totalHits, totalAtBats);<br/>
                                System.out.println("The calculated batting average is: " + battingAverage);<br/>

                                scanner.close();<br/>
                                &#125;<br/>

                                private static double Average(int totalHits, int totalAtBats) &#123;<br/>
                                return (double) totalHits / totalAtBats;<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Enter the total number of hits:<br/>
                                7<br/>
                                Enter the total number of at-bats:<br/>
                                3<br/>
                                The calculated batting average is: 2.3333333333333335
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}