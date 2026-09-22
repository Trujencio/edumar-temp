function Survey() {
  return (
    <section id="encuestas" className="survey">
      <div className="survey-container">

        <div className="survey-content">
          <span className="section-tag">
            INICIA TU PROCESO
          </span>

          <h2>
            ¿Quieres conocer tus opciones de subsidio?
          </h2>

          <p>
            Completa nuestra encuesta con tus antecedentes para
            que podamos conocer tu situación y contar con la
            información necesaria para orientarte.
          </p>

          <a
            href="#"
            className="survey-button"
          >
            Completar encuesta →
          </a>
        </div>

        <div className="survey-info">

          <div className="survey-step">
            <span>01</span>
            <div>
              <h3>Completa la encuesta</h3>
              <p>
                Ingresa la información solicitada.
              </p>
            </div>
          </div>

          <div className="survey-step">
            <span>02</span>
            <div>
              <h3>Evaluamos tus antecedentes</h3>
              <p>
                Revisamos la información proporcionada.
              </p>
            </div>
          </div>

          <div className="survey-step">
            <span>03</span>
            <div>
              <h3>Recibe orientación</h3>
              <p>
                Te contactamos para orientarte sobre los
                siguientes pasos.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Survey;