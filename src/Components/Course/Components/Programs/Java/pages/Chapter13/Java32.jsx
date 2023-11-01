import React from 'react'
import '../../../../../style.css'
import Img from '../../../../../../assets/images/java.png'
import NavBar from '../../../../../../Layouts/NavBar'
import Footer from '../../../../../../Layouts/Footer'

export default function Java32() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container-fluid px-5" >
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Event Handling</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-5">
                    <div className="row px-5 py-3 justify-content-center align-items-center">
                        <div className="col-10 py-2 px-5">  
                           <p>Changing the state of an object is known as an event. For example, click on button, dragging mouse etc. The java.awt.event package provides many event classes and Listener interfaces for event handling.</p>


                           <p>Event classes and Listener interfaces</p>
                           <table>
                            <thead>
                                <tr>
                                    <th>Event Classes</th>
                                    <th>Listener Interfaces</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ActionEvent</td>
                                    <td>	ActionListener</td>
                                </tr>
                                <tr>
                                    <td>MouseEvent</td>
                                    <td>	MouseListener and MouseMotionListener</td>
                                </tr>
                                <tr>
                                    <td>MouseWheelEvent</td>
                                    <td>MouseWheelListener</td>
                                </tr>
                                <tr>
                                    <td>KeyEvent</td>
                                    <td>KeyListener</td>
                                </tr>
                                <tr>
                                    <td>ItemEvent</td>
                                    <td>ItemListener</td>
                                </tr>
                                <tr>
                                    <td>TextEvent</td>
                                    <td>TextListener</td>
                                </tr>
                                <tr>
                                    <td>AdjustmentEvent</td>
                                    <td>AdjustmentListener</td>
                                </tr>
                                <tr>
                                    <td>WindowEvent</td>
                                    <td>WindowListener</td>
                                </tr>
                                <tr>
                                    <td>ComponentEvent</td>
                                    <td>ComponentListener</td>
                                </tr>
                                <tr>
                                    <td>ContainerEvent</td>
                                    <td>ContainerListener</td>
                                </tr>
                                <tr>
                                    <td>FocusEvent</td>
                                    <td>FocusListener</td>
                                </tr>
                            </tbody>
                           </table>


                           {/* <p>Steps to perform Event Handling</p>
                           <p>Following steps are required to perform event handling:</p>
                           <p>1. Register the component with the Listener</p>

                           <p>Registration Methods</p>
                           <p>For registering the component with the Listener, many classes provide the registration methods. For example:</p> */}

                           {/* Example */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}