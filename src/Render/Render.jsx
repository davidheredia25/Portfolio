import React from 'react';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Porfolio from '../Portfolio/Porfolio';
import Proyects from '../Proyects/Proyects/Proyects';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';


const Render = () => {

    return (
        <div>
            <Home />
            <Porfolio />
            <Proyects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default Render;