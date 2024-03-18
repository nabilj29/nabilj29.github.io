import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import trekforteens from "../../../images/trekforteens.png";
import maction_logo from "../../../images/maction_logo.PNG";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

//what clubs did you have
//Trek for teens
//Maction Potential
//Mcmaster eng competition

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Clubs</h1>
              </Zoom>
            </Col>
            <Col md={6}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    height: "400px",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Trek for Teens
                    </h5>
                    <img
                      src={trekforteens}
                      alt={trekforteens}
                      style={{ width: "350px", height: "300px" }}
                    />
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Trek for Teens is a charity dedicated to educate the
                      public on youth homelessness, connect at-risk youth with
                      resources and services, support the improvement of these
                      services, and empower individuals to take action within
                      their communities. I was a part of the McMaster Chapter in
                      2022-23.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
            <Col md={6}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    height: "400px",
                  }}
                >
                  <div className="projectContent" style={{ opacity: 1 }}>
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Maction Potential
                    </h5>
                    <img
                      src={maction_logo}
                      alt={maction_logo}
                      style={{ width: "175px", height: "300px" }}
                    />
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      In this club, we embarked on a project that involves
                      analyzing real data from EKGs to determine people's moods
                      using a machine learning algorithm. Subsequently, we
                      utilize a 'mood light' to visually represent the person's
                      mood over time.
                    </p>
                  </h6>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
