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
                    <h1 className={style.name} >David Heredia</h1>
                    <h1 className={style.subTitle}>Full Stack Developer</h1>
                    <p className={style.txt}>Hello! I am a Full Stack Developer. I live in Tandil, Province of Buenos Aires,
                        Argentina. I would like to be part of a company where I can
                        put my knowledge into practice, which gives me the opportunity to overcome
                        all my goals, allowing me to improve and grow in the workplace, personal
                        and intellectual.
                    </p>

                    {/* <img className={style.img1} src={yo} alt={yo} /> */}
                </div>
                <Link to='portfolio' smooth={true} duration={1000}>< BsArrowDownSquare className={style.icon} /></Link>
            </div>
        </section >
    )
}

export default Home;