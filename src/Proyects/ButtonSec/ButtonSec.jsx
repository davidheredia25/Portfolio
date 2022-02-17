import React from 'react';
import style from './ButtonSec.module.scss'

const ButtonSec = ({ data, handleClick, active }) => {
    const { id, title } = data
    return (
        <>
            <button className={active !== id ? style.btn : style.btnTwo} onClick={() => handleClick(data, id)}> {title.toUpperCase()}</button>
        </>
    )
}

export default ButtonSec;