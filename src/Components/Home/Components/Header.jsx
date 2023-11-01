import React from 'react'
import HeaderImg from '../../assets/images/ai-home-hero.png'
import './style.css'

export default function Header(){
    return(
        <div>
            <div className="container-fluid p-5">
                <div className="container rounded rounded-5 bg-black bg-opacity-25 text-white">
                    <div className="row">
                        <div className="col-12 p-5 text-center">
                            <p class="h1 fw-bold pt-4 fs-1">CodeX empowers you to</p>
                            <h1 class="fw-bold pt-2">Build your own AI model in minutes!</h1>
                            <p class="px-5 mx-5 pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos sunt autem mollitia harum veritatis deleniti ratione dolorem quia? Alias eligendi reiciendis ullam illo veniam voluptatem obcaecati vitae aliquid officiis?</p>
                            <a href="/" class="btn btn-primary px-5 py-2 mt-3 rounded-5">Get Started</a>
                        </div>
                        <div className="col-12 text-center">
                            <img src={HeaderImg} class="mt-4 HeaderImg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}