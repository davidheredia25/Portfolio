import React, { useState } from 'react';
import style from './TodosProyects.module.scss';
import ProyectDrinks from './ProyectDrinks/ProyectDrinks.jsx';
import ProyectPoke from './PoyectPoke/ProyectPoke.jsx';
import ProyectMovie from './ProyectMovie/ProyectMovie.jsx';
// import ProyectClothes from './ProyectClothes/ProyectClothes.jsx';



const TodosProyects = () => {
  const [active, setActive] = useState("proyectDrinks")


  return (
    <div className={style.CtnSup}>
      {/* <ProyectClothes /> */}
      <div className={style.ctnBnts}>

        <button className={style.btn} onClick={() => setActive("ProyectMovie")}>MOVIES-API</button>
        <button className={style.btn} onClick={() => setActive("proyectDrinks")}>E-SHOP DRINKS</button>
        <button className={style.btn} onClick={() => setActive("ProyectPoke")}>POKE-API</button>
      </div>

      <div>
        {active === "proyectDrinks" && <ProyectDrinks />}
        {active === "ProyectPoke" && <ProyectPoke />}
        {active === "ProyectMovie" && <ProyectMovie />}
      </div>
    </div >
  )
}

export default TodosProyects;

