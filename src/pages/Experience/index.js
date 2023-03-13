import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";
import "./styles.css";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#21325e">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October '22 - March '23"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            React Front-End Engineer NanoDegree
          </h3>
          <h4>Udacity</h4>
          <p>www.udacity.com</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - present"
          iconStyle={{ background: "#cc9900", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Partner</h3>
          <h4>OMAC Instrumentation</h4>
          <p>Dehradun, India</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          iconStyle={{ background: "#cc9900", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4>OMAC Instrumentation</h4>
          <p>Dehradun, India</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          iconStyle={{ background: "#cc9900", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Systems Engineer
          </h3>
          <h4>Infosys Ltd.</h4>
          <p>Chennai, India</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2016"
          iconStyle={{ background: "#cc9900", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">Systems Engineer</h3>
          <h4>Infosys Ltd.</h4>
          <p>Chennai, India</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009-2013"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors Of Technology (Information Technology)
          </h3>
          <h4>Uttarakhand Technical University</h4>
          <p>Dehradun, India</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009"
          iconStyle={{ background: "#21325e", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Seconday School Certificate (Class 12<sup>th</sup>)
          </h3>
          <h4>Central Board Of Secondary Education</h4>
          <p>Dehradun, India</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
