import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program105() {

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
                            <p className='fs-5 fw-semibold'>105. Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class CalculatePercentage &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner scanner = new Scanner(System.in);<br />
                                System.out.print("Enter the number of subjects: ");<br />
                                int numSubjects = scanner.nextInt();<br />
                                int totalMarks = 0;<br />
                                double percentage;<br />

                                for (int i = 1; i &lt;= numSubjects; i++) &#123;<br />
                                System.out.print("Enter the marks for Subject " + i + ": ");<br />
                                int subjectMarks = scanner.nextInt();<br />
                                totalMarks += subjectMarks;<br />
                                &#125;<br />
                                percentage = (double) totalMarks / (numSubjects * 100) * 100;<br />

                                System.out.println("Total Marks: " + totalMarks);<br />
                                System.out.println("Percentage: " + percentage + "%");<br />
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