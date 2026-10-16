import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🐾 PawPedia
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/breeds">All Breeds</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;