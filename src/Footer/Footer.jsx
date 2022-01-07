import React from 'react';
import style from './Footer.module.scss';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { RiLinkedinLine, RiInstagramLine, RiGithubLine, RiFacebookLine } from "react-icons/ri";


const Footer = () => {
    return (
        <div className={style.ctnFooter}>

            <Link className={style.navLinkDH} to='home' smooth={true} duration={500}>DavidHeredia</Link>
            <div className={style.ctnFooter1}>
                <div className={style.navFooter}>
                    <Link className={style.navLin} to='home' smooth={true} duration={500}>HOME</Link>
                    <Link className={style.navLin} to='portfolio' smooth={true} duration={500}>PROYECTS</Link>
                    <Link className={style.navLin} to='skills' smooth={true} duration={500}>SKILLS</Link>
                    <Link className={style.navLin} to='contact' smooth={true} duration={500} >CONTACT</Link>
                    <NavLink className={style.navLin} to="./pdf" target="_blank" > DOWNLOAD CV</NavLink>
                </div>

                <div className={style.ctnIcons}>
                    <a className={style.navLink1} href='https://www.linkedin.com/in/david-heredia-91625b24/' target="_blank" rel="noreferrer">< RiLinkedinLine className={style.icon} /></a>
                    <a className={style.navLink1} href='https://github.com/davidheredia25' target="_blank" rel="noreferrer">< RiGithubLine className={style.icon} /></a>
                    <a className={style.navLink1} href='https://www.instagram.com/deividheredia/' target="_blank" rel="noreferrer">< RiInstagramLine className={style.icon} /></a>
                    <a className={style.navLink1} href='https://www.facebook.com/davis.heredia/' target="_blank" rel="noreferrer">< RiFacebookLine className={style.icon} /></a>
                </div>
            </div>
            <div className={style.ctnDh}>
                <p className={style.david}>Copyright © 2022 David Heredia. All rights reserved. Site credit.</p>
            </div>
        </div>
    )
}

export default Footer;