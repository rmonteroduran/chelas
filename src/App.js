import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Privacidad from './components/Privacidad';
import Terminos from './components/Terminos';
import Acerca from './components/Acerca';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:id' element={<ItemListContainer />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='/nosotros/' element={<Nosotros />} />
      <Route path='/contacto/' element={<Contacto />} />
      <Route path='/terminos/' element={<Terminos />} />
      <Route path='/privacidad/' element={<Privacidad />} />
      <Route path='/acerca/' element={<Acerca />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
};

export default App;
