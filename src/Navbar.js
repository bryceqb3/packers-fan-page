import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>🧀 Packers Fan Page</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/standings">Standings</Link></li>
        <li><Link to="/players">Players</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;