import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <>
    <NavBar />
    {/*<ItemListContainer />*/}
    <ItemDetailContainer />
    <Footer />
    </>
  )
};

export default App;
