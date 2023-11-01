import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program137() {

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
                            <p className='fs-5 fw-semibold'>137. Write a Java program to convert Roman number to an integer number.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                import java.util.HashMap;<br />
                                class RomanToInteger &#123;<br />
                                public static void main(String[] args) &#123;<br />
                                String roman = "MCMXCIV";<br />

                                int result = romanToInteger(roman);<br />

                                System.out.println("Roman numeral: " + roman);<br />
                                System.out.println("Integer equivalent: " + result);<br />
                                &#125;<br />

                                public static int romanToInteger(String s) &#123;<br />
                                HashMap&lt;Character, Integer&gt; romanValues = new HashMap();<br />
                                romanValues.put('I', 1);<br />
                                romanValues.put('V', 5);<br />
                                romanValues.put('X', 10);<br />
                                romanValues.put('L', 50);<br />
                                romanValues.put('C', 100);<br />
                                romanValues.put('D', 500);<br />
                                romanValues.put('M', 1000);<br />

                                int result = 0;<br />
                                int prevValue = 0;<br />

                                for (int i = s.length() - 1; i &gt;= 0; i--) &#123;<br />
                                int value = romanValues.get(s.charAt(i));<br />

                                if (value &lt; prevValue) &#123;<br />
                                result -= value;<br />
                                &#125; else &#123;<br />
                                result += value;<br />
                                &#125;<br />

                                prevValue = value;<br />
                                &#125;<br />

                                return result;<br />
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