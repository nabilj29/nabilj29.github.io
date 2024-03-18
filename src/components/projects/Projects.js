import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import pickmeup from "../../images/pickmeup.png";
import answerme from "../../images/answerme.png";
import gaitway from "../../images/gaitway.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

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
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      PickMeUp
                    </h5>
                    <img src={pickmeup} alt={pickmeup} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/nabilj29/PickMeUp/tree/akanksha"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
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
                      PickMeUp is more than an app—it's a revolution in
                      commuting. By innovating carpool matchmaking with a
                      tailored algorithm and Google Maps API, it makes every
                      journey efficient and connected.Embrace PickMeUp, where
                      technology meets sustainability, transforming how we
                      travel together towards a smarter, greener future.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Kottlin, Firebase, Google Maps API
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Answer Me
                    </h5>
                    <img src={answerme} alt={answerme} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://github.com/JaakLipp/HackTheMist"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
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
                      A full-stack application that allows users to text and
                      call a phone number that answers questions using OpenAI's
                      ChatGPT. Text the bot's number to get an SMS response from
                      ChatGPT, or call the number and ask it a question for the
                      bot to use voice recognition to get a vocal response from
                      ChatGPT.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, Python, Flask, OpenAi API, and Twilio's call/SMS
                    API
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Gait Way
                    </h5>
                    <img src={gaitway} alt={gaitway} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://github.com/nabilj29/GaitWay"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
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
                      Gait Way combines Python, Arduino, Firebase, Tkinter, and
                      Matplotlib to pioneer a wearable marvel that charts the
                      path to recovery for individuals navigating the aftermath
                      of orthopaedic surgery. By harnessing the precision of
                      force and orientation sensors, it meticulously captures
                      the nuances of heel and toe strikes, alongside the knee's
                      range of motion, offering a glimpse into the strides made
                      towards correcting equinus gait patterns.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Python, Arduino, Firebase, Tkinter, and Matplotlib
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
