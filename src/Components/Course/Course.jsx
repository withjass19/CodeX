import React from 'react'
import './style.css'
// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import NavBar from '../Layouts/NavBar'
import CourseCard from './Components/CourseCard'
import Footer from '../Layouts/Footer'
// import Java from './Components/Programs/Java/java'

export default function Course() {
    return (
        <div>
            <div className='bgColor'>
                <NavBar />
                <div className="container-fluid">
                    <div className="container p-5 pt-0">
                        <div className="row p-5 m-5 pt-0 my-0 ">
                            <div className="col p-5 m-5 pb-0">
                                <h1 className='text-white fw-bold bg-info p-5 m-5 text-center rounded-4 bg-opacity-10'>Courses</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-5">
                <div className="container p-5">
                    <div className="row">
                        <div className="col">
                            <p className='fs-3 fw-semibold text-center'>The choose a leaning course</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 p-5">
                            <CourseCard />
                        </div>
                        <div className="col-4 p-5">
                            <CourseCard />
                        </div>
                        <div className="col-4 p-5">
                            <CourseCard />
                        </div>
                        <div className="col-4 p-5">
                            <CourseCard />
                        </div>
                        <div className="col-4 p-5">
                            <CourseCard />
                        </div>
                        <div className="col-4 p-5">
                            <CourseCard />
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}