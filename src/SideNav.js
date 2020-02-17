import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import mypic from './assets/my-pic.jpg'
import { Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Section from './Section'


export default class SideNav extends Component {
    render() {
        return (
            <div >

                {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="d-lg-none d-block">Fahad Alqurashi</span> */}


                    
                        
                        

                            
                            <a className="navbar-brand" href="#page-top">
                                    <span className="my-pic">
                                        <img src={mypic} />
                                    </span>
                                </a>
                            <ul className="nav-list" >
                                <br />
                            <li className="nav-item" ><a className="nav-link" href="#ab">About</a></li>
                            
                            <li className="nav-item" ><a className="nav-link" href="#exp">Experience</a></li>
                            
                            <li className="nav-item" ><a className="nav-link" href="#edu">Education</a></li>
                            
                            <li className="nav-item" ><a className="nav-link" href="#skills">Skills</a></li>

                            <li className="nav-item" ><a className="nav-link" href="#projects">Projects</a></li>
                            
                            {/* <li className="nav-item" ><a className="nav-link" href="#Certificate">Certificate</a></li> */}
                            </ul>
                            

                            {/* {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            {/* <FontAwesomeIcon icon={faCoffee} />  */}
                      
                        
                         
                       
                        

                    </div>
                    )
                }
            }
