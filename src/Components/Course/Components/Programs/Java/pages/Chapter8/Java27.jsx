import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java27() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5" >
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Packages</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>A java package is a group of similar types of classes, interfaces and sub-packages.</p>
                            <p>Package in java can be categorized in two form, built-in package and user-defined package.</p>
                            <p>There are many built-in packages such as java, lang, awt, javax, swing, net, io, util, sql etc.</p>
                            <p>Here, we will have the detailed learning of creating and using user-defined packages.</p>


                            <p>Advantage of Package</p>
                            <ol>
                                <li>Java package is used to categorize the classes and interfaces so that they can be easily maintained.</li>
                                <li>Java package provides access protection.</li>
                                <li>Java package removes naming collision.</li>
                            </ol>

                            <p>Simple example of java package</p>
                            <p>The package keyword is used to create a package in java.</p>
                            <p>package mypack;<br />
                                public class Simple&#123; <br />
                                public static void main(String args[])&#123; <br />
                                System.out.println("Welcome to package");  <br />
                                &#125; <br />
                                &#125; 
                            </p>

                            <p>How to compile java packages</p>
                            <p>If you are not using any IDE, you need to follow the syntax given below:</p>
                            <p>javac -d directory javafilename</p>
                            <p>For example</p>
                            <p>javac -d . Simple.java</p>
                            <p>The -d switch specifies the destination where to put the generated class file. You can use any directory name like /home (in case of Linux), d:/abc (in case of windows) etc. If you want to keep the package within the same directory, you can use . (dot).</p>

                            <p>How to run java package program</p>
                            <p>You need to use fully qualified name e.g. mypack.Simple etc to run the class.</p>
                            <p><b>To Compile:</b> javac -d . Simple.java</p>
                            <p><b>To Run: </b>java mypack.Simple</p>
                            <p>Output: Welcome to package</p>
                            <p>The -d is a switch that tells the compiler where to put the class file i.e. it represents destination. The . represents the current folder.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}