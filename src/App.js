import { Route, Routes } from 'react-router-dom';
import Pdf from './Pdf/Pdf';
import Render from './Render/Render';


function App() {
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
