import Separation from "../Separation";

function Eduction() {
  return (
    <>
    <section className="education center-vertically">
      <h1>Education</h1>
      <div className="education-items">
        <div className="education-item">
          <h3>Bachelor of Engineering in Computer Engineering</h3>
          <p>
            <strong>Institution:</strong> Sandip Institute Of Engineering And Management
          </p>
          <p>
            <strong>University:</strong> Savitribai Phule Pune University
          </p>
          <p>
            <strong>Duration:</strong> 2022 - 2026
          </p>
          <p>
            <strong>GPA:</strong> 7.67 / 10
          </p>
          <p>
            <strong>Relevant Coursework:</strong> Data Structures, Algorithms,
            Web Development, Database Management Systems
          </p>
        </div>
        <div className="education-item">
          <h3>HSC (12th Grade)</h3>
          <p>
            <strong>Institution:</strong> KTHM College , Nashik
          </p>
          <p>
            <strong>Duration:</strong> 2020 - 2022
          </p>
          <p>
            <strong>Grade:</strong> First class
          </p>
        </div>
        <div className="education-item">
          <h3>SSC (10th Grade)</h3>
          <p>
            <strong>Institution:</strong> D.F.D. High School
          </p>
          <p>
            <strong>Duration:</strong>2020
          </p>
          <p>
            <strong>Grade:</strong> First class with distinction
          </p>
        </div>
      </div>
    </section>
    <Separation />
    </>
  );
}

export default Eduction;
