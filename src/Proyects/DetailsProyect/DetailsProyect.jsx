import React, { useState } from 'react';
import style from './DetailsProyect.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

const DetailsProyect = ({ data }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={style.CtnPricipalMovie}>
            <div className={style.CtnCaru1}>
                <img className={style.image1} src={data?.img[0].name} alt={data?.img[0].alt} onClick={() => setShow(true)} />
                <p className={style.ver}>SEE MORE</p>
            </div>

            <div className={style.ctnTextoCaru}>
                <p className={style.title}> {data?.title} </p>
                <p className={style.textoCaru1}> {data?.description}
                    <a href={data?.url} target="_blank" rel="noreferrer"> Code</a>
                </p>
            </div>

            <Modal

                show={show}
                size="xl"
                centered
                onHide={() => setShow(false)}
            >

                <Carousel   >
                    {
                        data?.img?.map((e, k) => {
                            return (
                                <Carousel.Item key={k}>
                                    <img
                                        className="d-block w-100"
                                        src={e?.name}
                                        alt={e?.alt.charAt(0).toUpperCase() + e?.alt.slice(1)}
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </Modal>

        </div >


    )
}

export default DetailsProyect;