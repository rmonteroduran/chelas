import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Privacidad from './pages/Privacidad';
import Terminos from './pages/Terminos';
import Acerca from './pages/Acerca';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import SearchContextProvider from './context/SearchContext';

const App = () => {
  return (
    <CartContextProvider>
    <SearchContextProvider>
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
    </SearchContextProvider>
    </CartContextProvider>
  )
};

export default App;
