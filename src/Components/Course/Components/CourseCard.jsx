import React from 'react'
import Img from '../../assets/images/Card2.jpg'

export default function CourseCard() {
    return (
        <div>
            <div class="card" style={{width: "18rem;", height:"30rem"}}>
                <img src={Img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="btn btn-primary mt-3">Explore</a>
                    </div>
            </div>
        </div>
    )
}