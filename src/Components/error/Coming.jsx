import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import NavBar from '../Layouts/NavBar';
import Footer from '../Layouts/Footer';

export default function Coming() {
    return (
        <div>
            <div className="container-fluid bgColor">
                <NavBar />
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-12 text-center text-white">
                            <p className='codex'>CodeX</p>
                            <p className='codexText'>Course Coming soon....</p>
                            <p className='px-5 mx-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi esse repudiandae blanditiis illum suscipit. Expedita praesentium eos tempora atque vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium animi consectetur cupiditate rem recusandae repudiandae dolores maxime possimus excepturi.</p>

                        </div>
                        <div className="col-12 p-5">
                            <div className="col-7 align">
                                <div class="input-group bg-white rounded-5 my-5">
                                    <input type="email" class="form-control rounded-start-5 ps-4 border-0" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-primary fw-medium rounded-5 px-5 py-3" type="button" id="button-addon2">Notify</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}