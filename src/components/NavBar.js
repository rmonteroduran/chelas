import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand logo" href="#">che
            <i className="fa-solid fa-beer-mug-empty"></i>
            as</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Variedades
                    </a>
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
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar chelas" aria-label="Search" />
                <button className="btn btn-warning" type="submit">Buscar</button>
            </form>
            <CartWidget />
            </div>
        </div>
    </nav>
    )
};

export default NavBar;