import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { SearchContext } from '../context/SearchContext';
import { useContext } from "react";

const NavBar = () => {
    const search = useContext(SearchContext);

    const handleChange = e => {
        search.setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = search.searchProducts.filter((el) => {
            if (el.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return el;
            } else {
                return "";
            }
        });
        search.setProducts(resultadoBusqueda)
    }

    return (
    <nav className="navbar sticky-top navbar-expand-md bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand logo" to='/'>che<i className="fa-solid fa-beer-mug-empty"></i>as</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 barra">
                    <li><Link className="nav-link" to="nosotros/">Nosotros</Link></li>
                    <li className="nav-item dropdown">
                        <Link to='/' className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cervezas</Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="category/1">Nacionales</Link></li>
                            <li><Link className="dropdown-item" to="category/2">Americanas</Link></li>
                            <li><Link className="dropdown-item" to="category/3">Europeas</Link></li>
                        </ul>
                    </li>
                    <li><Link className="nav-link" to="contacto/">Contacto</Link></li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar chelas" aria-label="Search" onChange={handleChange} />
                </form>
            </div>
            <div className="navbar-brand">
                <CartWidget /> 
            </div>
        </div>
    </nav>
    )
};

export default NavBar;