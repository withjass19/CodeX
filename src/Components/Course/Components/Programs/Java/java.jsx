import React from 'react'
import '../../../style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Img from '../../../../assets/images/java.png'
import NavBar from '../../../../Layouts/NavBar'
import Footer from '../../../../Layouts/Footer'
import AllCollapseExample from './Components/AllCollapseExample';
import Button from './Components/Button';
import Accordion from 'react-bootstrap/Accordion';
import { Programs } from './Components/BtnData'

function displayBtn(val) {
    return (
        <div>
            {/* <Button id={val.id} topic={val.question} link={val.link} /> */}
            <Button id={val.id} topic={val.question} link={val.link}></Button>
        </div>
    )
}

export default function Java() {
    return (
        <div>
            <div className="bgColor">
                <NavBar />

                <div className="container-fluid px-5">
                    <div className="container p-5">
                        <div className="row p-5">
                            <div className="col text-white text-center bg-info px-5 mx-5 rounded-4 bg-opacity-10">
                                <img className='mt-5' src={Img} alt="" srcset="" width="120rem" />
                                <h1 className='p-5 pt-3 mb-5'><b>Core Java</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container p-4">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-7 p-5 pb-3 text-center">
                            <img src={Img} alt="" srcset="" width="90rem" />
                            <p className='fs-2 fw-semibold p-2'>Core Java</p>
                        </div>
                        <div className="col-7">
                            <p className="fs-4 fw-medium">Overview</p>
                            <p className="fs-6 text-secondary">let's learn a little more about what you can do whit Java.</p>
                        </div>
                        <div className="col-7 mb-5">
                            <AllCollapseExample />
                        </div>

                        <div className="col-7 md-5">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Programs</Accordion.Header>
                                    <Accordion.Body>
                                        {
                                            Programs.map(displayBtn)
                                        }

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div >
    )
}