import React from 'react';
import style from './Portfolio.module.scss';
import todas from './img/todas.png';
import { Animator, ScrollContainer, ScrollPage, ZoomIn } from "react-scroll-motion";

const Porfolio = () => {



    return (

        <section className={style.ctnSec} id='portfolio'>
            <ScrollContainer >
                <ScrollPage page={1}>


                    <div className={style.ctnTxt}>

                        <h1 className={style.titleSup}>PROJECTS</h1>

                        <p className={style.text}> Projects carried out during the bootcamp SoyHenry</p>
                    </div>
                    <Animator animation={ZoomIn(2)}>

                        <img className={style.imgPorfolio} src={todas} alt={todas} />

                    </Animator>

                </ScrollPage>
            </ScrollContainer>

        </section >

    )
}

export default Porfolio;


