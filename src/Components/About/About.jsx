import React from 'react'
import './style.css'
import NavBar from '../Layouts/NavBar';
import Footer from '../Layouts/Footer';

export default function About(){
    return(
        <div>
            <div className="bgColor">
                <NavBar/>
                
                {/* Header */ }
                <div className="container-fluid p-5">
                    <div className="container bg-black bg-opacity-25 rounded-5 p-5">
                        <div className="row">
                            <div className="col-12 text-white p-5 text-center">
                                <p className='h1 fw-bold p-5'>About Us</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            

            {/* Main Section */}
            <div className="container-fluid p-5">
                <div className="container p-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-10 text-center">
                            <p className='fs-1 fw-semibold p-3'>About the CodeX</p>
                            <p className='px-5 mx-5 text-start'>The CodeX is one of those "What I wish I had when I was learning" resources. Not everyone has access to computer science education or the funds to atted an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.</p>
                        </div>
                        <div className="col-10 text-center mt-5 pt-5">
                            <p className='fs-3 fw-medium'>What you can expect at CodeX</p>
                            <div className='text-start mx-5 px-5 pt-4 mb-4'>
                                <p className='fw-semibold fs-5 mb-1'>A full roadmap to becoming a developer</p>
                                <p className='text-secondary'>Our free, comprehensive curriculum will equip you to be a full stack developer, no matter your current experience level.</p>
                            </div>
                            <div className='text-start mx-5 px-5 mb-4'>
                                <p className='fw-semibold fs-5 mb-1'>Learn by donig</p>
                                <p className='text-secondary'>The most effective learning happens while building projects, so we have strategically placed them throughout our curriculum. These projects will make a strong portfolio for you to showcase on your resume.</p>
                            </div>
                            <div className='text-start mx-5 px-5 mb-4'>
                                <p className='fw-semibold fs-5 mb-1'>Recevie support form others</p>
                                <p className='text-secondary'>The maintainers of the curriculum run a Discord community, with the help of countless other volunteers, where you can receive help with anything in our curriculum.</p>
                            </div>
                            <div className='text-start mx-5 px-5 mb-4'>
                                <p className='fw-semibold fs-5 mb-1'>Open source and community driven</p>
                                <p className='text-secondary'>You can deepen your understanding and improve your GitHub skills by contributing to our open source curriculum and helping others in our Discord community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}