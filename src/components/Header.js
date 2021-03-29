import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavBar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import './style.css'

export const Header = () => {
    return (
        <div>
            <img className="header-image" src='./images/header.png' alt="header" />
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbar">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" style={{color: "#002e5d"}} href="#">HOME</a>
                                <a className="nav-link" style={{color: "#002e5d"}}href="#">NEWS</a>
                                <a className="nav-link" style={{color: "#002e5d"}}href="#">FEATURES</a>
                                <a className="nav-link" style={{color: "#002e5d"}}href="#">LITERARY</a>
                                <a className="nav-link" style={{color: "#002e5d"}} href="#">OPINION</a>
                                <a className="nav-link" style={{color: "#002e5d"}} href="#">BEYOND ESPANA</a>
                                <a className="nav-link" style={{color: "#002e5d"}}href="#">ABOUT</a>
                            </div>
                            <form className="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success" style={{color: "#002e5d"}}type="submit">Search</button>
                            </form>
                        </div>
                        </div>
                </nav>
            </div>
            </div>
    )
}

export default Header;