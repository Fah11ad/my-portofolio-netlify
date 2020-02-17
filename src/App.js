import React from 'react';
import './App.css';
import './index.css';
import SideNav from './SideNav'
import Section from './Section'
import {Row, Col, Navbar, Nav} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Navbar className="d-lg-none" collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#2d545e"}}    >
                    <Navbar.Brand href="/"><h3 className="font-weight"><span style={{ color: 'white' }}>Fahad Alqurashi</span></h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >

                            <Nav.Link className="mt-3" href="#ab">About</Nav.Link>
                            <Nav.Link href="#exp">Experience</Nav.Link>
                            <Nav.Link href="#edu">Education</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            {/* <Nav.Link href="#Certificate">Certificate</Nav.Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
      <Row>
      <Col className="side-nav d-lg-block d-none side-bar" lg={4} >
     <SideNav />
     </Col>
     <Col lg={8} style={{paddingLeft: '0px'}}>
     <Section />
     </Col>
     </Row>
    </div>
  );
}

export default App;
