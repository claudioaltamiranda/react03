import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg border border-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-primary" to={'/'}>
          tuflota.com
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarBar"
          aria-controls="navbarBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarBar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to={'/categoria/caza'}>
                Caza
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to={'/categoria/ataque'}>
                Ataque
              </NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
