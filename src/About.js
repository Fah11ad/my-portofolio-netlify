import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FaLinkedinIn, FaPhone, FaAt } from "react-icons/fa";

export default class About extends Component {
    render() {
        return (
            <div>
               <div className="about w-100" id="ab">
                <h1 className="name "><span className="first-name">Fahad</span><span className="last-name"> Alqurashi</span></h1>
                <p><FontAwesomeIcon icon={faQuoteLeft} style={{color: '#2d545e'}} />   
                 &nbsp; I really want to build my career in software development field and I would like to shift my career path from IT Infrastructure specialist to become a software developer. I can be relied upon to help your company achieve its goals. &nbsp; <FontAwesomeIcon icon={faQuoteRight} style={{color:'#2d545e'}} /> </p>
                 <br />
                 <ul className='about-list'>
                 <li><a href="https://twitter.com/Fah11ad"><FontAwesomeIcon icon={faTwitter} /></a></li>&nbsp;&nbsp;&nbsp;&nbsp;
                 <li><a href="https://www.linkedin.com/in/fahad-alqurashi-600761193/"><FaLinkedinIn /></a></li>&nbsp;&nbsp;&nbsp;&nbsp;
                 <li><a href="tel:+966554335775"><FaPhone /></a></li>&nbsp;&nbsp;&nbsp;&nbsp;
                 <li><a href="mailto:falqurashi11@gmail.com?Subject=Hi Fahad"><FaAt /></a></li>&nbsp;&nbsp;&nbsp;&nbsp;
                 </ul>
                </div> 
            </div>
        )
    }
}
