import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Homee from "./Homee";
import About from "./pages/About";
import Tournaments from "./pages/Tournaments";
import Sittingv from "./pages/Sittingv";
import Adultv from "./pages/Adultv";
import Courtr from "./Courtr";
import Officeh from "./pages/Officeh";
import Admic from "./pages/Admic";
import Programc from "./pages/Programc";
import Calendar from "./pages/Calendar";
import Registrationn from "./pages/Registrationn";


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect  expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#teamlogo">
                            <Nav.Link as={Link} to= {'/teamlogo'}>SpikeFam</Nav.Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="justify-content-end" style={{ width: "85%" }}>
                                <Nav.Link as={Link} to= {'/home'}>HOME</Nav.Link>
                                <Nav.Link as={Link} to= {'/about'}>ABOUT</Nav.Link>
                                <NavDropdown title="PROGRAMS" id="dropdown1">
                                <NavDropdown.Item as={Link} to= {'/tournaments'}>YEARLY TOURNAMENTS</NavDropdown.Item>
                
                                <NavDropdown title="TEAM REGISTRATION" id="dropdown2">
                                <NavDropdown.Item as={Link} to= {'/sittingv'}>SITTING VOLLEYBALL</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to= {'/adultv'}>ADULT VOLLEYBALL</NavDropdown.Item>
                                </NavDropdown>                           
                                <NavDropdown.Item as={Link} to= {'/courtr'}>COURT RESERVATION</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link as={Link} to= {'/calendar'}>CALENDAR</Nav.Link>
                                <NavDropdown title="CONTACT" id="dropdown3">
                                <NavDropdown.Item as={Link} to= {'/officeh'}>CLUB OFFICE HOURS</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to= {'/admc'}>ADMINISTRATIVE CONTACTS</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to= {'/programc'}>PROGRAMS CONTACTS</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                            <Nav className= "ml-auto">
                                <Nav.Link as={Link} to= {'/registration'}>REGISTRATION</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div>
                <Routes>
                    <Route path="/home" element={<Homee />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tournaments" element={<Tournaments />} />
                    <Route path="/sittingv" element={<Sittingv />} />
                    <Route path="/adultv" element={<Adultv />} />
                    <Route path="/courtr" element={<Courtr />} />
                    <Route path="/officeh" element={<Officeh />} />
                    <Route path="/admc" element={<Admic />} />
                    <Route path="/programc" element={<Programc />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/registration" element={<Registrationn />} />
                    <Route path="/teamlogo" element={<Homee />} />
                </Routes>
                </div>
            </Router>
        )
     }
}