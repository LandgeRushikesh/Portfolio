import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Separation from "../Separation";
import Snowfall from "react-snowfall";

function Hero() {
  return (
    <>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
        color="rgba(255, 255, 255, 0.9)"
        speed={[0.5, 1]}
        opacity={[0.3, 0.8]}
        snowflakeCount={75}
      />
      <section
        className="firstsection"
        id="Home-sec"
        style={{ position: "relative", zIndex: 1 }}
      >
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
            <FontAwesomeIcon icon={faFileArrowDown} />
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
