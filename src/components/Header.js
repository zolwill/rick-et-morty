import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './style.css';

export default function Header() {
  /*   const [active, setActive] = useState('characters');

  const handleActiveLink = function (event) {
    const listItem = document.querySelectorAll('nav a');

    // Supprimer la classe `text-info` sur tout les liens du menu
    // En utilisant la variable `listItem`
    for (const item of listItem) {
      item.classList.remove('text-info');
    }
    event.target.classList.add('text-info');
  }; */

  return (
    <header>
      <Link
        className="text-info text-decoration-none"
        to="/">
        <h1 className="text-center mt-4 ">Rick & Morty</h1>
      </Link>

      <nav>
        <ul
          className="d-flex gap-2 justify-content-center"
          style={{ listStyle: 'none' }}>
          <li>
            <NavLink // a
              id="characters"
              
              className={({ isActive }) =>
                isActive
                  ? 'text-info fw-bold text-underline'
                  : 'text-decoration-none text-secondary'
              }
              to="/">
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-info fw-bold text-underline'
                  : 'text-decoration-none text-secondary'
              }
              id="location"
              to="/location">
              Locations
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
