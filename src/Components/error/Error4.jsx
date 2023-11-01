import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'

export default function Error4(){
    return(
        <div className='bgColor'>
            {/* <h1>404 Error</h1> */}
            <div className="container-fluid fluid py-5">
                <div className="container py-5">
                    <div className="row px-0">
                        <div className="col text-center text-white p-5">
                            <p className='errortext mb-3'>404</p>
                            <p className='errortext1 mb-5'>Error</p>
                            <p className='fw-medium errortext2 pt-5'>Oops!</p>
                            <p className='errortext3 mb-4 pb-4'>That page you're looking for can't be found.</p>
                            <button className="btn btn-outline-light border-2 rounded-0 px-5 py-2">Go to Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}