import React from 'react'
import InfoImg from '../assets/images/Ellipse10.png'
import Instagram from '../assets/images/Instagram.png'
import Facebook from '../assets/images/Facebook.png'
import LinkedIn from '../assets/images/LinkedIn.png'

export default function InfoCard() {
    return (
        <div>
            <div class="card mb-3 p-3 BoxShadow bgColor" style={{ maxWidth: "570px" }}>
                <div class="rounded">
                    <div class="row g-0 bg-black bg-opacity-50 rounded">
                        <div class="col-md-5 text-center py-5 rounded-start">
                            <img src={InfoImg} class="rounded" alt="..." />
                            <div class="card-body">
                                <h3 class="card-title text-white">Jaspreet <br /> Singh</h3>
                                <p class="card-text text-white-50 py-1"><small class="text-white-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</small></p>
                                <img src={Instagram} class="p-0" alt="" />
                                <img src={Facebook} class="p-0" alt="" />
                                <img src={LinkedIn} class="p-0" alt="" />
                            </div>
                        </div>
                        <div class="col-md-7 rounded-end text-white">
                            <div class="card-body p-4">
                                <p class="fs-6">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                <p class="fs-6">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="fs-6">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}