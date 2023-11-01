import React from 'react'
import NavBar from '../../../../../../../Layouts/NavBar';
import Footer from '../../../../../../../Layouts/Footer';

export default function Program42() {

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
                            <p className='fs-5 fw-semibold'>42. Java program to check vowel or consonant.</p>
                            <p className='fs-6 fw-medium'>Code:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                class CheckAlphabets&#123;<br/>
                                public static void main(String[ ] arg)&#123;<br/>
                                java.util.Scanner sc=new java.util.Scanner(System.in);<br/>
                                System.out.println("Enter a character : ");<br/>
                                char ch=sc.next( ).charAt(0);<br/>

                                if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')&#123;<br/>
                                System.out.println("Entered character "+ch+" is  Vowel");<br/>
                                &#125;<br/>
                                else if((ch&gt;='a'&&ch&lt;='z')||(ch&gt;='A'&&ch&lt;='Z'))<br/>
                                System.out.println("Entered character "+ch+" is Consonant");<br/>
                                else<br/>
                                System.out.println("Not an alphabet");<br/>
                                &#125;<br/>
                                &#125;
                            </p>

                            <p className='fs-6 fw-medium pt-5'>Output:</p>
                            <p className='fw-normal border border-5 rounded-4 p-3'>
                                Enter a character :<br/>
                                A<br/>
                                Entered character A is  Vowel
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}