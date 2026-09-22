function Services() {
  const services = [
    {
      number: "01",
      title: "Gestión de subsidios",
      description:
        "Orientación y acompañamiento en procesos relacionados con subsidios habitacionales y programas de apoyo.",
    },
    {
      number: "02",
      title: "Proyectos de construcción",
      description:
        "Asesoría en la planificación y desarrollo de proyectos de construcción, desde sus primeras etapas.",
    },
    {
      number: "03",
      title: "Asesoría personalizada",
      description:
        "Evaluamos las necesidades de cada cliente para orientar sus decisiones y encontrar alternativas adecuadas.",
    },
  ];

  return (
    <section id="servicios" className="services">
      <div className="services-container">

        <div className="services-header">
          <span className="section-tag">
            NUESTROS SERVICIOS
          </span>

          <h2>
            Soluciones para cada etapa de tu proyecto
          </h2>

          <p>
            Te entregamos orientación y acompañamiento para que
            puedas avanzar con mayor claridad y confianza.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contacto">
                Solicitar información →
              </a>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;