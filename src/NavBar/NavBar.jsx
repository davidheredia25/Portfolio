import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" text collapse navbar-collapse" id="navbarNav">
                        <ul className=" navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='home' smooth={true} duration={500}>HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='portfolio' smooth={true} duration={500}>PROYECTS</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='skills' smooth={true} duration={500}>SKILLS</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to='contact' smooth={true} duration={500} >CONTACT</Link>
                            </li>
                            <li class="nav-item">
                                <NavLink to="./pdf" target="_blank" className="nav-link"> DOWNLOAD CV</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default NavBar;