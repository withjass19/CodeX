import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program53() {

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
                            <p className='fs-5 fw-semibold'>53. Write a Java program to find the number of days in a month.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class DaysInMonth &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner input = new Scanner(System.in);<br />

                                System.out.print("Enter a month (1-12): ");<br />
                                int month = input.nextInt();<br />

                                System.out.print("Enter a year: ");<br />
                                int year = input.nextInt();<br />

                                int daysInMonth = getDaysInMonth(month, year);<br />

                                if (daysInMonth == -1) &#123;<br />
                                System.out.println("Invalid month input. Please enter a number between 1 and 12.");<br />
                                &#125; else if (daysInMonth == -2) &#123;<br />
                                System.out.println("Invalid year input. Please enter a positive year.");<br />
                                &#125; else &#123;<br />
                                System.out.println("Number of days in the selected month: " + daysInMonth);<br />
                                &#125;<br />
                                &#125;<br />

                                public static int getDaysInMonth(int month, int year) &#123;<br />
                                if (month &lt; 1 || month &gt; 12) &#123;<br />
                                return -1;<br />
                                &#125;<br />

                                if (year &lt; 1) &#123;<br />
                                return -2; <br />
                                &#125;<br />

                                switch (month) &#123;<br />
                                case 4:<br />
                                case 6:<br />
                                case 9:<br />
                                case 11:<br />
                                return 30;<br />
                                case 2:<br />
                                if (isLeapYear(year)) &#123;<br />
                                return 29;<br />
                                &#125; else &#123;<br />
                                return 28;<br />
                                &#125;<br />
                                default:<br />
                                return 31;<br />
                                &#125;<br />
                                &#125;<br />

                                public static boolean isLeapYear(int year) &#123;<br />
                                return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);<br />
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