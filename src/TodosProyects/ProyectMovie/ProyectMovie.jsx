import React, { useState } from 'react';
import style from './ProyectMovie.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import movie1 from './img/movie1.PNG';
import movie2 from './img/movie2.PNG';
import movie3 from './img/movie3.PNG';




const ProyectMovie = () => {
    const [show, setShow] = useState(false);

    return (
        <div className={style.CtnPricipalMovie}>
            <div className={style.CtnCaru1}>
                <img className={style.image1} src={movie1} alt="First slide" onClick={() => setShow(true)} />
                <p className={style.ver}>SEE MORE</p>
            </div>

            <div className={style.ctnTextoCaru}>
                <p className={style.title}> Movies-Api </p>
                {/* <p className={style.linea}></p> */}
                <p className={style.textoCaru1}> Work in Movies Api, using React-Redux. You can search for movies, add them to favorites and see all the details of them
                    <a href='https://github.com/davidheredia25/Movies-app' target="_blank" rel="noreferrer"> Code</a>
                </p>

            </div>

            <Modal

                show={show}
                size="xl"
                centered
                onHide={() => setShow(false)}
            >

                <Carousel   >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={movie1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={movie2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={movie3}
                            alt="Third slide"
                        />

                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={movie1}
                            alt="Third slide"
                        />

                    </Carousel.Item>

                </Carousel>
            </Modal>

        </div >


    )
}

export default ProyectMovie;