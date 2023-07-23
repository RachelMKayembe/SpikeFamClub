import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Homee from "./Homee";
import About from "./pages/About";
import Tournaments from "./Tournaments";
import Sittingv from "./Sittingv";
import Adultv from "./Adultv";
import Courtr from "./Courtr";
import Contacts from "./Contacts";

import Registrationn from "./Registrationn";


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: 'white'}}>
                        <Container >
                            <Navbar.Brand href="#teamlogo" >
                            <Nav.Link as={Link} to= {'/teamlogo'}> 
                            <img style={{height:'95px', width:'180px'}} src= "https://mail.google.com/mail/u/0?ui=2&ik=c44e7b6247&attid=0.1&permmsgid=msg-a:r1210015562824593294&th=18948f89ae640077&view=att&disp=safe&realattid=f_ljze5h0b1" alt="Logo" className="logo-image" />

                            </Nav.Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-end" style={{ width: "90%",fontfamily: 'Lato'}}>
                                <Nav.Link as={Link} to= {'/spikefam'} style={{color:'black', marginRight: '35px'}}>HOME</Nav.Link>
                                <Nav.Link as={Link} to= {'/about'} style={{color:'black', marginRight: '35px'}}>ABOUT</Nav.Link>
                                <NavDropdown  title={<span style={{ color: 'black' }}>PROGRAMS</span>} id="dropdown1" style={{ marginRight: '35px', color:'white' }}>
                                <NavDropdown.Item as={Link} to={'/tournaments'}>YEARLY TOURNAMENTS</NavDropdown.Item>

                                <NavDropdown title="TEAM REGISTRATION" id="dropdown2">
                                    <NavDropdown.Item as={Link} to={'/sittingv'}>SITTING VOLLEYBALL</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={'/adultv'}>ADULT VOLLEYBALL</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown.Item as={Link} to={'/courtr'}>COURT RESERVATION</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link as={Link} to= {'/contact'} style={{color:'black', marginRight: '35px'}}>CONTACTS</Nav.Link>

                            </Nav>

                            <Nav className= "ml-auto">
                                <Nav.Link as={Link} to= {'/registration'} style={{ backgroundColor: '#F2AD46', color:'white', borderRadius: '12px', padding: "10px 10px 10px 10px"}}>REGISTRATION</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div>
                <Routes>
                    <Route path="/spikefam" element={<Homee />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tournaments" element={<Tournaments />} />
                    <Route path="/sittingv" element={<Sittingv />} />
                    <Route path="/adultv" element={<Adultv />} />
                    <Route path="/courtr" element={<Courtr />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/registration" element={<Registrationn />} />
                    <Route path="/teamlogo" element={<Homee />} />
                </Routes>
                </div>
            </Router>
        )
     }
}