import React from 'react'
import { Nav, Navbar } from 'react-bootstrap' 
 import logo from '../assets/img/img.png'


export const Header = () => {
    return (
        <Navbar 
            collapseOnSelect
            bg="info"
            variant="dark" 
            expand="md"
            >
            <Navbar.Brand>
                <img src={logo} alt='CRM' width='50px'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard">Tickets</Nav.Link>
                <Nav.Link href="/dashboard">Logout</Nav.Link>
                
            </Nav>
    </Navbar.Collapse>
  
</Navbar>
    )
}
