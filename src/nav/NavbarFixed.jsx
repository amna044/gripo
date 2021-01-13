import React from 'react'
import { NavLink as Link } from "react-router-dom";
import { KeyboardArrowDown } from "@material-ui/icons";
import "./NavbarFixed.css";

function NavbarFixed() {
    return (
        <nav className="nav">
            <div className="nav__logo">
        <Link to="/" className="navoptionslink__logo">
        <a className="nav__link" href="www.google.com">
        <img
          className="nav__img"
          src="https://appscode.com/assets/images/products/appscode/appscode-1280x640.png"
          alt="apps"
        />
      </a> 
        </Link>
      </div>

      <div className="nav__options">

        <div className="navoption__dropdown">
          <div className="nav__menu">
            <a className="navoption__oned">Products </a>
            <span className="navoption__twod">
              <KeyboardArrowDown />
            </span>
                <Submenu />
          </div>
        </div>
        <div className="navoption__dropdown">
          <div className="nav__menu">
            <a className="navoption__oned">Open Source </a>
            <span className="navoption__twod">
              <KeyboardArrowDown />
            </span>
            <Submenu />
          </div>
        </div>
        <div className="navoption__dropdown">
          <div className="nav__menu">
            <a className="navoption__oned">Services </a>
            <span >
              <KeyboardArrowDown className="navoption__twod" />
            </span>
            <Submenu />
          </div>

        </div>

         <Link to="/blogs" className="navoptions__link">
          <div className="navoption__pg">
            <span className="navoption__one">Blogs</span>
          </div>
        </Link>
        <Link to="/contact" className="navoptions__link">
          <div className="navoption__pg">
            <span className="navoption__one">Contact Us</span>
          </div>
        </Link> 
      </div>

        </nav>
    )
}

function Submenu() {
    return (
      <div className="nav__submenu">
        <div className="main__container">
        <div className="container">
        <li className="nav__submenu-item ">
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
        <li className="nav__submenu-item ">
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
        <li className="nav__submenu-item ">
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
        <li className="nav__submenu-item ">
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
        <li className="nav__submenu-item ">
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
        <li className="nav__submenu-item ">
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
  

export default NavbarFixed
