import ResponsiveHr from "../components/ResponsiveHr";

const Contact = () => {
    return (
        <div>
            <section className="contact-title">
                <div className="container-title my-5 mx-auto">
                    <h1 className="mb-2">
                        <strong>Contact</strong>
                    </h1>
                    <p className="mb-4">
                        Pour me contacter en vue d'un entretien ou d'une future collaboration,
                        merci de remplir ce formulaire de contact.
                    </p>
                    <ResponsiveHr />
                </div>
            </section>

            <section className="contact">
                <div className="contact-container my-5 mx-auto pt-4 pb-4 px-4">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3 className="text-start">
                                <strong>Formulaire de contact</strong>
                            </h3>
                            <hr className="border-primary border-3 opacity-100 my-3" />
                            <div className="pt-3">
                                <form>
                                    <div className="mb-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Votre nom"
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Votre adresse email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Votre numéro de téléphone"
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="Sujet"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            id="Textarea"
                                            placeholder="Votre Message"
                                            rows="15"
                                            required
                                        ></textarea>
                                    </div>
                                    <button className="btn btn-primary" type="submit">
                                        Envoyer
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Coordonnées */}
                        <div className="col-12 col-md-6">
                            <h3 className="text-start">
                                <strong>Mes coordonnées</strong>
                            </h3>
                            <hr className="border-primary border-3 opacity-100 my-3" />
                            <div className="pt-3">
                                <div className="d-flex align-items-center">
                                    <h4>John Doe</h4>
                                </div>
                                <address>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-map me-1"></i>
                                        <p className="mb-1">40 rue Laure Diebold</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-geo-alt me-1"></i>
                                        <p className="mb-1">69009 Lyon, France</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-phone me-1"></i>
                                        <p className="mb-1">10 20 30 40 50</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-envelope-arrow-down me-1"></i>
                                        <p className="mb-1">johndoe@gmail.com</p>
                                    </div>
                                </address>
                            </div>
                            <div className="mt-4">
                                <iframe
                                    title="Google Maps - 40 Rue Laure Diebold, Lyon"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.2539315082095!2d4.796403976715944!3d45.7786657124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1742925347002!5m2!1sfr!2sfr"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;