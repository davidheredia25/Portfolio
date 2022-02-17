import React, { useState, useEffect } from 'react';
import style from './Proyects.module.scss';
import DetailsProyect from '../DetailsProyect/DetailsProyect.jsx';
import ButtonSec from '../ButtonSec/ButtonSec';
import space1 from '../img/space1.png';
import space2 from '../img/space2.png';
import space3 from '../img/space3.png';
// import space4 from '../img/space4.png';
// import space5 from '../img/space5.png';
// import space6 from '../img/space6.png';

import movie1 from '../img/movie1.PNG';
import movie2 from '../img/movie2.PNG';
import movie3 from '../img/movie3.PNG';

import drink1 from '../img/drink1.png';
import drink2 from '../img/drink2.png';
import drink3 from '../img/drink3.png';

import poke1 from '../img/poke1.png';
import poke2 from '../img/poke2.png';
import poke3 from '../img/poke3.png';
import poke4 from '../img/poke4.png';

const data = [

  {
    "id": 1,
    "title": "SpaceX",
    "description": "This is a SPA that consumes data to the https://api.spacex.land/graphql/ API using the Apollo client. Also use ReactJS, Sass and Bootstrap",
    "url": "https://github.com/davidheredia25/99minutos-frontend-interview-test/tree/JR-davidheredia",
    "img":
      [
        {
          "name": space2,
          "alt": "First slide"
        },
        {
          "name": space1,
          "alt": "Second slide"
        },
        {
          "name": space3,
          "alt": "Third slide"
        }
        // {
        //   "name": space4,
        //   "alt": "Third slide"
        // },
        // {
        //   "name": space5,
        //   "alt": "Third slide"
        // },
        // {
        //   "name": space6,
        //   "alt": "Third slide"
        // }

      ],

  },

  {
    "id": 2,
    "title": "E-shop drinks",
    "description": "It is a group project, which deals with an E-Commerce on drinks, using SCRUM as an agile methodology, and different technologies such as: ReactJS, Redux, CSS, Bootstrap, Node.js, Express, MongoDB and Mongoose",
    "url": "https://github.com/davidheredia25/Drinks-App",
    "img":
      [
        {
          "name": drink3,
          "alt": "First slide"
        },
        {
          "name": drink1,
          "alt": "Second slide"
        },
        {
          "name": drink2,
          "alt": "Third slide"
        }

      ],
  },


  {
    "id": 3,
    "title": "Poke-Api",
    "description": "It is about a SPA that consumes data from an API (https://pokeapi.co) The technologies used for #Backend, #Nodejs, #ExpressJS and #Sequelize as #ORM. In the #PostgreSQL and #Frontend databases, it is developed in #React, #Redux and pure #Css, without the use of external libraries. Its main features are: Filter, sort and search for Pokémon. It is also possible to access the details of each Pokémon. Dynamic paging. Create your own Pokémon and save them in the database.",
    "url": "https://github.com/davidheredia25/PI-Pokemon-FT17a",
    "img":
      [
        {
          "name": poke1,
          "alt": "First slide"
        },
        {
          "name": poke2,
          "alt": "Second slide"
        },
        {
          "name": poke3,
          "alt": "Third slide"
        },
        {
          "name": poke4,
          "alt": "Third slide"
        }

      ],
  },
  {
    "id": 4,
    "title": "Movies-api",
    "description": "Work in Movies Api, using React-Redux. You can search for movies, add them to favorites and see all the details of them.",
    "url": "https://github.com/davidheredia25/Movies-app",
    "img":
      [
        {
          "name": movie1,
          "alt": "First slide"
        },
        {
          "name": movie2,
          "alt": "Second slide"
        },
        {
          "name": movie3,
          "alt": "Third slide"
        }

      ],

  }

]

const Proyects = () => {
  const [dataDetails, setDataDetails] = useState()
  const [active, setActive] = useState()


  const handleClick = (data, id) => {
    setDataDetails(data)
    setActive(id)
  }

  console.log(active)

  useEffect(() => {
    setDataDetails(data[0])
    setActive(data[0].id)

  }, [])


  return (


    <div className={style.CtnSup}>
      <div className={style.ctnBnts}>

        {
          data.map(data => <ButtonSec data={data} key={data.id} handleClick={handleClick} active={active} />)
        }

      </div>

      <>
        {
          <DetailsProyect data={dataDetails} />
        }
      </>
    </div >

  )
}

export default Proyects;

