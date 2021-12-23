import React from 'react';
import style from './Skills.module.scss';
import { FaReact, FaSass } from "react-icons/fa";
import { SiRedux, SiExpress, SiPostgresql, SiSequelize } from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { BsBootstrap } from "react-icons/bs"
import { RiCss3Line } from "react-icons/ri"

const Skills = () => {
    return (
        <section id='skills'>
            <div className={style.ctn}>
                <h1 className={style.title}>SKILLS</h1>
                <div className={style.ctnTxt}>
                    <div className={style.txt}> <IoLogoJavascript className={style.icon} /> <p className={style.p}>JavaScript</p></div>
                    <div className={style.txt}> <FaReact className={style.icon} /> <p className={style.p}>ReactJS</p></div>
                    <div className={style.txt}> <SiRedux className={style.icon} /> <p className={style.p}>Redux</p></div>
                    <div className={style.txt}> <FaSass className={style.icon} /> <p className={style.p}>Sass</p></div>
                    <div className={style.txt}> <RiCss3Line className={style.icon} /> <p className={style.p}>CSS3</p></div>
                    <div className={style.txt}> <BsBootstrap className={style.icon} /> <p className={style.p}>Bootstrap</p></div>
                    <div className={style.txt}> <SiExpress className={style.icon} /> <p className={style.p}>Express</p></div>
                    <div className={style.txt}> <SiPostgresql className={style.icon} /> <p className={style.p}>PostgresSQL</p></div>
                    <div className={style.txt}>  <SiSequelize className={style.icon} /> <p className={style.p}>Sequalize</p> </div>
                    <div className={style.txt}><IoLogoNodejs className={style.icon} /> <p className={style.p}>NodeJS</p></div>
                </div>
            </div>
        </section>
    )
}

export default Skills;