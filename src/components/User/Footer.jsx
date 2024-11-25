import React from 'react'
import visa from '../../assets/images/001-visa.png';
import mastercard from '../../assets/images/002-mastercard.png'
import american from '../../assets/images/003-american-express.png'

function Footer() {
  return (
    <div>
        
  {/* footer start here */}
  <section className=" " id="hunt-footer">
    <div className="footer-section p-5">
      <div className="container mt-5  row">
        <div className="col-md-3">
          <ul className="navbar-footer">
            <li>
              <a href="">
                <h5>Contact Info</h5>
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                PO box numbers 1612 street numberUSA
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-phone" />
                (+91)9998003879
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="navbar-footer">
            <li>
              <a href="">
                <h5>Support</h5>
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                FAQ
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Delivery
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Payments Options
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Returns &amp; Refunds
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="navbar-footer">
            <li>
              <a href="">
                <h5>Shop</h5>
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Non-Veg
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Veg
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Salad
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Desserts
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="navbar-footer">
            <li>
              <a href="">
                <h5>Information</h5>
              </a>
            </li>
            <li>
              <a href="index.html">
                {" "}
                <i className="bi bi-geo-alt" />
                Home
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                About Us
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Blogs
              </a>
            </li>
            <li>
              <a href="contact.html">
                {" "}
                <i className="bi bi-geo-alt" />
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul className="navbar-footer">
            <li>
              <a href="">
                <h5>My Account</h5>
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Your Account
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Checkout
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Login
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <i className="bi bi-geo-alt" />
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bottom-footer p-4">
      <div className="row">
        <div className="col-md-7">
          <p className="text-white text-center">
            @ 2019 Templates Hunt Jungle. All Rights Reserved.
          </p>
        </div>
        <div className="col-md-4 ms-5">
          <img src={visa} />
          <img src={mastercard} />
          <img src={american} />
        </div>
      </div>
    </div>
    {/* whatsapp api  */}
  </section>
  {/*<div className="whatapp-api ">
    <div className="api float-end">
     
      <a href="https://api.whatsapp.com/send?phone=919998003879&text=https://patelvihar.com/">
        <i
          className="bi bi-whatsapp text-success  float-end"
          style={{ fontSize: 65 }}
        />
      </a>
    </div>
  </div>*/}
  {/* hunger footer  section */}


    </div>
  )
}

export default Footer