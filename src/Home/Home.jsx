import React from 'react';
import style from './Home.module.scss';
import NavBar from '../NavBar/NavBar.jsx';
import { BsArrowDownSquare } from "react-icons/bs";
// import yo from './img/Image.jpeg';
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <section id='home'>

            <div className={style.ctn}>
                <NavBar />
                <div className={style.ctnT} >
                    <h1 className={style.name} > Hi! I am</h1>
                    <h1 className={style.name} > David Heredia</h1>
                    {/* <h1 className={style.subTitle}>Full Stack Developer</h1> */}
                    <p className={style.txt}>A Full Stack Developer who builds websites.</p>

                    {/* <img className={style.img1} src={yo} alt={yo} /> */}
                </div>
                <Link to='portfolio' smooth={true} duration={1000}>< BsArrowDownSquare className={style.icon} /></Link>
            </div>
        </section >
    )
}

export default Home;