import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <nav className="navbar sticky-top navbar-expand-md bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand logo" href="#">che<i className="fa-solid fa-beer-mug-empty"></i>as</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 barra">
                    <li>
                        <a className="nav-link" href="#" role="button">Nosotros</a>                  
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Nacionales</a></li>
                                <ul>
                                    <li><a className="dropdown-item" href="#">Industriales</a></li>
                                    <li><a className="dropdown-item" href="#">Artesanales</a></li>
                                </ul>
                            <li><a className="dropdown-item" href="#">Importadas</a></li>
                                <ul>
                                    <li><a className="dropdown-item" href="#">Americanas</a></li>
                                    <li><a className="dropdown-item" href="#">Europeas</a></li>
                                    <li><a className="dropdown-item" href="#">Asiáticas</a></li>
                                </ul>
                        </ul>
                    </li>
                    <li>
                        <a className="nav-link" href="#" role="button">Contacto</a>                  
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar chelas" aria-label="Search" />
                    <button className="btn btn-warning" type="submit">Buscar</button>
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