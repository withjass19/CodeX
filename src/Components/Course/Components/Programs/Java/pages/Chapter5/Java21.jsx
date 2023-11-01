import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java21() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Methods</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>In general, a method is a way to perform some task. Similarly, the method in Java is a collection of instructions that performs a specific task. It provides the reusability of code. We can also easily modify code using methods. In this section, we will learn what is a method in Java, types of methods, method declaration, and how to call a method in Java</p>


                            <p>What is a method</p>
                            <p>A method is a block of code or collection of statements or a set of code grouped together to perform a certain task or operation. It is used to achieve the reusability of code. We write a method once and use it many times. We do not require to write code again and again. It also provides the easy modification and readability of code, just by adding or removing a chunk of code. The method is executed only when we call or invoke it.</p>

                            <p>Method Declaration</p>
                            <p>The method declaration provides information about method attributes, such as visibility, return-type, name, and arguments. It has six components that are known as method header, as we have shown in the following figure.</p>
                            <p>Image??????</p>
                            <p>Method Signature: Every method has a method signature. It is a part of the method declaration. It includes the method name and parameter list.</p>
                            <p>Access Specifier: Access specifier or modifier is the access type of the method. It specifies the visibility of the method. Java provides four types of access specifier:</p>
                            <ul>
                                <li>Public: The method is accessible by all classes when we use public specifier in our application.</li>
                                <li>Private: When we use a private access specifier, the method is accessible only in the classes in which it is defined.</li>
                                <li>Protected: When we use protected access specifier, the method is accessible within the same package or subclasses in a different package.</li>
                                <li>Default: When we do not use any access specifier in the method declaration, Java uses default access specifier by default. It is visible only from the same package only.</li>
                            </ul>
                            <p>Return Type: Return type is a data type that the method returns. It may have a primitive data type, object, collection, void, etc. If the method does not return anything, we use void keyword.</p>
                            <p>Method Name: It is a unique name that is used to define the name of a method. It must be corresponding to the functionality of the method. Suppose, if we are creating a method for subtraction of two numbers, the method name must be subtraction(). A method is invoked by its name.</p>
                            <p>Parameter List: It is the list of parameters separated by a comma and enclosed in the pair of parentheses. It contains the data type and variable name. If the method has no parameter, left the parentheses blank.</p>
                            <p>Method Body: It is a part of the method declaration. It contains all the actions to be performed. It is enclosed within the pair of curly braces.</p>


                            <p>Naming a Method</p>
                            <p>While defining a method, remember that the method name must be a verb and start with a lowercase letter. If the method name has more than two words, the first name must be a verb followed by adjective or noun. In the multi-word method name, the first letter of each word must be in uppercase except the first word. For example:</p>
                            <p>Single-word method name: sum(), area()</p>
                            <p>Multi-word method name: areaOfCircle(), stringComparision()</p>
                            <p>It is also possible that a method has the same name as another method name in the same class, it is known as method overloading.</p>


                            <p>Types of Method</p>
                            <p>There are two types of methods in Java:</p>
                            <ul>
                                <li>Predefined Method</li>
                                <li>User-defined Method</li>
                            </ul>


                            <p>Predefined Method</p>
                            <p>In Java, predefined methods are the method that is already defined in the Java class libraries is known as predefined methods. It is also known as the standard library method or built-in method. We can directly use these methods just by calling them in the program at any point. Some pre-defined methods are length(), equals(), compareTo(), sqrt(), etc. When we call any of the predefined methods in our program, a series of codes related to the corresponding method runs in the background that is already stored in the library.</p>
                            <p>Each and every predefined method is defined inside a class. Such as print() method is defined in the java.io.PrintStream class. It prints the statement that we write inside the method. For example, print("Java"), it prints Java on the console.</p>
                            {/* Example */}

                            <p>User-defined Method</p>
                            <p>The method written by the user or programmer is known as a user-defined method. These methods are modified according to the requirement.</p>
                            {/* Example */}


                            <p>Static Method</p>
                            <p>A method that has static keyword is known as static method. In other words, a method that belongs to a class rather than an instance of a class is known as a static method. We can also create a static method by using the keyword static before the method name.</p>
                            <p>The main advantage of a static method is that we can call it without creating an object. It can access static data members and also change the value of it. It is used to create an instance method. It is invoked by using the class name. The best example of a static method is the main() method.</p>
                            {/* Example */}



                            <p>Instance Method</p>
                            <p>The method of the class is known as an instance method. It is a non-static method defined in the class. Before calling or invoking the instance method, it is necessary to create an object of its class. Let's see an example of an instance method.</p>
                            {/* Example */}
                            <p>There are two types of instance method:</p>
                            <ul>
                                <li><b>Accessor Method</b></li>
                                <li><b>Mutator Method</b></li>
                            </ul>

                            <p>Accessor Method: The method(s) that reads the instance variable(s) is known as the accessor method. We can easily identify it because the method is prefixed with the word get. It is also known as getters. It returns the value of the private field. It is used to get the value of the private field.</p>
                            {/* Example */}

                            <p>Mutator Method: The method(s) read the instance variable(s) and also modify the values. We can easily identify it because the method is prefixed with the word set. It is also known as setters or modifiers. It does not return anything. It accepts a parameter of the same data type that depends on the field. It is used to set the value of the private field.</p>
                            {/* Example */}


                            <p>Abstract Method</p>
                            <p>The method that does not has method body is known as abstract method. In other words, without an implementation is known as abstract method. It always declares in the abstract class. It means the class itself must be abstract if it has abstract method. To create an abstract method, we use the keyword abstract.</p>
                            <p>Syntax:</p>
                            <p>abstract void maehod_name();</p>
                            {/* Example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}