import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program67() {

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
                            <p className='fs-5 fw-semibold'>67. Write a Java program that determines a student’s grade.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class CalculateGrade &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner input = new Scanner(System.in);<br />

                                System.out.print("Enter the student's score (0-100): ");<br />
                                int score = input.nextInt();<br />

                                if (score &lt; 0 || score &gt; 100) &#123;<br />
                                System.out.println("Invalid score. Please enter a score between 0 and 100.");<br />
                                &#125; else &#123;<br />
                                char grade;<br />

                                if (score &gt;= 90) &#123;<br />
                                grade = 'A';<br />
                                &#125; else if (score &gt;= 80) &#123;<br />
                                grade = 'B';<br />
                                &#125; else if (score &gt;= 70) &#123;<br />
                                grade = 'C';<br />
                                &#125; else if (score &gt;= 60) &#123;<br />
                                grade = 'D';<br />
                                &#125; else &#123;<br />
                                grade = 'F';<br />
                                &#125;<br />
                                System.out.println("The student's grade is: " + grade);<br />
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