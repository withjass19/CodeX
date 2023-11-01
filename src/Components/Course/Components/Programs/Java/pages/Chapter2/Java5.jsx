import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java5(){
    return(
        <div>
            <div className="container-fluid bgColor">
                <NavBar/>
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Structure of Java Program</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>Java is an object-oriented programming, platform-independent, and secure programming language that makes it popular. Using the Java programming language, we can develop a wide variety of applications. So, before diving in depth, it is necessary to understand the basic structure of Java program in detail. In this section, we have discussed the basic structure of a Java program. At the end of this section, you will able to develop the Hello world Java program, easily.</p>
                            <ul>
                                <li>Documentation Section</li>
                                <li>Package Statements</li>
                                <li>Import Statements</li>
                                <li>Interface Statements</li>
                                <li>Class Definitions</li>
                                <li>
                                    <pre>
                                        main method class
                                        <br/>
                                        &#123;
                                        <br/>
                                        &nbsp;&nbsp;&nbsp;main method definition
                                            <br/>
                                        &#125;
                                    </pre>
                                </li>
                            </ul>
                            

                            <p>Let's see which elements are included in the structure of a Java program. A typical structure of a Java program contains the following elements</p>
                            <ul>
                                <li>Documentation Section</li>
                                <li>Package Declaration</li>
                                <li>Import Statements</li>
                                <li>Interface Section</li>
                                <li>Class Definition</li>
                                <li>Class Variables and Variables</li>
                                <li>Main Method Class</li>
                                <li>Methods and Behaviors</li>
                            </ul>


                            <p className='fs-3 fw-medium mt-5'>Documentation Section</p>
                            <p>The documentation section is an important section but optional for a Java program. It includes basic information about a Java program. The information includes the author's name, date of creation, version, program name, company name, and description of the program. It improves the readability of the program. Whatever we write in the documentation section, the Java compiler ignores the statements during the execution of the program. To write the statements in the documentation section, we use comments. The comments may be single-line, multi-line, and documentation comments.</p>



                            <p className='fs-3 fw-medium mt-5'>Package Declaration</p>
                            <p>The package declaration is optional. It is placed just after the documentation section. In this section, we declare the package name in which the class is placed. Note that there can be only one package statement in a Java program. It must be defined before any class and interface declaration. It is necessary because a Java class can be placed in different packages and directories based on the module they are used. For all these classes package belongs to a single parent directory. We use the keyword package to declare the package name.</p>



                            <p className='fs-3 fw-medium mt-5'>Import Statements</p>
                            <p>The package contains the many predefined classes and interfaces. If we want to use any class of a particular package, we need to import that class. The import statement represents the class stored in the other package. We use the import keyword to import the class. It is written before the class declaration and after the package statement. We use the import statement in two ways, either import a specific class or import all classes of a particular package. In a Java program, we can use multiple import statements.</p>



                            <p className='fs-3 fw-medium mt-5'>Interface Section</p>
                            <p>It is an optional section. We can create an interface in this section if required. We use the interface keyword to create an interface. An interface is a slightly different from the class. It contains only constants and method declarations. Another difference is that it cannot be instantiated. We can use interface in classes by using the implements keyword. An interface can also be used with other interfaces by using the extends keyword.</p>



                            <p className='fs-3 fw-medium mt-5'>Class Definition</p>
                            <p>In this section, we define the class. It is vital part of a Java program. Without the class, we cannot create any Java program. A Java program may conation more than one class definition. We use the class keyword to define the class. The class is a blueprint of a Java program. It contains information about user-defined methods, variables, and constants. Every Java program has at least one class that contains the main() method.</p>



                            <p className='fs-3 fw-medium mt-5'>Class Variables and Variables</p>
                            <p>In this section, we define variables and constants that are to be used later in the program. In a Java program, the variables and constants are defined just after the class definition. The variables and constants store values of the parameters. It is used during the execution of the program. We can also decide and define the scope of variables by using the modifiers. It defines the life of the variables.</p>



                            <p className='fs-3 fw-medium mt-5'>Main Method Class</p>
                            <p>In this section, we define the main() method. It is essential for all Java programs. Because the execution of all Java programs starts from the main() method. In other words, it is an entry point of the class. It must be inside the class. Inside the main method, we create objects and call the methods. </p>



                            <p className='fs-3 fw-medium mt-5'>Methods and Behaviors</p>
                            <p>In this section, we define the functionality of the program by using the methods. The methods are the set of instructions that we want to perform. These instructions execute at runtime and perform the specified task.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}