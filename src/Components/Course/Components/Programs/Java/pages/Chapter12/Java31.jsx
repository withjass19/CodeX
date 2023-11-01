import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java31() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5" >
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>AWT</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">  
                           <p>Java AWT (Abstract Window Toolkit) is an API to develop Graphical User Interface (GUI) or windows-based applications in Java.</p>
                           <p>Java AWT components are platform-dependent i.e. components are displayed according to the view of operating system. AWT is heavy weight i.e. its components are using the resources of underlying operating system (OS).</p>
                           <p>The java.awt package provides classes for AWT API such as TextField, Label, TextArea, RadioButton, CheckBox, Choice, List etc.</p>
                           <p>The AWT tutorial will help the user to understand Java GUI programming in simple and easy steps.</p>


                           <p>Why AWT is platform independent?</p>
                           <p>Java AWT calls the native platform calls the native platform (operating systems) subroutine for creating API components like TextField, ChechBox, button, etc.</p>
                           <p>For example, an AWT GUI with components like TextField, label and button will have different look and feel for the different platforms like Windows, MAC OS, and Unix. The reason for this is the platforms have different view for their native components and AWT directly calls the native subroutine that creates those components.</p>
                           <p>In simple words, an AWT application will look like a windows application in Windows OS whereas it will look like a Mac application in the MAC OS.</p>


                           <p>AWT Hierarchy</p>
                           <p>The hierarchy of Java AWT classes are given below.</p>
                           {/* img */}


                           <p>Components</p>
                           <p>All the elements like the button, text fields, scroll bars, etc. are called components. In Java AWT, there are classes for each component as shown in above diagram. In order to place every component in a particular position on a screen, we need to add them to a container.</p>

                           <p>Container</p>
                           <p>The Container is a component in AWT that can contain another components like buttons, textfields, labels etc. The classes that extends Container class are known as container such as Frame, Dialog and Panel.</p>
                           <p>It is basically a screen where the where the components are placed at their specific locations. Thus it contains and controls the layout of components.</p>
                           <p>Types of containers:</p>
                           <p>There are four types of containers in Java AWT:</p>
                           <ol>
                            <li>Window</li>
                            <li>Panel</li>
                            <li>Frame</li>
                            <li>Dialog</li>
                           </ol>

                           <p>Window</p>
                           <p>The window is the container that have no borders and menu bars. You must use frame, dialog or another window for creating a window. We need to create an instance of Window class to create this container.</p>

                           <p>Panel</p>
                           <p>The Panel is the container that doesn't contain title bar, border or menu bar. It is generic container for holding the components. It can have other components like button, text field etc. An instance of Panel class creates a container, in which we can add components.</p>

                           <p>Frame</p>
                           <p>The Frame is the container that contain title bar and border and can have menu bars. It can have other components like button, text field, scrollbar etc. Frame is most widely used container while developing an AWT application.</p>


                           <p>Useful Methods of Component Class</p>
                           <table>
                            <thead>
                                <tr>
                                    <th>Method</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>public void add(Component c)</td>
                                    <td>Inserts a component on this component.</td>
                                </tr>
                                <tr>
                                    <td>public void setSize(int width,int height)</td>
                                    <td>Sets the size (width and height) of the component.</td>
                                </tr>
                                <tr>
                                    <td>public void setLayout(LayoutManager m)</td>
                                    <td>Defines the layout manager for the component.</td>
                                </tr>
                                <tr>
                                    <td>public void setVisible(boolean status)</td>
                                    <td>Changes the visibility of the component, by default false.</td>
                                </tr>
                            </tbody>
                           </table>

                           {/* Example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}