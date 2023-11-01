import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program77() {

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
                            <p className='fs-5 fw-semibold'>77. Write a java program to print current date and time in the specified format.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.Scanner;<br />
                                class CharacterAtIndex &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                Scanner input = new Scanner(System.in);<br />

                                System.out.print("Enter a string: ");<br />
                                String inputString = input.nextLine();<br />

                                System.out.print("Enter the index to get the character: ");<br />
                                int index = input.nextInt();<br />

                                if (index &gt;= 0 && index &lt; inputString.length()) &#123;<br />
                                char character = inputString.charAt(index);<br />
                                System.out.println("Character at index " + index + " is: " + character);<br />
                                &#125; else &#123;<br />
                                System.out.println("Invalid index. Please check the index value.");<br />
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