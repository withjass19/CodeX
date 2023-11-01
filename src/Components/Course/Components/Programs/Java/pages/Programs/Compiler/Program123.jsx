import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program123() {

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
                            <p className='fs-5 fw-semibold'>123. Write a Java method to count all vowels in a string.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class VowelCount &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                String inputString = "This is a sample string with vowels.";<br />
                                int vowelCount = countVowels(inputString);<br />
                                System.out.println("Vowel count: " + vowelCount);<br />
                                &#125;<br />

                                public static int countVowels(String input) &#123;<br />
                                input = input.toLowerCase();<br />
                                int count = 0;<br />
                                for (int i = 0; i &lt; input.length(); i++) &#123;<br />
                                char c = input.charAt(i);<br />
                                if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') &#123;<br />
                                count++;<br />
                                &#125;<br />
                                &#125;<br />
                                return count;<br />
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