const Home = () => {
  return (
    <div>
    <section className="hero-section">
      
      <img src="/images/hero-bg.jpg" alt="bannière développeur web" className="hero-image" />

      
      <div className="hero-overlay"></div>

     
      <div className="hero-content">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web Full Stack</h2>
        <a href="#presentation" className="btn btn-danger">En savoir plus</a>
      </div>
    </section>

    <section className="skills-section">
      <div className="skills-container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="text-start">A propos</h3>

            <hr style={{ border: "2px solid #0d6efd", opacity: "1", margin: "15px 0" }} />

           
            <img src="/images/john-doe-about.jpg" alt="John doe, développeur web" className="JohnDoe-image padding-home" />
            

            <div className="padding-home">
              <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h3 className="text-start">Mes compétences</h3>

            <hr style={{ border: "2px solid #0d6efd", opacity: "1", margin: "15px 0" }} />

            <div className="padding-home">
              <p className="text-start text-uppercase">html5 90%</p>
              <div className="progress mb-3" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
              </div>

              <p className="text-start text-uppercase">css3 80%</p>
              <div className="progress mb-3" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
              </div>

              <p className="text-start text-uppercase">javascript 70%</p>
              <div className="progress mb-3" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
              </div>

              <p className="text-start text-uppercase">php 60%</p>
              <div className="progress mb-3" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
              </div>

              <p className="text-start text-uppercase">react 50%</p>
              <div className="progress mb-3" role="progressbar" aria-label="Default example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-default" style={{ width: "50%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Home;