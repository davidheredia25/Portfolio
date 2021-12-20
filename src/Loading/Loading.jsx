import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import style from './Loading.module.scss';


const Loading = () => {
	return (
		<div className={style.ctnLoa}>
			<Spinner animation="border" role="status">
	  			<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	)
}

export default Loading;