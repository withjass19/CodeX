import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Components/style.css'
import NavBar from '../Layouts/NavBar';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from '../Layouts/Footer';

export default function Home(){
    return(
        <div>
            <div className="conatiner-fluid pb-5 bgColor">
                <NavBar/>
                <Header/>
            </div>
            <Main/>
            <Footer/>
        </div>
    );
}