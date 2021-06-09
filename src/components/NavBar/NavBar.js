import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.css'
import logo from '../../images/film.svg'

export const NavBar = () => {
    return (
        <Navbar className="landing-navbar" variant="dark">
            <Navbar.Brand className="navbar-brand" href="/">
            Movie Mania
            <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top navbar-logo"
                alt="logo"
            />
            </Navbar.Brand>
        </Navbar>
    )
}
