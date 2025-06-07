import React from "react";
import Separation from "../Separation";
import projects from "/src/Projects.json";

function Project() {
  return (
    <>
      <section className="Project">
        <h1>Project's</h1>
        <div className="Project-section">
          {projects.map((project,i) => (
            <div className="project-card" key={i}>
              <img src={`/${project.img}`} alt="" />
              <h2 className="title">{project.title}</h2>
              <div className="desc">
                <p>
                  <strong>Description:</strong>
                  <br />{project.description}
                </p>
              </div>
              <div className="tech">
                <p>
                  <strong>Tech Stack: </strong>{project.techStack.join(", ")}
                </p>
              </div>
              <a href={`${project.repositoryLink}`} target="_blank" rel="noopener noreferrer"className="show">
                View git Repository
              </a>
            </div>
          ))}
        </div>
      </section>
      <Separation />
    </>
  );
}

export default Project;
