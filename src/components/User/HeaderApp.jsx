import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../assets/css/font-face.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../../assets/images/logo.png'

export default function HeaderApp() {
  return (
    <div>
         {/* hunger hunt header section */}
  <section id="hunt-header">
    {/* hunger hunt navbar section */}
    <nav className="navbar navbar-expand-md">
      <Link to="index.html" className="navbar-brand ms-5">
        <img src={logo} />
        <strong className="logo-txt">
          Hunger<b>HUNT</b>
        </strong>
      </Link>
      {/* navbar start here */}
      <button
        type="button"
        className="navbar-toggler btn btn-sm btn-white"
        data-bs-toggle="collapse"
        data-bs-target="#CollTogg"
      >
        <i className="bi bi-grid-3x3-gap text-white" />
      </button>
      <div className="collapse navbar-collapse" id="CollTogg">
        <ul className="navbar-link navbar-expand-md">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="reservations.html">Reservations</Link>
          </li>
          <li className="dropdown">
            <Link
              className="dropdown-toggle"
              data-bs-toggle="dropdown"
              to="menu.html"
            >
              Menu
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="punjabi.html">Punjabi thali</Link>
              </li>
              <li>
                <Link to="chinease.html">Chinease</Link>
              </li>
              <li>
                <Link to="gujrati.html">Gujrati fixed thali</Link>
              </li>
              <li>
                <Link to="italian.html">Italians</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <i className="bi bi-facebook" />
            <i className="bi bi-twitter" />
            <i className="bi bi-instagram" />
            <i className="bi bi-youtube" />
          </li>
        </ul>
      </div>
    </nav>
    </section>
    </div>
  )
}
