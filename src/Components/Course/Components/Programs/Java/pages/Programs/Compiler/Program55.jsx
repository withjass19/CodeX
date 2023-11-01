import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program55() {

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
                            <p className='fs-5 fw-semibold'>55. Write a Java Program to accept number of week’s day (1-7) and print name of the day.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class WeekDays&#123;<br />
                                public static void main(String[] args)&#123;<br />
                                java.util.Scanner input = new java.util.Scanner(System.in);<br />
                                int day;<br />
                                System.out.println("Enter the number of week's days(1-7): ");<br />
                                day=input.nextInt();<br />
                                switch (day) &#123;<br />
                                case 1:<br />
                                System.out.println("Sunday");<br />
                                break;<br />
                                case 2:<br />
                                System.out.println("Monday");<br />
                                break;<br />
                                case 3:<br />
                                System.out.println("Tuesday");<br />
                                break;<br />
                                case 4:<br />
                                System.out.println("Wednesday");<br />
                                break;<br />
                                case 5:<br />
                                System.out.println("Thursday");<br />
                                break;<br />
                                case 6:<br />
                                System.out.println("Friday");<br />
                                break;<br />
                                case 7:<br />
                                System.out.println("Saturday");<br />
                                break;<br />
                                default:<br />
                                System.out.println("Please enter right number.");<br />
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