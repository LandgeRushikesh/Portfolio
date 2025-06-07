import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Separation from "../Separation";

function Skills() {
  useEffect(() => {
    const handleScroll = () => {
      let logos = document.querySelectorAll(".logo");

      logos.forEach((logo) => {
        // Get the vertical position of the logo relative to the document
        let logoTop = logo.offsetTop;

        // Get the height of the logo element
        let logoHeight = logo.offsetHeight;

        // Calculate the position of the bottom edge of the viewport
        let windowBottom = window.scrollY + window.innerHeight;

        // Check if any part of the logo is within the visible viewport
        if (windowBottom > logoTop && window.scrollY < logoTop + logoHeight) {
          logo.classList.add("visible");
        } else {
          logo.classList.remove("visible");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    // if logo is already in frame(view)
    handleScroll();
  }, []);

  return (
    <>
      <section className="skills">
        <h1>Skills</h1>
        <h2>Web Development</h2>
        <div className="development grid">
          {[
            ["HTML-Logo.png", "HTML"],
            ["CSSLogo.png", "CSS"],
            ["JSLogo.png", "Javascript"],
            ["reactLogo.png", "React"],
            ["tailwindLogo.png", "Tailwind CSS"],
            ["nodeLogo.png", "Node js"],
            ["gitLogo.png", "Git"],
          ].map(([img, label], i) => (
            <span className="logo" key={i}>
              <img src={`/${img}`} />
              <p>{label}</p>
            </span>
          ))}
          <span className="logo">
            <FontAwesomeIcon icon={faGithub} className="git-logo" />
            <p>Github</p>
          </span>
        </div>
        <div className="separation-small">
          <div className="line"></div>
        </div>
        <h2>Languages</h2>
        <div className="languages grid">
          {[
            ["C++ logo.png", "C++", "Cpp-logo"],
            ["JSLogo.png", "Javascript"],
            ["pythonLogo.png", "Python"],
          ].map(([img, label, className = ""], i) => (
            <span className="logo" key={i}>
              <img src={`/${img}`} className={className} />
              <p>{label}</p>
            </span>
          ))}
        </div>
        <div className="separation-small">
          <div className="line"></div>
        </div>
        <h2>Foundational</h2>
        <div className="Foundational grid">
          {[
            ["DSALogo.png", "Data Structures & Algorithms", "Cpp-logo"],
            ["OOPLogo.png", "Object Oriented Programming"],
            ["DBMSLogo.png", "DBMS"],
          ].map(([img, label, classname = ""], i) => (
            <span className="logo">
              <img src={`/${img}`} key={i} className={classname} />
              <p>{label}</p>
            </span>
          ))}
        </div>
      </section>
      <Separation />
    </>
  );
}

export default Skills;
