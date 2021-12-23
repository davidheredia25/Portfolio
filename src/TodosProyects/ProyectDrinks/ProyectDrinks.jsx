import React, { useState } from 'react';
import style from './ProyectDrinks.module.scss';
import Carousel from 'react-bootstrap/Carousel'
import drink1 from './img/drink1.png';
import drink2 from './img/drink2.png';
import drink3 from './img/drink3.png';
import Modal from 'react-bootstrap/Modal'



const ProyectDrinks = () => {
    const [show, setShow] = useState(false);


    return (
        <div className={style.CtnPricipalDrinks}>

            <div className={style.CtnCaru1}>
                <img className={style.image1} src={drink3} alt="First slide" onClick={() => setShow(true)} />
                <p className={style.ver}>VER MÁS</p>
            </div>

            <div className={style.ctnTextoCaru}>
                <p className={style.title}>E-shop drinks</p>
                <p className={style.textoCaru1}>
                    I am currently working on a group project, it is about an E-Commerce about drinks, using SCRUM as an agile methodology, and different technologies such as: ReactJS, Redux, CSS, Bootstrap, Node.js, Express, MongoDB and Mongoose.
                    <a href='https://github.com/davidheredia25/Drinks-App'> Code</a>
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
                            src={drink1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={drink2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={drink3}
                            alt="Third slide"
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={drink1}
                            alt="Third slide"
                        />

                    </Carousel.Item>

                </Carousel>
            </Modal>

        </div >


    )
}

export default ProyectDrinks;