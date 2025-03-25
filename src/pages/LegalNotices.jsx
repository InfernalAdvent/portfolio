import ResponsiveHr from "../components/ResponsiveHr";

const LegalNotices = () => {
    return (
        <div>
            <section className="Legal-notices-title">
                <div className="container-title my-5 mx-auto">
                    <h1 className="mb-2">
                        <strong>Mentions Légales</strong>
                    </h1>
                    <p className="mb-4">
                        Voici les prestations sur lesquelles je peux intervenir
                    </p>
                    <ResponsiveHr />
                </div>
            </section>

            <section className="Legal-notices">
                <div className="container text-start my-5 py-4 mx-auto">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseOne" 
                                    aria-expanded="true" 
                                    aria-controls="collapseOne"
                                >
                                    Éditeur du site
                                </button>
                            </h2>
                            <div 
                                id="collapseOne" 
                                className="accordion-collapse collapse show" 
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <h4>John Doe</h4>
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
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseTwo" 
                                    aria-expanded="false" 
                                    aria-controls="collapseTwo"
                                >
                                    Hébergeur
                                </button>
                            </h2>
                            <div 
                                id="collapseTwo" 
                                className="accordion-collapse collapse" 
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <h3><strong>alwaysdata</strong></h3>
                                    <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-globe me-2"></i>
                                        <a href="https://www.alwaysdata.com/">www.alwaysdata.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseThree" 
                                    aria-expanded="false" 
                                    aria-controls="collapseThree"
                                >
                                    Crédits
                                </button>
                            </h2>
                            <div 
                                id="collapseThree" 
                                className="accordion-collapse collapse" 
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <h3><strong>Crédits</strong></h3>
                                    <div className="mb-3">
                                        <p className="d-inline">
                                            Ce site a été réalisé par John Doe, étudiant au
                                        </p>
                                        <a 
                                            href="https://www.centre-europeen-formation.fr/" 
                                            className="d-inline ms-1"
                                        >
                                            Centre Européen de Formation.
                                        </a>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-inline fst-italic">
                                            Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site
                                        </p>
                                        <a 
                                            href="https://www.pixabay.com/" 
                                            className="d-inline fst-italic ms-1"
                                        >
                                            Pixabay.
                                        </a>
                                    </div>
                                    <div className="mb-3">
                                        <p className="d-inline fst-italic">
                                            La favicon de ce site a été fournie par
                                        </p>
                                        <a 
                                            href="https://www.flaticon.com/de/kostenlose-icons/john-doe" 
                                            className="d-inline fst-italic ms-1"
                                        >
                                            John Doe Icons créé par Freepik - Flaticon
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LegalNotices;