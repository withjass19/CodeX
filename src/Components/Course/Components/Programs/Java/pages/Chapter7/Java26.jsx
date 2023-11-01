import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java26() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5" >
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Inheritance</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>Inheritance in Java is a mechanism in which one object acquires all the properties and behaviors of a parent object. It is an important part of OOPs (Object Oriented programming system).</p>
                            <p>The idea behind inheritance in Java is that you can create new classes that are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class. Moreover, you can add new methods and fields in your current class also.</p>
                            <p>Inheritance represents the IS-A relationship which is also known as a parent-child relationship.</p>


                            <p>Why use inheritance in java?</p>
                            <ul>
                                <li>For Method Overriding (so runtime polymorphism can be achieved).</li>
                                <li>For Code Reusability.</li>
                            </ul>

                            <p>Terms used in Inheritance</p>
                            <ul>
                                <li>Class: A class is a group of objects which have common properties. It is a template or blueprint from which objects are created.</li>
                                <li>Sub Class/Child Class: Subclass is a class which inherits the other class. It is also called a derived class, extended class, or child class.</li>
                                <li>Super Class/Parent Class: Superclass is the class from where a subclass inherits the features. It is also called a base class or a parent class.</li>
                                <li>Reusability: As the name specifies, reusability is a mechanism which facilitates you to reuse the fields and methods of the existing class when you create a new class. You can use the same fields and methods already defined in the previous class.</li>
                            </ul>

                            <p>Syntax:</p>
                            <p>class subclass_name extends SuperClass_name &#123;
                                &#92;&#92; code of the class goes here...
                                &#125;
                            </p>
                            <p>The extends keyword indicates that you are making a new class that derives from an existing class. The meaning of "extends" is to increase the functionality.</p>
                            <p>In the terminology of Java, a class which is inherited is called a parent or superclass, and the new class is called child or subclass.</p>


                            <p>Types of inheritance</p>
                            <p>On the basis of class, there can be three types of inheritance in java: single, multilevel and hierarchical.</p>
                            <p>In java programming, multiple and hybrid inheritance is supported through interface only. We will learn about interfaces later.</p>


                            <p>Single Inheritance</p>
                            <p>When a class inherits another class, it is known as a single inheritance. In the example given below, Dog class inherits the Animal class, so there is the single inheritance.</p>
                            <p>Example</p>

                            <p>Multilevel Inheritance</p>
                            <p>When there is a chain of inheritance, it is known as multilevel inheritance. As you can see in the example given below, BabyDog class inherits the Dog class which again inherits the Animal class, so there is a multilevel inheritance.</p>
                            <p>Example</p>

                            <p>Hierarchical Inheritance</p>
                            <p>When two or more classes inherits a single class, it is known as hierarchical inheritance. In the example given below, Dog and Cat classes inherits the Animal class, so there is hierarchical inheritance.</p>
                            <p>example</p>

                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}