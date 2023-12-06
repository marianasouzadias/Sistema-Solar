import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";
const Navbar = ({ planetList }) => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>Sistema Solar</Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        {planetList &&
          planetList.map((planet) => (
            <li key={planet.nome}>
              <Link to={`/planetas/${planet.nome}`}>{planet.nome}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  planetList: PropTypes.array.isRequired,
};

export default Navbar;
