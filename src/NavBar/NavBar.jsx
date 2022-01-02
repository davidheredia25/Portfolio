import React from 'react';
import { Link } from 'react-scroll';
import style from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { RiLinkedinLine, RiInstagramLine, RiGithubLine,RiFacebookLine } from "react-icons/ri";


const NavBar = () => {

    return (
        <div >
            <Navbar collapseOnSelect expand="md" fixed="top" variant="dark">
                <Container fluid className={style.cntCon}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className={style.navCss} id="responsive-navbar-nav">

                        <Nav className={style.ctnNav1}>
                            <Link className={style.navLinkDH} to='home' smooth={true} duration={500}>DH</Link>
                            <Link className={style.navLink} to='home' smooth={true} duration={500}>HOME</Link>
                            <Link className={style.navLink} to='portfolio' smooth={true} duration={500}>PROYECTS</Link>
                            <Link className={style.navLink} to='skills' smooth={true} duration={500}>SKILLS</Link>
                            <Link className={style.navLink} to='contact' smooth={true} duration={500} >CONTACT</Link>
                            <NavLink to="./pdf" target="_blank" className={style.navLink} > DOWNLOAD CV</NavLink>
                        </Nav>
                        
                        <Nav >
                            <a className={style.navLink1} href='https://www.linkedin.com/in/david-heredia-91625b24/'>< RiLinkedinLine className={style.icon} /></a>
                            <a className={style.navLink1} href='https://www.linkedin.com/in/david-heredia-91625b24/'>< RiGithubLine className={style.icon} /></a>
                            <a className={style.navLink1} href='https://www.linkedin.com/in/david-heredia-91625b24/'>< RiInstagramLine className={style.icon} /></a>
                            <a className={style.navLink1} href='https://www.linkedin.com/in/david-heredia-91625b24/'>< RiFacebookLine className={style.icon} /></a>
                         
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavBar;