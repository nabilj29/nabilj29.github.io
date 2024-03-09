import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Nabil Johny </b>
                and I am a dedicated and enthusiastic Bachelor of{" "}
                <b className="purple">Software and Biomedical Engineering </b>
                student at <b className="purple">McMaster University </b>{" "}
                graduating in April 2026.
                <br />
                <br />
                With a foundation in &nbsp;
                <b className="purple"> Java, Python, JavaScript</b>, and
                including frameworks like{" "}
                <b className="purple">React, Node, and Next.js. </b>
                I've honed my skills in both front and back-end development,
                particularly excelling in creating robust software solutions.
                <br />
                <br /> My enthusiasm for discovering cutting-edge technologies
                knows no bounds. Delving into the realms of{" "}
                <b className="purple">
                  machine learning, artificial intelligence, and virtual reality{" "}
                </b>
                excites me greatly, as each presents a frontier of endless
                possibilities and learning opportunities.
                <br />
                <br />
                Apart from technologies, I enjoy &nbsp;
                <b className="purple">
                  going to the gym, playing sports and cooking.{" "}
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
