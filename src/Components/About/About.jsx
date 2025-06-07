import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import Separation from "../Separation";

function About() {
  return (
    <>
      <section className="about">
        <div className="leftsec">
          <img src="/about.webp" className="about-img" />
        </div>
        <div className="rightsec">
          <h1 className="title">About Me</h1>
          <p className="content">
            Hi,
            <br />
            I’m Rushikesh, a third-year Computer Engineering student with a love
            for coding and technology. Over the years, I’ve honed my skills in
            web development and have become increasingly interested in IoT and
            Artificial Intelligence. I am passionate about building products
            that solve problems and improve people's lives. Outside of
            academics, I enjoy connecting with fellow students and contributing
            to my college’s tech ecosystem. I'm always looking to grow, learn,
            and collaborate!
          </p>
          <div className="social">
            <Link
              to="https://www.linkedin.com/in/rushikeshlandge"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="https://github.com/LandgeRushikesh" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              className="leetcode"
              to="https://leetcode.com/u/rushilandge12/"
              target="_blank"
            >
              <img src="/LeetCode_Logo.png" />
            </Link>
            <Link to="https://www.instagram.com/_rushilandge/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
      </section>
      <Separation />
    </>
  );
}

export default About;
