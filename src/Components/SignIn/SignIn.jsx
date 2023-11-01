import React from 'react'
import './style.css'

export default function SignIn() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row" style={{ width: "100vw", height: "100vh" }}>
                    <div className="col-4 bg-info bg-black text-white p-5" >
                        <p className='fs-2 pt-5 fw-medium text-center'>CodeX</p>
                        <form action="" className='row g-3 p-4'>
                            <div className="col-md-12 mb-2">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control bg-black text-white" id="inputEmail4" />
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control bg-black text-white" id="inputPassword4" />
                            </div>
                            <div class="d-grid gap-2 col-12 mb-5">
                                <button class="btn btn-primary" type="submit">Sign In</button>
                            </div>
                            <div className="col-md-12 text-center pt-3">
                                <a href="/" className='link-primary link-underline-opacity-0'>Forgot password?</a>
                                <hr />
                            </div>
                            <div class="d-grid gap-2 col-12">
                                <button class="btn btn-dark" type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-8 bg-primary BackGround d-flex align-items-center justify-content-center">
                        <p className="fs-1 text-white">Let's create the future <strong>together.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}