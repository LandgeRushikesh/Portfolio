import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileArrowDown} from "@fortawesome/free-solid-svg-icons";
import Separation from "../Separation";

function Hero() {
  return (
    <>
      <section className="firstsection" id="Home-sec">
        <div className="left">
          <p id="first">
            Welcome! I’m <span>Rushikesh</span>
          </p>
          <p id="second">A developer with a love for innovation.</p>
          <a
            className="resume-download"
            href="/Rushikesh_landge_resume.pdf"
            download
          >
            <FontAwesomeIcon icon={faFileArrowDown}/>
            <span> Download Resume</span>
          </a>
        </div>
        <div className="right">
          <img src="/portfolio.png" className="img" />
        </div>
      </section>
      <Separation />
    </>
  );
}

export default Hero;
