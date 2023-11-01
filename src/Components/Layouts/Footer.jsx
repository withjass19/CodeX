import React from 'react'

export default function Footer(){
    return(
        <div>
            <div className="continer-fluid text-white bg-dark p-5">
                <div className="container p-5">
                    <div className="row pt-3">
                        <div className="col-3">
                            <p class="fs-5 fw-bold">CodeX</p>
                            <p class="pe-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, provident?</p>
                        </div>
                        <div className="col-3">
                            <p class="fs-5 fw-bold">Usefull Links</p>
                            <p>Home</p>
                            <p>Courses</p>
                            <p>Blogs</p>
                            <p>About</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="col-3">
                            <p class="fs-5 fw-bold">Courses</p>
                            <p>Core Java</p>
                            <p>PHP</p>
                            <p>MySql</p>
                        </div>
                        <div className="col-3">
                            <p class="fs-5 fw-bold">Support</p>
                            <p>Help Center</p>
                            <p>Privacy Policy</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}