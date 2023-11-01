import React from 'react'
import AboutImg from '../../assets/images/unified-about-us-dandb.jpg'
import CourseCard from './CourseCard'
import CardData from './CardData'
import InfoCard from '../../Layouts/InfoCard'
import Img from '../../assets/images/sa.jpg'
import InfoImg from '../../assets/images/Ellipse10.png'

function displayCards(val) {
    return (
        <div>
            <li class="list-group-item m-4 rounded-4 bg-black bg-opacity-25 border-0">
                <CourseCard
                    CardImg={val.image}
                    title={val.name}
                    link={val.link}
                />
            </li>

        </div>
    );
}

export default function main() {
    return (
        <div>
            {/* About */}
            <div className="container-fluid py-5 mt-5">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-5">
                            <p class="fs-6 fw-bold mb-0 text-primary">About Us</p>
                            <p class="fs-2 fw-bold mb-3">Welcome to the CodeX</p>
                            <p>CodeX is a community of developers and tech enthusiasts who are passionate about learning, sharing knowledge and building innov
                                CodeX is a community of developers, designers and tech enthusiasts who share their knowledge and skills with each other
                                CodeX is a community of developers and tech enthusiasts who are passionate about coding, learning new technologies.</p>
                            <p class="pt-3">
                                <i class="fas fa-check-square CheckColor fs-5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </p>
                            <p>
                                <i class="fas fa-check-square CheckColor fs-5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </p>
                            <p>
                                <i class="fas fa-check-square CheckColor fs-5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </p>
                            <p>
                                <i class="fas fa-check-square CheckColor fs-5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </p>
                            {/* <p>
                            <i class="fas fa-check-square CheckColor"></i>
                            &nbsp; &nbsp;&nbsp;<span><strong>&nbsp;CodeX is a platform for students and teachers alike. It provides an
                                &nbsp;&nbsp;CodeX is a community of developers, designers and tech enthusiasts who are passionate about learning and
                                &nbsp; &nbsp;&nbsp;<span><strong>Codex is a platform for students and teachers alike. It provides an easy way
                                    &nbsp;&nbsp;CodeX is a platform where you can learn, practice and compete in coding challenges.
                                    We are a group of passionate developers and designers who believe in creating innovative solutions.
                                    We are a group of passionate developers and designers who love coding, building websites and creating digital products.
                                    &nbsp;&nbsp;CodeX is a platform where you can learn, share and grow your skills.
                                    &nbsp;&nbsp;CodeX is a community of developers and tech enthusiasts who are passionate about coding, learning new skills
                                    &nbsp; &nbsp;&nbsp;<span><strong>Codex is a platform that helps you learn programming languages.</strong></span>&nbsp;We are a group of students passionate about coding and technology.
                            </p> */}
                            {/* <p>
                                <i class="fas fa-check-square CheckColor"></i>
                                    We aim at providing you with an opportunity for learning, developing your skills in programming languages like C++, Java or Python.<br/><br/>
                                    Our mission is to provide quality educational resources for beginners, intermediate learners and professionals alike.
                                    We aim at providing you with an opportunity for learning, sharing knowledge & building your career in tech.<br/><br/>
                                    Our mission is to provide you with quality educational resources,
                                    tutorials, projects, and much more on web development.
                                    <br/>
                                    </p>    */}
                        </div>
                        <div className="col-lg-7 d-flex justify-content-end align-items-center">
                            <img src={AboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Courses */}
            <div className="container-fluid p-5 mt-5 bgColor1">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-12 text-white text-center">
                            <p class="fs-5 fw-medium mb-0">Popular Courses</p>
                            <p class="fs-1 fw-bolder mb-5">Choose Our Top Courses</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-8 d-flex">
                            {/* CardImg */}
                            {/* title */}
                            {/* <CourseCard/> */}
                            <ul class="list-group list-group-horizontal-lg list-group-horizontal-lg">
                                {CardData.map(displayCards)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instructor */}
            <div className="container-fluid p-5">
                <div className="container p-5">
                    <div className="row p-5">
                        <div className="col-12 p-4 text-center">
                            <p class="fs-5 fw-medium mb-1">WHO'S BEHIND</p>
                            <p class="h1 fw-bolder mb-3">Meet the instructor</p>
                            <p class="px-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minima illo consectetur, et necessitatibus hic voluptatum doloremque numquam aut beatae blanditiis inventore neque porro expedita, saepe architecto? Temporibus, expedita debitis.</p>
                        </div>
                        <div className="col-12 p-5 d-flex align-items-center justify-content-center">
                            <InfoCard />
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="container-fluid p-5 bgColor text-white">
                <div className="contianer p-5 pb-0">
                    <div className="row">
                        <div className="col-12 px-5">
                            <p className="text-center fs-3 fw-bold">Testimonial</p>
                        </div>
                        <div className="col-12 text-center p-5">
                            <img src={InfoImg} alt="" srcset="" />
                            <p class="px-5 py-4 mx-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Veritatis cumque quas nobis vitae. Laudantium assumenda neque animi culpa tenetur sapiente <br /> illo deserunt rerum enim commodi voluptatibus, odio, consequuntur praesentium voluptate?</p>
                            <p class="p-3">Jaspreet</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Question */}
            <div className="container-fluid p-5">
                <div className="container m-5">
                    <div className="row">
                        <div className="col-12 pb-5 text-center">
                            <p class="fs-5 pt-5 fw-medium text-primary">Our Blogs</p>
                            <p class="h1 fw-bold">Our Latest News & Articles</p>
                        </div>
                        <div className="col-6 p-3">
                            <div class="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={Img} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text mb-0 pb-2 mt-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="btn btn-primary">Read</button>
                                            <p class="card-text mt-1"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-3">
                            <div class="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={Img} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text mb-0 pb-2 mt-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="btn btn-primary">Read</button>
                                            <p class="card-text mt-1"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-3 pt-0">
                            <div class="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={Img} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text mb-0 pb-2 mt-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="btn btn-primary">Read</button>
                                            <p class="card-text mt-1"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-3 pt-0">
                            <div class="card mb-3" style={{ maxWidth: "540px;" }}>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src={Img} class="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text mb-0 pb-2 mt-1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <button className="btn btn-primary">Read</button>
                                            <p class="card-text mt-1"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}