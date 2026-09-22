import heroPlaceholder from "../assets/placeholder-proyecto.jpeg";

function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            SUBSIDIOS · CONSTRUCCIÓN · ASESORÍA
          </span>

          <h1>
            Construimos oportunidades para tu futuro
          </h1>

          <p>
            Te acompañamos en la gestión de subsidios y en el
            desarrollo de proyectos de construcción, entregando
            asesoría durante todo el proceso.
          </p>

          <div className="hero-buttons">
            <a href="#servicios" className="primary-button">
              Conoce nuestros servicios
            </a>

            <a href="#contacto" className="secondary-button">
              Solicitar asesoría
            </a>
          </div>

        </div>

        <div className="hero-image">
            <img
                src={heroPlaceholder}
                alt="Proyecto de construcción"
                className="hero-image-placeholder"
            />
        </div>

      </div>

    </section>
  );
}

export default Hero;