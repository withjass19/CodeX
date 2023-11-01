import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java16(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>If Else Statements</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                           <p>The Java if statement is used to test the condition. It checks boolean condition: true or false. There are various types of if statement in Java.</p>
                           <ul>
                                <li>if statement</li>
                                <li>if-else statement</li>
                                <li>if-else-if ladder</li>
                                <li>nested if statement</li>
                           </ul>

                           <p>if Statement</p>
                           <p>The Java if statement tests the condition. It executes the if block if condition is true.</p>
                           <p>Syntex:</p>
                           <pre>
                            if(condition)&#123;
                                <br/>
                                &nbsp;&nbsp;&#92;&#92;code to be executed  
                                <br />
                                &#125;  
                           </pre>
                           {/* Img */}
                           {/* Examle */}



                           <p>if-else Statement</p>
                           <p>The Java if-else statement also tests the condition. It executes the if block if condition is true otherwise else block is executed.</p>
                           <p>Syntax:</p>
                           <pre>
                           if(condition)&#123;
                                <br/>
                                &nbsp;&nbsp;&#92;&#92;code to be executed  
                                <br />
                                &#125;
                                <br/>
                                else&#123;
                                <br/>
                                &nbsp;&nbsp;&#92;&#92;code to be executed
                                <br/>
                                &#125;
                           </pre>
                           {/* Img */}
                           {/* Examle */}


                           <p>Using Ternary Operator</p>
                           <p>We can also use ternary operator (? :) to perform the task of if...else statement. It is a shorthand way to check the condition. If the condition is true, the result of ? is returned. But, if the condition is false, the result of : is returned.</p>
                           {/* Exaample */}


                           <p>if-else-if ladder Statement</p>
                           <p>The if-else-if ladder statement executes one condition from multiple statements.</p>
                           <p>Syntax:</p>
                           <pre>
                           if(condition1)&#123;
                                <br/>
                                &nbsp;&nbsp;&#92;&#92;code to be executed if condition1 is true 
                                <br />
                                &#125;
                                <br/>
                                else if(condition2)&#123;
                                <br/>
                                &nbsp;&nbsp;&#92;&#92;code to be executed if condition2 is true
                                <br/>
                                &#125;
                                else if(condition3)&#123;
                                <br/>
                                &nbsp;&nbsp;&#92;&#92;code to be executed if condition3 is true
                                <br/>
                                &#125;
                                else&#123;
                                <br/>
                                &nbsp;&nbsp;&#92;&#92;code to be executed if all the conditions are false
                                <br/>
                                &#125;
                           </pre>
                           {/* Img */}
                           {/* Examle */}


                           <p>Nested if statement</p>
                           <p>The nested if statement represents the if block within another if block. Here, the inner if block condition executes only when outer if block condition is true.</p>
                           <p>Syntax:</p>
                           <pre>
                           if(condition)&#123;
                                <br/>
                                &nbsp;&nbsp;&#92;&#92;code to be executed  
                                <br />
                                &nbsp;&nbsp;if(condition)&#123;
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&#92;&#92;code to be executed  
                                <br />
                                &nbsp;&nbsp;&#125;
                                <br />
                                &#125; 
                           </pre>
                           {/* Img */}
                           {/* Examle */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}