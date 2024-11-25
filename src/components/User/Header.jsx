import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
        
        <>
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
    {/* hunger hunt slider section */}
    <div className="container hunter-slider">
      <div className="slider-text p-5">
        <h2>Welcome to</h2>
        <h1 className="text-white text-center">Hunger Hunt</h1>
        <hr className="border border-1 border-white w-50 mx-auto" />
        <p className="text-center text-white">
          Get the freshest ingredients from hunger hunt
        </p>
        <p></p>
        <form method="post" className="">
          <div className="col-md-7 mx-auto">
            <div className="input-group">
              <input
                type="datetime-local"
                className="form-control"
                required=""
              />
              <button type="button" className="btn btn-sm btn-booknow">
                Book Now
              </button>
            </div>
          </div>
        </form>
        <p />
        <p className="text-white w-50 mx-auto slider-para">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          doloribus autem consequuntur obcaecati fuga incidunt at sint
          reprehenderit illum odio necessitatibus ut eos non ratione, soluta,
          dicta voluptatibus quaerat quas.
        </p>
      </div>
    </div>
  </section>
  {/* hunger hunt header closed section */}
</>



    </div>
  )
}

export default Header