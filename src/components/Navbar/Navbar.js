import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import {RxRocket} from 'react-icons/rx';


function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/"><RxRocket size={25} style={{marginLeft:"20px", color:"#6262DB"}}/> Recuriting</Link>
      
      <ul className={click ? "nav-menu active " : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/Login"> Login</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size="20" style={{ color: "#212121" }} />
        ) : (
          <FaBars size={20} style={{ color: "#212121" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;

