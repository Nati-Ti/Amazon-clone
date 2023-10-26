import React from 'react'
import './Nav.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavLinks from './NavJSON';
import NavProp from './NavProp';


function NavBar() {
    return (
        
        <Navbar expand="lg" className="Header--navBar bg-body">
            <Nav className="Header--navBar__nav me-auto">

                {NavLinks.map((link) => {
                    return (
                    <NavProp key={link.name} linkName= {link.name} linkUrl={link.url} dropDown= {link.dropDown} />
                )})}

            </Nav>       
        </Navbar>
        
    )
}

export default NavBar