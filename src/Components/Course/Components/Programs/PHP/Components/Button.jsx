import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Button(props){
    return(
        <div>
            {/* <li class="list-group-item btn btn-light text-start rounded-0 py-2">Topic 1</li> */}
            <button className="col-12 btn btn-light text-start rounded-0">
                <a href={props.link} className='link-secondary link-offset-2 link-underline link-underline-opacity-0'>{props.topic}</a>
                </button>
        </div>
    )
}