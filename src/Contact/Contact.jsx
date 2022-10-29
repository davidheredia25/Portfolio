import React, { useState } from 'react';
import style from './Contact.module.scss';
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';

const Contact = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('* Name field is required'),
            email: Yup.string().email('Invalid email address')
                .required('* Email field is required'),
            message: Yup.string().required('* Message field is required')
        }),
        onSubmit: (values) => {

            emailjs.send('service_yj6fudj', 'template_3k80okm', values, 'Cwafu0ZXE2MqDskBu')
                .then((result) => {
                    console.log(result.text);
                    formik.resetForm()
                    handleShow()
                }, (error) => {
                    console.log(error.text);

                });
        },
    });


    return (
        <section id='contact'>
            <div className={style.ctn}>
                <h1 className={style.titleSup}>CONTACT</h1>


                <div className={style.form} >
                    <div className={style.ctnSupDate}>
                        <a className={style.a} href="https://api.whatsapp.com/send?phone=5492477516109‬&text=Hello!%20Your%20can%20write%20me%20here!" target="_blank" rel="noreferrer">
                            <div className={style.date}>
                                < BsWhatsapp className={style.icon} />
                                <div className={style.ctnTxt}>
                                    <p className={style.txt}>Telephone</p>
                                    <p className={style.txt2}>‪+5492477516109‬</p>
                                </div>
                            </div>
                        </a>

                        <a className={style.a} href="mailto:davis_heredia@hotmail.com">
                            <div className={style.date}>
                                < AiOutlineMail className={style.icon} />
                                <div className={style.ctnTxt}>
                                    <p className={style.txt}>Email</p>
                                    <p className={style.txt2}>davis_heredia@hotmail.com</p>
                                </div>
                            </div>
                        </a>

                        <a className={style.a} href='https://www.linkedin.com/in/david-heredia-91625b24/' target="_blank" rel="noreferrer">
                            <div className={style.date}>
                                < RiLinkedinLine className={style.icon} />
                                <div className={style.ctnTxt}>
                                    <p className={style.txt}>Linkedin</p>
                                    <p className={style.txt2}>David Heredia</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className={style.ctnImput}>
                            <label className={style.title}>Name
                                <div className={`expandable ${formik.touched.name && formik.errors.name ? 'show' : ''}`}>
                                    <p className={style.error}>{formik.errors.name}</p>
                                </div>
                            </label>
                            <input
                                className={style.input}
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="off"
                                onChange={formik.handleChange}
                                value={formik.values.name}

                            />

                        </div>

                        <div className={style.ctnImput}>
                            <label className={style.title}>Email
                                <div className={`expandable ${formik.touched.email && formik.errors.email ? 'show' : ''}`}>
                                    <p className={style.error}>{formik.errors.email}</p>
                                </div>
                            </label>
                            <input
                                className={style.input}
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="off"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />

                        </div>

                        <div className={style.ctnImput}>
                            <label className={style.title}>Message
                                <div className={`expandable ${formik.touched.message && formik.errors.message ? 'show' : ''}`}>
                                    <p className={style.error}>{formik.errors.message}</p>
                                </div>
                            </label>
                            <textarea className={style.textarea}
                                id="message"
                                name="message"
                                autoComplete="off"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                            />
                        </div>

                        <button className={style.btn} type="submit" > Send Message</button>
                    </form>
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
                    <button className={style.btnModal} onClick={handleClose}>
                        Accept
                    </button>
                </Modal.Footer>
            </Modal>
        </section >
    )
}

export default Contact;
