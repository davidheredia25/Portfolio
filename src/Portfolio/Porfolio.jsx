import React from 'react';
import style from './Portfolio.module.scss';
// import poke from './img/poke.png';
// import movie from './img/Movie.PNG';
import todas from './img/todas.png';



const Porfolio = () => {

    return (
        <section id='portfolio'>
            <div className={style.ctn}>
                <div className={style.ctnTxt}>
                    <h1 className={style.titleSup}>PROYECTS</h1>
                    <p className={style.text}>Projects carried out during the Soy Henry bootcamp. Where I apply learned technologies and others on my own! they will soon be deplored.</p>
                </div>

                <div className={style.ctnImg}>
                    <img className={style.imgPorfolio} src={todas} alt={todas} />
                </div>


            </div>
        </section >
    )
}

export default Porfolio;


