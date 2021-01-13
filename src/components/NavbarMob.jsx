import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import "./NavbarMob.css";
import { StyledOffCanvas, Menu, Overlay } from "styled-off-canvas";

function NavBarMob() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBarMob ">
      <div className="navbar__logo">
        <Link to="/" className="navbarMob__logo">
          <span className="navbar__logoText">Gripo.io</span>
        </Link>
      </div>
      <div className="navbarMob__menu">
        <StyledOffCanvas isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <MenuIcon onClick={() => setIsOpen(!isOpen)}></MenuIcon>

          <Menu className="menu">
            <ul className="menu__list">
              <span className="menuli__close">
                <a onClick={() => setIsOpen(false)}>X</a>
              </span>

              <span>
                <Link to="/whygripo" className="navbaroptions__link">
                  <div className="menu__li">
                    <span className="menu__option">Why Gripo?</span>
                  </div>
                </Link>
              </span>

              <span>
                <Link to="/docs" className="navbaroptions__link">
                  <div className="menu__li">
                    <span className="menu__option">Docs</span>
                  </div>
                </Link>
              </span>
              <span>
                <Link to="/blogs" className="navbaroptions__link">
                  <div className="menu__li">
                    <span className="menu__option">Blogs</span>
                  </div>
                </Link>
              </span>
              <span>
                <Link to="/contact" className="navbaroptions__link">
                  <div className="menu__li">
                    <span className="menu__option">Contact Us</span>
                  </div>
                </Link>
              </span>
            </ul>
          </Menu>

          <Overlay />
        </StyledOffCanvas>
      </div>
    </nav>
  );
}

export default NavBarMob;
{
  /* <MenuIcon style={{ fontSize: 32 }} color="primary" >
<ul>
  {/* onClick={() => setIsOpen(false)} 
<li>
<a >close</a> 
</li>
<li>
<a href='/about'>About</a>
</li>
<li>
<a href='/contact'>Contact</a>
</li>
</ul>
</MenuIcon>



 */
}
