
const Contacto = () => {
    return (
        <>
        <section id="contact" className="contact">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="fa-solid fa-location-dot"></i>
                                <h4>Ubicación:</h4>
                                <p>Buenos Aires, Argentina</p>
                            </div>
                            <div className="email">
                                <i className="fa-solid fa-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@chelas.com.ar</p>
                            </div>
                            <div className="phone">
                                <i className="fa-solid fa-phone"></i>
                                <h4>Teléfono:</h4>
                                <p>+54 5589 5548</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form action="https://formsubmit.co/rodrigomontero89@gmail.com" method="post" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Tu Nombre" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Tu Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Cargando</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Tu mensaje fue enviado correctamente. Gracias!</div>
                            </div>
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" className="form-control" name="_subject" id="subject" value="chelas message!" required />
                            <div className="text-center"><button type="submit">Enviar Mensaje</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default Contacto;