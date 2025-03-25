import ResponsiveHr from "../components/ResponsiveHr";

const Portfolio = () => {
    return (
        <div>
            <section className="portfolio-title">
                <img src="/images/banner.jpg" alt="bannière" className="banner" />
                <div className="container-title my-5 mx-auto">
                    <h1 className="mb-2">
                        <strong>Portfolio</strong>
                    </h1>
                    <p className="mb-4">Voici quelques unes de mes réalisations</p>
                    <ResponsiveHr />
                </div>
            </section>

            <section className="portfolio-cards">
                <div className="container my-5 py-4">
                    <div className="row gy-4 justify-content-center">
                        <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div className="card w-100">
                                <img src="/images/portfolio/fresh-food.jpg" className="card-img-top" alt="Fresh Food" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>Fresh Food</strong>
                                    </h4>
                                    <p className="card-text">Site de vente de produits frais en ligne</p>
                                    <button className="btn btn-primary">Voir le site</button>
                                </div>
                                <div className="card-body border-top">
                                    <p className="m-0">Site réalisé avec PHP et MySQL</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div className="card w-100">
                                <img src="/images/portfolio/restaurant-japonais.jpg" className="card-img-top" alt="Restaurant Akira" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>Restaurant Akira</strong>
                                    </h4>
                                    <p className="card-text">Site du restaurant Akira</p>
                                    <button className="btn btn-primary">Voir le site</button>
                                </div>
                                <div className="card-body border-top">
                                    <p className="m-0">Site réalisé avec WordPress</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div className="card w-100">
                                <img src="/images/portfolio/espace-bien-etre.jpg" className="card-img-top" alt="Espace bien-être" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>Espace bien-être</strong>
                                    </h4>
                                    <p className="card-text">Site de vente de produits en ligne</p>
                                    <button className="btn btn-primary">Voir le site</button>
                                </div>
                                <div className="card-body border-top">
                                    <p className="m-0">Site réalisé avec LARAVEL</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div className="card w-100">
                                <img src="/images/portfolio/seo.jpg" className="card-img-top" alt="SEO" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>SEO</strong>
                                    </h4>
                                    <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                                    <button className="btn btn-primary">Voir le site</button>
                                </div>
                                <div className="card-body border-top">
                                    <p className="m-0">Utilisation des outils SEO</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div className="card w-100">
                                <img src="/images/portfolio/coder.jpg" className="card-img-top" alt="Création d'une API" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>Création d'une API</strong>
                                    </h4>
                                    <p className="card-text">Création d'une API RESTFUL publique</p>
                                    <button className="btn btn-primary">Voir le site</button>
                                </div>
                                <div className="card-body border-top">
                                    <p className="m-0">PHP - SYMPHONY</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center">
                            <div className="card w-100">
                                <img src="/images/portfolio/screens.jpg" className="card-img-top" alt="Maquette d'un site web" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>Maquette d'un site web</strong>
                                    </h4>
                                    <p className="card-text">Création du prototype d'un site</p>
                                    <button className="btn btn-primary">Voir le site</button>
                                </div>
                                <div className="card-body border-top">
                                    <p className="m-0">Réalisé avec FIGMA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;