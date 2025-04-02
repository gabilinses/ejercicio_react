import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            <img src="/assets/img/logo.png" width="30" height="30" className="clickable-logo" alt=""/>
        </Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/Accesorios" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Accesorios 
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/Argollas">Argollas de matrimonio</Link>
                <Link className="dropdown-item" to="/Aretes">Aretes o Candongas</Link>
                <Link className="dropdown-item" to="/Pulseras">Pulseras o Tobilleras</Link>
                <Link className="dropdown-item" to="/Dijes">Dijes</Link>
                <Link className="dropdown-item" to="/Miyuki">Miyuki</Link>
              </div>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/SobreNosotros">Sobre Nosotros <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Header;
