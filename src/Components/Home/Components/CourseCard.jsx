import React from 'react'
// import CardImg from '../../assets/images/Card2.jpg'

export default function CourseCard(props) {
    return (
        <div>
            <div class="card text-white bg-transparent border-0" style={{width: "18rem;"}}>
                <img src={props.CardImg} class="card-img-top mt-2 rounded" alt="..."/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={props.link} class="btn btn-primary px-5 mt-2 rounded-5">Start</a>
                    </div>
            </div>
        </div>
    );
}