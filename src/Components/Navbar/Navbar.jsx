import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faXmark} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  let sidemenu = document.querySelector(".sidemenu")
  console.log(sidemenu)

  let openMenu = () =>{
    sidemenu.style.right = "0"
    console.log("click")
  }

  let CloseMenu = () =>{
    sidemenu.style.right = "-250px"
  }

  return (
    <nav>
        <div className="left">Rushikesh Landge</div>
        <div className="right">
            <ul className="sidemenu">
                <li><NavLink to="/" onClick={CloseMenu}>Home</NavLink></li>
                <li><NavLink to="/About" onClick={CloseMenu}>About</NavLink></li>
                <li><NavLink to="/Eduction" onClick={CloseMenu}>Education</NavLink></li>
                <li><NavLink to="/Skills" onClick={CloseMenu}>Skills</NavLink></li>
                <li><NavLink to="/Project" onClick={CloseMenu}>Projects</NavLink></li>
                <li><NavLink to="/Contact" onClick={CloseMenu}>Contact me</NavLink></li>
                <button className='menu' onClick={CloseMenu}><FontAwesomeIcon icon={faXmark} /></button>
            </ul>
            <button className='menu' onClick={openMenu}><FontAwesomeIcon icon={faBars} /></button>
        </div>
    </nav>
  )
}

export default Navbar