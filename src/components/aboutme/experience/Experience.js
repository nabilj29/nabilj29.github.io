import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function Experience() {
  return (
    <div className="mt-5">
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="Jan 2024 - Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Backend Engineer Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2"></h6>
          <p>IBM, Markham ON</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="May 2023 - Aug 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Software Quality Engineer Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2"></h6>
          <p>Toronto Dominion Bank, Toronto ON</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="May 2022 - Aug 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Software Quality Engineer Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2"></h6>
          <p>Toronto Dominion Bank, Toronto ON</p>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        /> */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
