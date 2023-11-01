import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java19() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Java OOPs Concepts</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                            <p>In this page, we will learn about the basics of OOPs. Object-Oriented Programming is a paradigm that provides many concepts, such as inheritance, data binding, polymorphism, etc.</p>
                            <p>Simula is considered the first object-oriented programming language. The programming paradigm where everything is represented as an object is known as a truly object-oriented programming language.</p>
                            <p>Smalltalk is considered the first truly object-oriented programming language.</p>
                            <p>The popular object-oriented languages are Java, C#, PHP, Python, C++, etc.</p>
                            <p>The main aim of object-oriented programming is to implement real-world entities, for example, object, classes, abstraction, inheritance, polymorphism, etc.</p>


                            <p>OOPs (Object-Oriented Programming System)</p>
                            <p>Object means a real-world entity such as a pen, chair, table, computer, watch, etc. Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies software development and maintenance by providing some concepts:</p>
                            <ul>
                                <li>Object</li>
                                <li>CLass</li>
                                <li>Inheritance</li>
                                <li>Polymorphism</li>
                                <li>Abstraction</li>
                                <li>Encapsulation</li>
                            </ul>

                            <p>Object</p>
                            <p>Any entity that has state and behavior is known as an object. For example, a chair, pen, table, keyboard, bike, etc. It can be physical or logical.</p>
                            <p>An Object can be defined as an instance of a class. An object contains an address and takes up some space in memory. Objects can communicate without knowing the details of each other's data or code. The only necessary thing is the type of message accepted and the type of response returned by the objects.</p>
                            <p>Example: A dog is an object because it has states like color, name, breed, etc. as well as behaviors like wagging the tail, barking, eating, etc.</p>


                            <p>Class</p>
                            <p>Collection of objects is called class. It is a logical entity.</p>
                            <p>A class can also be defined as a blueprint from which you can create an individual object. Class doesn't consume any space.</p>


                            <p>Inheritance</p>
                            <p>When one object acquires all the properties and behaviors of a parent object, it is known as inheritance. It provides code reusability. It is used to achieve runtime polymorphism.</p>


                            <p>Polymorphism</p>
                            <p>If one task is performed in different ways, it is known as polymorphism. For example: to convince the customer differently, to draw something, for example, shape, triangle, rectangle, etc.</p>
                            <p>In Java, we use method overloading and method overriding to achieve polymorphism.</p>
                            <p>Another example can be to speak something; for example, a cat speaks meow, dog barks woof, etc.</p>


                            <p>Abstraction</p>
                            <p>Hiding internal details and showing functionality is known as abstraction. For example phone call, we don't know the internal processing.</p>
                            <p>In Java, we use abstract class and interface to achieve abstraction.</p>


                            <p>Encapsulation</p>
                            <p>Binding (or wrapping) code and data together into a single unit are known as encapsulation. For example, a capsule, it is wrapped with different medicines.</p>
                            <p>A java class is the example of encapsulation. Java bean is the fully encapsulated class because all the data members are private here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}