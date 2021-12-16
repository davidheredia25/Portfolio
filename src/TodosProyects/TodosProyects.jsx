import React from 'react';
import style from './TodosProyects.module.scss';
import ProyectDrinks from './ProyectDrinks/ProyectDrinks.jsx';
import ProyectPoke from './PoyectPoke/ProyectPoke.jsx';
import ProyectMovie from './ProyectMovie/ProyectMovie.jsx';
// import ProyectClothes from './ProyectClothes/ProyectClothes.jsx';



const TodosProyects = () => {
  return (
    <div className={style.CtnSup}>
      {/* <ProyectClothes /> */}
      <ProyectDrinks />
      <ProyectPoke />
      <ProyectMovie />
    </div >


  )
}

export default TodosProyects;

