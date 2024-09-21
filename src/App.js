
import './App.css';

import Nav from './compents/Nav';
import About from './compents/About';
import Contacts from './compents/Contacts';
import Expolar from './compents/Expolar';
import Homes from './compents/Homes';
import Notfound from './compents/Notfound';
import Footer from './compents/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App () {
  return(
    <BrowserRouter>
    <>
    
        <Nav />
        <Routes>

       
        < Route path='/' element={<Homes/>} />
        < Route path='/Expolar' element={<Expolar/>} />
        < Route path='/About' element={<About/>} />
        < Route path='/Contacts' element={<Contacts/>} />
        <Route path='/Notfound' element={<Notfound/>} />

        </Routes>
        <Footer/>
      </>
      </BrowserRouter>
      
      
  );
}

export default App;


 