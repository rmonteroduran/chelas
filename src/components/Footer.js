import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="info">
                <div className="redes">
                    <p className="navbar-brand logo">che<i className="fa-solid fa-beer-mug-empty"></i>as</p>
                    <div>
                        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://es-la.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="acerca">
                    <h4>Acerca de</h4>
                    <div>
                        <Link to="acerca/">Preguntas frecuentes</Link>
                        <Link to="terminos/">Términos y condiciones</Link>
                        <Link to="privacidad/">Politicas de privacidad</Link>
                    </div>
                </div>
                <div className="apps">
                    <h4>Nuestras apps</h4>
                    <div>
                        <a href="https://www.apple.com/la/app-store/"><img src="./apple.svg" alt="App Store" /></a>
                        <a href="https://play.google.com/store?hl=es"><img src="./google.svg" alt="Google Play" /></a>
                    </div>
                </div>
            </div>
            <div className="derechos">
                <p><strong className="copy">&copy; </strong>chelas! 2022 - BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS.</p>
            </div>
        </footer>
    )
};

export default Footer;