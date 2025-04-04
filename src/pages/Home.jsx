import { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState(null); /* On déclare l'état useState */

  const getUser = async () => {
    try {
      const res = await fetch("https://api.github.com/users/github-john-doe"); /* Requête vers l'API Gihub pour récupérer les infos */
      const json = await res.json(); 
      setUser(json); /* Met à jour l'état user avec les données récupérées */
    } catch (err) {
      console.error("Erreur lors de la récupération des données GitHub", err); /* Au cas où la requête échoue */
    }
  };

  useEffect(() => {
    getUser(); /* Exécuté qu'une seule fois au chargement de la page */
  }, []);

  return (
    <div>
      {/* Intro */}
      <section className="hero-section">
        <img
          src="/images/hero-bg.jpg"
          alt="bannière développeur web"
          className="hero-image"
        />
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="fs-1 fs-md-2 fs-sm-3 mb-4"><strong>Bonjour, je suis John Doe</strong></h1>
          <h2 className="fs-2 fs-md-3 fs-sm-4 mb-4"><strong>Développeur web Full Stack</strong></h2>
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#aboutModal"
          >
            En savoir plus
          </button>
        </div>
      </section>
      {/* Compétences */}
      <section className="skills-section">
        <div className="skills-container my-5 mx-auto pt-4 pb-4 px-4">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="text-start"><strong>À propos</strong></h3>
              <hr className="border-primary border-3 opacity-100 my-3" />
              <img
                src="/images/john-doe-about.jpg"
                alt="John Doe, développeur web"
                className="JohnDoe-image my-4 mx-auto"
              />
              <div className="pt-4">
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="text-start"><strong>Mes compétences</strong></h3>
              <hr className="border-primary border-3 opacity-100 my-3" />
              <div className="padding-home">
                {[
                  { skill: "HTML5", value: 90, color: "danger" },
                  { skill: "CSS3", value: 80, color: "info" },
                  { skill: "JavaScript", value: 70, color: "warning" },
                  { skill: "PHP", value: 60, color: "success" },
                  { skill: "React", value: 50, color: "default" },
                ].map(({ skill, value, color }) => (
                  <div key={skill}>
                    <p className="text-start text-uppercase">{`${skill} ${value}%`}</p>
                    <div
                      className="progress mb-3"
                      role="progressbar"
                      aria-valuenow={value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className={`progress-bar bg-${color}`} style={{ width: `${value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal GitHub */}
      <div className="modal fade" id="aboutModal" tabIndex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h4 className="modal-title text-light" id="aboutModalLabel"><strong>Mon profil Github</strong></h4>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              {user ? (
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <img src={user.avatar_url} alt={user.name} className="img-fluid" width="300" />
                    </div>
                    <div className="col-12 col-md-6">
                      <ul className="list-group list-group-flush bg-dark text-start">
                        <li className="list-group-item list-group-item-dark bg-dark text-light">
                          <i className="bi bi-person me-2"></i>
                          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-info">
                            {user.name || "N/A"}
                          </a>
                        </li>
                        <li className="list-group-item list-group-item-dark bg-dark text-light">
                          <i className="bi bi-geo-alt me-2"></i>
                          {user.location || ""}
                        </li>
                        <li className="list-group-item list-group-item-dark bg-dark text-light">
                          <i className="bi bi-card-text me-2"></i>
                          {user.bio || "Pas de bio"}
                        </li>
                        <li className="list-group-item list-group-item-dark bg-dark text-light">
                          <i className="bi bi-box me-2"></i>
                          {user.public_repos}
                        </li>
                        <li className="list-group-item list-group-item-dark bg-dark text-light">
                          <i className="bi bi-people me-2"></i>
                          {user.followers}
                        </li>
                        <li className="list-group-item list-group-item-dark bg-dark text-light">
                          <i className="bi bi-people me-2"></i>
                          {user.following}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Chargement des données...</p>
              )}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;