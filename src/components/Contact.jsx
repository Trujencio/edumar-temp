function Contact() {
  const contacts = [
    {
      name: "Nolberto Nuñez",
      role: "Cargo 1",
      phone: "+56 9 1234 5678",
      email: "contacto@empresa.cl",
    },
    {
      name: "Cristián Nuñez",
      role: "Cargo 2",
      phone: "+56 9 8765 4321",
      email: "asesoria@empresa.cl",
    },
    {
      name: "Carolina ",
      role: "Cargo 3",
      phone: "+56 9 1234 5678",
      email: "contacto@empresa.cl",
    },
  ];

  return (
    <section id="contacto" className="contact">
      <div className="contact-container">

        <div className="contact-header">
          <span className="section-tag">
            CONTÁCTANOS
          </span>

          <h2>
            Estamos aquí para ayudarte
          </h2>

          <p>
            Comunícate directamente con nuestro equipo o
            déjanos tu información y nos pondremos en contacto
            contigo.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-people">

            <h3>Personas de contacto</h3>

            <div className="contacts-grid">

              {contacts.map((person) => (
                <div
                  className="contact-person"
                  key={person.email}
                >

                  <div className="person-avatar">
                    {person.name.charAt(0)}
                  </div>

                  <div className="person-info">

                    <h4>{person.name}</h4>

                    <span className="person-role">
                      {person.role}
                    </span>

                    <a href={`tel:${person.phone}`}>
                      📞 {person.phone}
                    </a>

                    <a href={`mailto:${person.email}`}>
                      ✉ {person.email}
                    </a>

                  </div>

                </div>
              ))}

            </div>

            {/* DIRECCIÓN */}
             <div className="contact-location">

                <span className="section-tag">
                    NUESTRA OFICINA
                </span>

                <h3>Visítanos</h3>

                <p>
                    Estamos enAlmagro 975, La Serena
                </p>

            </div>

          </div>

          <form className="contact-form">

            <h3>Envíanos un mensaje</h3>

            <label>
              Nombre
              <input
                type="text"
                placeholder="Tu nombre"
              />
            </label>

            <label>
              Correo electrónico
              <input
                type="email"
                placeholder="tu@email.com"
              />
            </label>

            <label>
              Teléfono
              <input
                type="tel"
                placeholder="+56 9..."
              />
            </label>

            <label>
              Mensaje
              <textarea
                rows="5"
                placeholder="¿En qué podemos ayudarte?"
              />
            </label>

            <button type="submit">
              Enviar consulta
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;