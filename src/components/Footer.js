import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-light">
        <div className="container p-5">
          <div className="row text-center text-md-start">
            <div className="col-12 col-md-4">
              <h4>John Doe</h4>
              <address>
                <div className="mt-3 mb-3">
                  <p className="mb-2">40 rue Laure Diebold</p>
                  <p className="mb-2">69009 Lyon, France</p>
                  <p className="mb-2">10 20 30 40 50</p>
                  <p className="mb-2">john.doe@gmail.com</p>
                </div>
              </address>
              <div className="socialNetworks mb-3">
                <span>
                    <a href="https://github.com/github-john-doe" rel="noopener noreferrer nofollow"><i className="bi bi-github pe-2 pt-1"></i></a>
                </span>
                <span>
                    <a href="https://x.com/johndoe?lang=fr" rel="noopener noreferrer nofollow"><i className="bi bi-twitter-x pe-2 pt-1"></i></a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/company/wearewire/?trk=similar-pages_result-card_full-click&originalSubdomain=fr" rel="noopener noreferrer nofollow"><i className="bi bi-linkedin pe-2 pt-1"></i></a>
                </span>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <h4>Liens utiles</h4>
              <ul className="list-unstyled">
                <li>
                  <NavLink className="nav-link nav-link-footer" to="/Home">
                    Accueil
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link nav-link-footer" to="/Services">
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link nav-link-footer" to="/Portfolio">
                    Portfolio
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link nav-link-footer" to="/Contact">
                    Me contacter
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link nav-link-footer" to="/LegalNotices">
                    Mentions Légales
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <h4>Mes dernières réalisations</h4>
              <ul className="list-unstyled">
                <li>
                  <NavLink className="nav-link  nav-link-footer" to="#">
                    Fresh Food
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link  nav-link-footer" to="#">
                    Restaurant Akira
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link  nav-link-footer" to="#">
                    Espace bien-être
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link  nav-link-footer" to="#">
                    SEO
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link  nav-link-footer" to="#">
                    Création d'une API
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link  nav-link-footer" to="#">
                    Maquette d'un site
                  </NavLink>
                </li>
              </ul>

            </div>
          </div>
        </div>
    </footer>
    );
}

export default Footer;