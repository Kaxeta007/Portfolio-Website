import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
  const skills = [
    { name: "HTML, CSS", percentage: 90 },
    { name: "SCSS/SASS", percentage: 100 },
    { name: "Javascript, React", percentage: 70 },
    { name: "Bootstrap", percentage: 75 },
    { name: "Git/Github", percentage: 70 },
    { name: "Python", percentage: 40 },
    { name: "typescript", percentage: 70}

    // Add more skills
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <h1>Skills</h1>
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <h5>{skill.name}</h5>
                <ProgressBar
                  now={skill.percentage}
                  label={`${skill.percentage}%`}
                  className="progress-bar"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
