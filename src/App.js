import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/containers/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Nosotros from './components/pages/Nosotros';
import Contacto from './components/pages/Contacto';
import Privacidad from './components/pages/Privacidad';
import Terminos from './components/pages/Terminos';
import Acerca from './components/pages/Acerca';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';

const App = () => {
  return (
    <CartContextProvider>
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
      <Route path='/cart/' element={<Cart />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </CartContextProvider>
  )
};

export default App;
