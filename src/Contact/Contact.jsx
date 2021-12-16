import React, {useState} from 'react';
import style from './Contact.module.scss';
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal'

const Contact = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section id='contact'>
            <div className={style.ctn}>
                <h1 className={style.titleSup}>CONTACT</h1>


                <div className={style.form}>
                    <div className={style.ctnSupDate}>
                        <div className={style.date}>
                            < BsWhatsapp className={style.icon} />
                            <div className={style.ctnTxt}>
                                <p className={style.txt}>Telephone</p>
                                <p className={style.txt2}>2494324168</p>
                            </div>
                        </div>

                        <a className={style.a} href='https://wa.me/+5494324168'>
                            <div className={style.date}>
                                < AiOutlineMail className={style.icon} />
                                <div className={style.ctnTxt}>
                                    <p className={style.txt}>Email</p>
                                    <p className={style.txt2}>davis_heredia@hotmail.com</p>
                                </div>
                            </div>
                        </a>

                        <a className={style.a} href='https://www.linkedin.com/in/david-heredia-91625b24/'>
                            <div className={style.date}>
                                < RiLinkedinLine className={style.icon} />
                                <div className={style.ctnTxt}>
                                    <p className={style.txt}>Linkedin</p>
                                    <p className={style.txt2}>David Heredia</p>
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className={style.ctnImput}>
                        <label className={style.title}>Name</label>
                        <input
                            className={style.input}
                            type="text"
                            name='email'

                        />
                    </div>

                    <div className={style.ctnImput}>
                        <label className={style.title}>Email</label>
                        <input
                            className={style.input}
                            type="text"
                            name='email'
                        />
                    </div>

                    <div className={style.ctnImput}>
                        <label className={style.title}>Message</label>
                        <textarea className={style.textarea}

                        />
                    </div>
                    <button className={style.btn} onClick={handleShow}>Enviar</button>
                </div>

            </div >

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Message sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   I will be in touch with you soon, thank you very much for contacting me!
                </Modal.Body>
                <Modal.Footer className={style.ctnBtModal}>
                    <button className={style.btnModal}  onClick={handleClose}>
                        Aceptar
                    </button>
                </Modal.Footer>
            </Modal>
        </section >
    )
}

export default Contact;