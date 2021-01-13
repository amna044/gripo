import React, { useState } from "react";
import "./NavKube.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function NavKube() {
  return (
    <NavBar>
      <NavLogo />
      <NavItem icon={<KeyboardArrowDownIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </NavBar>
  );
}

export default NavKube;

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar__nav">{props.children}</ul>
    </nav>
  );
}
function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav__options">
      <div className="nav__01">
        <a className="nav__link" onClick={() => setOpen(!open)}>
          <span className="nav__text">Product</span>
          {props.icon}
        </a>
        <a className="nav__link" onClick={() => setOpen(!open)}>
          <span className="nav__text">Description</span>
          {props.icon}
        </a>{" "}
        <a className="nav__link" onClick={() => setOpen(!open)}>
          <span className="nav__text">blogs</span>
          {props.icon}
        </a>{" "}
        <a className="nav__link" onClick={() => setOpen(!open)}>
          <span className="nav__text">abc</span>
          {props.icon}
        </a>
        {open && props.children}
      </div>
    </div>
  );
}

function NavLogo(props) {
  return (
    <div className="nav__start">
      <a className="nav__link" href="www.google.com">
        <img
          className="nav__img"
          src="https://appscode.com/assets/images/products/appscode/appscode-1280x640.png"
          alt="apps"
        />
      </a>
    </div>
  );
}
function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon__right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <DropdownItem>Product abc</DropdownItem>
      <DropdownItem>Description</DropdownItem>
    </div>
  );
}

// <nav className="nav">
//
// <div className="nav__options" >
//     <div className="nav__01">
//         <a className="nav__link" onClick={()=>setOpen(!open)} >
//            <span className="nav__text"  >Product   </span>
//            <span className="nav__icon"><KeyboardArrowDownIcon/></span>
//         </a>

//     </div>
// </div>
// </nav>
