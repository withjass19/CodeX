import React from 'react'
import '../../../../style.css'
import NavBar from '../../../../../Layouts/NavBar';
import Footer from '../../../../../Layouts/Footer';

export default function Compiler(props){
    return(
        <div>
            <div  className="bg-black">
            <NavBar/>
            </div>
            
            <div className="container-fluid">
                {/* <div className="row bg- dark text-white" style={{width:"100vw", height:"10vh"}}>
                    
                </div> */}
                <div className="row" style={{height:"92vh"}}>
                    <div className="col-6 p-2">
                        {/* <input type="text" className='col-12 h-100 border-0 input' /> */}
                        <textarea className='border-2 form-control' name="" id="editor"  style={{width:"48.5vw", height:"85vh"}}>{props.code}</textarea>
                    </div>
                    <div className="col-6 p-2" ed>
                        <textarea className='border-2 form-control' name="" id=""  style={{width:"48.5vw", height:"85vh"}}>{props.output}</textarea>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}