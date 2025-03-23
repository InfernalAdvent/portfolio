import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-light">
        <div className="container footer">
          <div className="row text-center text-md-start">
            <div className="col-12 col-md-4">
              <h4>John Doe</h4>
              <div className="info">
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>john.doe@gmail.com</p>
              </div>
              <div className="socialNetworks">
                <span>
                    <a href="https://github.com/github-john-doe" rel="noopener noreferrer nofollow"><i className="bi bi-github"></i></a>
                </span>
                <span>
                    <a href="https://x.com/johndoe?lang=fr" rel="noopener noreferrer nofollow"><i className="bi bi-twitter-x"></i></a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/company/wearewire/?trk=similar-pages_result-card_full-click&originalSubdomain=fr" rel="noopener noreferrer nofollow"><i className="bi bi-linkedin"></i></a>
                </span>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <h4>Liens utiles</h4>
              <ul className="list-unstyled">
                <li>
                  <NavLink className="nav-link custom-nav-link" to="/Home">
                    Accueil
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link custom-nav-link" to="/Services">
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link custom-nav-link" to="/Portfolio">
                    Portfolio
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link custom-nav-link" to="/Contact">
                    Me contacter
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link custom-nav-link" to="/LegalMentions">
                    Mentions Légales
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4">
              <h4>Mes dernières réalisations</h4>
              <ul className="list-unstyled">
                <li>
                  <NavLink className="nav-link custom-nav-link" to="#">
                    Fresh Food
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link custom-nav-link" to="#">
                    Restaurant Akira
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link custom-nav-link" to="#">
                    Espace bien-être
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link custom-nav-link" to="#">
                    SEO
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link custom-nav-link" to="#">
                    Création d'une API
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link custom-nav-link" to="#">
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