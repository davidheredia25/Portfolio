import React from 'react';
import style from './Skills.module.scss';
import { FaReact } from "react-icons/fa";
import { SiRedux, SiTypescript, SiExpress, SiPostgresql, SiSequelize } from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io"

const Skills = () => {
    return (
        <section id='skills'>
            <div className={style.ctn}>
                <h1 className={style.title}>SKILLS</h1>
                <div className={style.ctnTxt}>
                    <div className={style.txt}> <IoLogoJavascript className={style.icon} /> <p className={style.p}>JavaScript</p></div>
                    <div className={style.txt}><SiTypescript className={style.icon} /> <p className={style.p}>TypeScript</p> </div>
                    <div className={style.txt}> <FaReact className={style.icon} /> <p className={style.p}>ReactJS</p></div>
                    <div className={style.txt}> <FaReact className={style.icon} /> <p className={style.p}>React Native</p></div>
                    <div className={style.txt}> <SiRedux className={style.icon} /> <p className={style.p}>Redux</p></div>
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