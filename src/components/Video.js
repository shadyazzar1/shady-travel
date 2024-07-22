import React from "react"
import './videoStyles.css'
import { Link } from "react-router-dom"
import travelVideo from '../assets/travel.mp4'

const Video = () => {
    return(

    <div className="hero">
            <video autoPlay loop muted id ="video">

                <source src={travelVideo}/>
            </video>
        <div className="content">
            <h1>Shady's travel</h1>
            <p>Best travel company </p>
      
        <div>
            <Link to='/pricing' className="btn" >Trips</Link>
            <Link to= 'contact' className="btn btn-light">Call Us</Link>
        </div> 
    </div>
        </div>

    )

}
export default Video 