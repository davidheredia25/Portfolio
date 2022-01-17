import React from 'react';
import style from './Portfolio.module.scss';

// import poke from './img/poke.png';
// import movie from './img/Movie.PNG';
import todas from './img/todas.png';
import { Animator, ScrollContainer, ScrollPage, ZoomIn } from "react-scroll-motion";

const Porfolio = () => {
    // const ZoomInScrollOut = batch( ZoomIn(2));
    return (

        <section className={style.ctnSec} id='portfolio'>
            <ScrollContainer >
                <ScrollPage page={1}>
                    <div className={style.ctn}>

                        <div className={style.ctnTxt}>

                            <h1 className={style.titleSup}>PROYECTS</h1>

                            <p className={style.text}> Projects carried out during the bootcamp SoyHenry</p>
                        </div>
                        <Animator animation={ZoomIn(2)}>
                            <div className={style.ctnImg}>
                                <img className={style.imgPorfolio} src={todas} alt={todas} />
                            </div>

                        </Animator>
                    </div>
                </ScrollPage>
            </ScrollContainer>

        </section >

    )
}

export default Porfolio;


