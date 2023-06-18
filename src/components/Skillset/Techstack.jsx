import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiDatabase
} from "react-icons/di";
import {
  SiMaterialui,
  SiGraphql,
  SiRedux,
  SiMongodb,
  SiHtml5
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs  title="NodeJS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="ReactJS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux  title="Redux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql title="GraphQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui title="MaterialUI" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase title="Oracle"/>
      </Col>
    </Row>
  );
}

export default Techstack;
