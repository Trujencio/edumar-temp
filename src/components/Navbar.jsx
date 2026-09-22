import logo from "../assets/logoedumar.jpeg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#inicio" className="logo">
          <img
            src={logo}
            alt="Logo de la empresa"
          />
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#encuestas">Encuestas</a>
          <a href="#proyectos">Proyectos</a>

          <a href="#contacto" className="nav-button">
            Contáctanos
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;