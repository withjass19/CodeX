import React from 'react'
import './style.css'
import NavBar from '../Layouts/NavBar';
import Footer from '../Layouts/Footer';

export default function Contact() {
    return (
        <div>
            <div className='bgColor'>
                <NavBar />

                <div className="container-fluid p-5">
                    <div className="container p-5">
                        <div className="row text-white bg-info rounded-4 bg-opacity-10 p-5">
                            <div className="col-6">
                                <p className='fs-5 fw-bold text-primary'>Contact Us</p>
                                <p className='fs-2 fw-semibold'>We-d love to hear from you</p>
                                <div className='text-white col-5 p-4 ps-0 border-top'>
                                    <p className='fs-5 fw-semibold'>Support</p>
                                    <p className='mb-1 fw-light'>jaspreetmehra185@gmail.com</p>
                                    <p className='mb-1 fw-light'>+1 987 654 321</p>
                                    <p className='fw-light'>India</p>
                                </div>
                            </div>
                            <div className="col-6 bg-black p-5 rounded-4">
                                <p className='fs-2 fw-semibold'>Questions or Feedback?</p>
                                <p className='fs-6 fw-normal'>Fill out the from below and a CodeX team member will get back to you.</p>
                                <form action="" className="row g-3 pt-4">
                                    <div class="col-md-12">
                                        <label for="fname" class="form-label">First Name</label>
                                        <input type="text" class="form-control bg-black text-white" id='fname' aria-label="First name" />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="lname" class="form-label">Last Name</label>
                                        <input type="text" class="form-control bg-black text-white" id='lname' aria-label="Last name" />
                                    </div>
                                    <div className="col-md-12">
                                        <label for="inputEmail4" class="form-label">Email Address</label>
                                        <input type="email" class="form-control bg-black text-white" id="inputEmail4" />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="phn" class="form-label">Phone no</label>
                                        <input type="text" class="form-control bg-black text-white" id='phoneno' aria-label="Last name" />
                                    </div>
                                    <div class="form-floating col-md-12 pt-3">
                                        <textarea class="form-control bg-black text-white" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                        <label for="floatingTextarea2">Message</label>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            <small>By filling out this form and clicking submit, you acknowledge our 
                                                <span className='text-primary'> privacy policy.</span></small>
                                        </p>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-primary rounded-5 px-5" type='submit'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}