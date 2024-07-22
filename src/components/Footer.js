import React from "react"
import './footerStyles.css'
import { Link } from "react-router-dom"
import{FaFacebook , FaInstagram , FaMailBulk , FaSearchLocation , FaPhone} from 'react-icons/fa'


const Footer = () => {
    return( 
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaSearchLocation size={20} style={{color :'#ffffff' , marginRight: '2rem'}} />
                    <div>
                        <p> ramsis street </p>
                        <h4>cairo , Egypt</h4>
                    </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color :'#ffffff' , marginRight: '2rem'}}/>01552922573</h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{color :'#ffffff' , marginRight: '2rem'}}/>shadyazzar@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>about us</h4>
                    <p>here is my comany for travel here is my comany for travel here is my comany for travel here is my comany for travel here is my comany for travel </p>
                    <div className="social">
                        <FaFacebook size={30} style={{color :'#ffffff' , marginRight: '1rem'}}/>
                        <FaInstagram size={30} style={{color :'#ffffff' , marginRight: '1rem'}}/>
                         
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Footer 