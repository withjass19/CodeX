import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program46() {

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
                            <p className='fs-5 fw-semibold'>46. Java Program To Calculate CGPA Percentage.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;
                                class CGPAPercentageCalculator &#123;
                                public static void main(String[] args) &#123;
                                Scanner input = new Scanner(System.in);

                                System.out.print("Enter the number of Subject: ");
                                int numCourses = input.nextInt();

                                double totalCGPA = 0.0;
                                double totalCredits = 0.0;

                                for (int i = 1; i &lt;= numCourses; i++) &#123;
                                System.out.printf("Enter CGPA for Subject %d: ", i);
                                double cgpa = input.nextDouble();

                                System.out.printf("Enter Credits for Subject %d: ", i);
                                int credits = input.nextInt();

                                totalCGPA += cgpa * credits;
                                totalCredits += credits;
                                &#125;

                                if (totalCredits == 0) &#123;
                                System.out.println("Error: Total credits cannot be zero.");
                                &#125; else &#123;
                                double cgpaPercentage = (totalCGPA / totalCredits) * 10;
                                System.out.printf("CGPA Percentage: %.2f%%\n", cgpaPercentage);
                                &#125;
                                &#125;
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                               
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}