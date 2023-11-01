import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program12() {

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
                            <p className='fs-5 fw-semibold'>12. Write a Java program to count the letters, spaces, numbers and other characters of an input string.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class TestInput&#123;<br />
                                public static void main(String[] args)&#123;<br />
                                String test = "Aa kiu, I swd skieo 236587. GH kiu: sieo?? 25.33";<br />
                                System.out.println("The string is : "+test);<br />
                                count(test);<br />
                                &#125;<br />

                                public static void count(String x)&#123;<br />
                                char[] ch = x.toCharArray();<br />
                                int letter = 0;<br />
                                int space = 0;<br />
                                int num = 0;<br />
                                int other = 0;<br />
                                for(int i = 0; i &lt; x.length(); i++)&#123;<br />
                                if(Character.isLetter(ch[i]))&#123;<br />
                                letter ++ ;<br />
                                &#125;<br />
                                else if(Character.isDigit(ch[i]))&#123;<br />
                                num ++ ;<br />
                                &#125;<br />
                                else if(Character.isSpaceChar(ch[i]))&#123;<br />
                                space ++ ;<br />
                                &#125;<br />
                                else&#123;<br />
                                other ++;<br />
                                &#125;<br />
                                &#125;<br />

                                System.out.println("letter: " + letter);<br />
                                System.out.println("space: " + space);<br />
                                System.out.println("number: " + num);<br />
                                System.out.println("other: " + other);<br />
                                &#125;  <br />
                                &#125;<br />
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                The string is : Aa kiu, I swd skieo 236587. GH kiu: sieo?? 25.33<br />
                                letter: 23<br />
                                space: 9<br />
                                number: 10<br />
                                other: 6
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}