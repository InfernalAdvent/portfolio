import ResponsiveHr from "../components/ResponsiveHr";

const Services = () => {
    return (
        <div>
            <section className="services-title">
                <img src="/images/banner.jpg" alt="bannière" className="banner" />
                <div className="container-title my-5 mx-auto">
                    <h1 className="mb-2">
                        <strong>Mon offre de service</strong>
                    </h1>
                    <p className="mb-4">
                        Voici les prestations sur lesquelles je peux intervenir
                    </p>
                    <ResponsiveHr />
                </div>
            </section>

            <section className="services-card">
                <div className="container my-5 py-4 mx-auto">
                    <div className="row align-items-stretch px-3 gy-3">
                        
                        {/* UX Design */}
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <div className="p-4">
                                        <i className="bi bi-brush fs-1 text-primary"></i>
                                    </div>
                                    <h3>
                                        <strong>UX Design</strong>
                                    </h3>
                                    <p>
                                        L'UX Design est une discipline qui consiste à concevoir des produits 
                                        (sites web, applications, mobiles, logiciels, objets connectés, etc.)
                                        en plaçant l'utilisateur au centre des préoccupations. L'objectif est 
                                        de rendre l'expérience utilisateur la plus fluide et agréable possible.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Développement Web */}
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <div className="card-body pb-5">
                                    <div className="p-4">
                                        <i className="bi bi-code-slash fs-1 text-primary"></i>
                                    </div>
                                    <h3>
                                        <strong>Développement web</strong>
                                    </h3>
                                    <p>
                                        Le développement de sites web consiste à créer des sites internet en
                                        utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
                                        et des frameworks (Bootstrap, React, Angular, etc.).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Référencement */}
                        <div className="col-12 col-md-4">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <div className="p-4">
                                        <i className="bi bi-search fs-1 text-primary"></i>
                                    </div>
                                    <h3>
                                        <strong>Référencement</strong>
                                    </h3>
                                    <p>
                                        Le référencement naturel (SEO) est une technique qui consiste à optimiser
                                        un site web pour le faire remonter dans les résultats des moteurs de 
                                        recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un 
                                        maximum de visiteurs qualifiés sur le site.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;