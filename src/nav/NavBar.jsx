import React from "react";
import "./NavBar.css";
import { NavLink as Link } from "react-router-dom";
import { KeyboardArrowDown, SearchIcon } from "@material-ui/icons";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navbar__logo">
        <Link to="/" className="navbaroptionslink__logo">
          <span className="navbar__logoText">Gripo.io</span>
        </Link>
      </div>

      <div className="navbar__options">
        <Link to="/whygripo" className="navbaroptions__link">
          <div className="navbaroption__pg">
            <span className="navbaroption__one">Why Gripo?</span>
          </div>
        </Link>
        <Link to="/whygripo" className="navbaroptions__link">
          <div className="navbaroption__pg">
            <span className="navbaroption__one">Features</span>
          </div>
        </Link>

        <div className="navbaroption__dropdown">
          <div className="nav__menu">
            <a className="navbaroption__oned">Databases </a>
            <span className="navbaroption__twod">
              <KeyboardArrowDown />
            </span>

            <Submenu />
          </div>
        </div>
        <Link to="/docs" className="navbaroptions__link">
          <div className="navbaroption__pg">
            <span className="navbaroption__one">Documentation</span>
          </div>
        </Link>

        <div className="navbaroption__dropdown">
          <div className="nav__menu">
            <a className="navbaroption__oned">Community </a>
            <span className="navbaroption__twod">
              <KeyboardArrowDown />
            </span>

            <Submenu />
          </div>
        </div>

        {/* <Link to="/blogs" className="navbaroptions__link">
          <div className="navbaroption__pg">
            <span className="navbaroption__one">Blogs</span>
          </div>
        </Link>
        <Link to="/contact" className="navbaroptions__link">
          <div className="navbaroption__pg">
            <span className="navbaroption__one">Contact Us</span>
          </div>
        </Link> */}
      </div>
    </nav>
  );
}

function Submenu() {
  return (
    <div className="navbar__submenu">
      <div className="main__container">
      <div className="container">
      <li className="navbar__submenu-item">
        <div>
          <div className="submenu-sub">
            <img
              className="icon-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNwDcBVIF6VAJ1GGVGwhYrjiZXOuABtPEXA&usqp=CAU"
              alt=""
            />
            <a  className="li-link">GitHub</a>
          </div>

          <p className="li-text">some text here</p>
        </div>
      </li>
      <li className="navbar__submenu-item">
        <div>
          <div className="submenu-sub">
            <img
              className="icon-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNwDcBVIF6VAJ1GGVGwhYrjiZXOuABtPEXA&usqp=CAU"
              alt=""
            />
            <a className="li-link">Twitter</a>
          </div>

          <p className="li-text">some text here</p>
        </div>
      </li>
      <li className="navbar__submenu-item">
        <div>
          <div className="submenu-sub">
            <img
              className="icon-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNwDcBVIF6VAJ1GGVGwhYrjiZXOuABtPEXA&usqp=CAU"
              alt=""
            />
            <a className="li-link">Slack</a>
          </div>
          <p className="li-text">some text here</p>
        </div>
      </li>
      </div>

      <div className="container_2">
      <li className="navbar__submenu-item">
        <div>
          <div className="submenu-sub">
            <img
              className="icon-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNwDcBVIF6VAJ1GGVGwhYrjiZXOuABtPEXA&usqp=CAU"
              alt=""
            />
            <a className="li-link">GitHub</a>
          </div>

          <p className="li-text">some text here</p>
        </div>
      </li>
      <li className="navbar__submenu-item">
        <div>
          <div className="submenu-sub">
            <img
              className="icon-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNwDcBVIF6VAJ1GGVGwhYrjiZXOuABtPEXA&usqp=CAU"
              alt=""
            />
            <a className="li-link">Twitter</a>
          </div>

          <p className="li-text">some text here</p>
        </div>
      </li>
      <li className="navbar__submenu-item">
        <div>
          <div className="submenu-sub">
            <img
              className="icon-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNwDcBVIF6VAJ1GGVGwhYrjiZXOuABtPEXA&usqp=CAU"
              alt=""
            />
            <a className="li-link">Slack</a>
          </div>
          <p className="li-text">some text here</p>
        </div>
      </li>
      </div>
    </div>
    </div>
  );
}

export default NavBar;
