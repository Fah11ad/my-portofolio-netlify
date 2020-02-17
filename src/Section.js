import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import mypic from './assets/my-pic.jpg'
import { Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'



export default class Section extends Component {
    render() {
        return (
            <div className="section-side">
                
                <Col className='main-side' >
                <div className="container-fluid">
                <About style={{height: '100vh' }} />
                <hr />
                <Experience />
                <hr />
                <Education />
                <hr />
                <Skills />
                <hr />
                <Projects />
                </div>
                </Col>
            </div>
        )
    }
}
