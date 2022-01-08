import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Pdf from './Pdf/Pdf';
import Render from './Render/Render';


const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");




function App() {

  useEffect(() => {
    showLoader();
    addClass();
  }, []);

  return (
    <div className='App'>

      <Routes>
        <Route exact path="/" element={<Render />} />
        <Route exact path="/pdf" element={<Pdf />} />

      </Routes>

    </div>
  );
}

export default App;
