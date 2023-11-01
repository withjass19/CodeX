import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program78() {

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
                            <p className='fs-5 fw-semibold'>78. Write a java program to remove a particular character from a string.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class RemoveCharacter&#123;<br />
                                public static void main(String args[])&#123;<br />
                                String str = "Hello World!";<br />
                                System.out.println("Original string: "+str);<br />
                                char ch = 'o';<br />
                                StringBuilder sb = new StringBuilder();<br />
                                for (int i = 0; i &lt; str.length(); i++) &#123;<br />
                                char c = str.charAt(i);<br />
                                if(c != ch)&#123;<br />
                                sb.append(c);<br />
                                &#125;      <br />
                                &#125;<br />
                                String result=sb.toString().trim();<br />
                                System.out.print("New string after removing "+result);<br />
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