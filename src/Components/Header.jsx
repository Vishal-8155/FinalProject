import React from "react";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "../css/elegant-icons.css";
import "../css/magnific-popup.css";
import "../css/nice-select.css";
import "../css/owl.carousel.min.css";
import "../css/slicknav.min.css";
import "../css/style.css";
import logo from '../img/logo.png';
import search from '../img/icon/search.png';
import heart from '../img/icon/heart.png';
import cart from '../img/icon/cart.png';

export default function Header() {
  return (
    <div>
      <>
        {/* <div id="preloder">
          <div className="loader" />
        </div> */}
        {/* Offcanvas Menu Begin */}
        <div className="offcanvas-menu-overlay" />
        <div className="offcanvas-menu-wrapper">
          <div className="offcanvas__option">
            <div className="offcanvas__links">
              <a href="#">Sign in</a>
              <a href="#">FAQs</a>
            </div>
            <div className="offcanvas__top__hover">
              <span>
                Usd <i className="arrow_carrot-down" />
              </span>
              <ul>
                <li>USD</li>
                <li>EUR</li>
                <li>USD</li>
              </ul>
            </div>
          </div>
          <div className="offcanvas__nav__option">
            <a href="#" className="search-switch">
              <img src="img/icon/search.png" alt="" />
            </a>
            <a href="#">
              <img src="img/icon/heart.png" alt="" />
            </a>
            <a href="#">
              <img src="img/icon/cart.png" alt="" /> <span>0</span>
            </a>
            <div className="price">$0.00</div>
          </div>
          <div id="mobile-menu-wrap" />
          <div className="offcanvas__text">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
        </div>
        {/* Offcanvas Menu End */}
        {/* Header Section Begin */}
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="header__top__left">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-5">
                  <div className="header__top__right">
                    <div className="header__top__links">
                      <a href="#">Sign in</a>
                      <a href="#">FAQs</a>
                    </div>
                    <div className="header__top__hover">
                      <span>
                        Usd <i className="arrow_carrot-down" />
                      </span>
                      <ul>
                        <li>USD</li>
                        <li>EUR</li>
                        <li>USD</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="header__logo">
                  <a href="./index.html">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li className="active">
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="./shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="./about.html">About Us</a>
                        </li>
                        <li>
                          <a href="./shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="./shopping-cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="./checkout.html">Check Out</a>
                        </li>
                        <li>
                          <a href="./blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="./blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="./contact.html">Contacts</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="header__nav__option">
                  <a href="#" className="search-switch">
                    <img src={search} alt="" />
                  </a>
                  <a href="#">
                    <img src={heart} alt="" />
                  </a>
                  <a href="#">
                    <img src={cart} alt="" /> <span>0</span>
                  </a>
                  <div className="price">$0.00</div>
                </div>
              </div>
            </div>
            <div className="canvas__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
      </>
    </div>
  );
}
