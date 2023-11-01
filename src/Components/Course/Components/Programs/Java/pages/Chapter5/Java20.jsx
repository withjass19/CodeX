import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java20() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Object and class</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">
                          <p>In this page, we will learn about Java objects and classes. In object-oriented programming technique, we design a program using objects and classes.</p>
                          <p>An object in Java is the physical as well as a logical entity, whereas, a class in Java is a logical entity only.</p>


                          <p>What is Object</p>
                          <p>An entity that has state and behavior is known as an object e.g., chair, bike, marker, pen, table, car, etc. It can be physical or logical (tangible and intangible). The example of an intangible object is the banking system.</p>
                          <p>An object has three characteristics:</p>
                          <ul>
                            <li>State: represents the data (value) of an object.</li>
                            <li>Behavior: represents the behavior (functionality) of an object such as deposit, withdraw, etc.</li>
                            <li>Identity: An object identity is typically implemented via a unique ID. The value of the ID is not visible to the external user. However, it is used internally by the JVM to identify each object uniquely.</li>
                          </ul>
                          <p>For Example, Pen is an object. Its name is Reynolds; color is white, known as its state. It is used to write, so writing is its behavior.</p>
                          <p>An object is an instance of a class. A class is a template or blueprint from which objects are created. So, an object is the instance(result) of a class.</p>
                          <p>Object Definitions:</p>
                          <ul>
                            <li>An object is a real-world entity.</li>
                            <li>An object is a runtime entity.</li>
                            <li>The object is an entity which has state and behavior.</li>
                            <li>The object is an instance of a class.</li>
                          </ul>

                          <p>What is a class</p>
                          <p>A class is a group of objects which have common properties. It is a template or blueprint from which objects are created. It is a logical entity. It can't be physical.</p>
                          <p>A class in Java can contain:</p>
                          <ul>
                            <li>Fields</li>
                            <li>Methods</li>
                            <li>Constructors</li>
                            <li>Blocks</li>
                            <li>Nested class and interface</li>
                          </ul>
                          <p>Syntax:</p>
                          <p>
                          class class_name&123;<br/>  
    field;  
    <br/>
    method;  
    <br/>
    &#125;
                          </p>
                          {/* Example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}