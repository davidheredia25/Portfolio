import React, { useState } from 'react';
import style from './ProyectClothes.module.scss';
import Carousel from 'react-bootstrap/Carousel'
// import poke1 from './img/poke1.png';
// import poke2 from './img/poke2.png';
// import poke3 from './img/poke3.png';
// import poke4 from './img/poke4.png'
import Modal from 'react-bootstrap/Modal'


const ProyectClohes = () => {
    const [show, setShow] = useState(false);

    return (
        <div className={style.CtnPricipalPoke}>

            <div className={style.CtnCaru1}>
                <div className={style.ctnImg}>
                    <img className={style.image1} src="" alt="First slide" />
                    <img className={style.image1} src="" alt="First slide" />
                </div>
                <div className={style.ctnImg}>
                    <img className={style.image1} src="" alt="First slide" />
                    <img className={style.image1} src="" alt="First slide" />
                </div>
                <button className={style.btn} onClick={() => setShow(true)}>Full screen</button>
            </div>

            <div className={style.ctnTextoCaru}>
                <p className={style.title}> Poke-Api</p>
                <p className={style.textoCaru1}> t's about a SPA that consumes data from an API (https://pokeapi.co)
                    The technologies used for the #Backend, #Nodejs, #ExpressJS and #Sequelize as #ORM. In the #PostgreSQL database and the #Frontend it is developed in #React, #Redux and pure #Css, without the use of external libraries.

                    Its main features are:
                    Filter, sort and search Pokémon. It is also possible to access the details of each Pokémon.
                    Dynamic paging.
                    Create your own Pokémon and save them in the database.
                    <a href='https://github.com/davidheredia25/PI-Pokemon-FT17a'> Code</a>
                </p>

            </div>

            <Modal
                show={show}
                size="xl"
                centered
                onHide={() => setShow(false)}
            >

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="Third slide"
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="Third slide"
                        />

                    </Carousel.Item>

                </Carousel>
            </Modal>

        </div >


    )
}

export default ProyectClohes;