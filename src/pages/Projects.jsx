import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              title="TV System App"
              description="Currently, I am working on the TV System App team to develop the application for the TV on webOS. I am handling here more than 7+ projects Like Setting, Channel Edit, Channel Setting, Software Update, Personalized Picture Wizard (New feature in webOS 24), Setting UI services, Camera application etc. I am working on migration of Sandstone Libabry of entire enact application. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="IoT Devices"
              description="I have worked for client {Confidential} where all the IoT devices should be able to connect to IoT Hub using UI. We have develop the UI (in ReactJS) for every IoT Hub there is a page like Dashboard, Health, Applications, Users, Roles, etc. I have worked on all the pages including the SSO of the project. Fixed security issues with the API including the access token."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Autonomous Vehicles"
              description="I have worked for client {Confidential} in which vehicle will move on map and decision AI(artificial intelligence) will take. Once AI will take decision command or movement of vehicle should display on a map the command should be triggered from the backend(NodeJS) and visible in the frontend(ReactJS). Created dashboard(visualization), for every requirement like Camera panel, image capturing, Scan Panel, Statistics, Record, etc."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Car Simulator"
              description="I have created a UI for the HMI dashboard for a vehicle, which shows data of connected vehicles live. Like petrol status, current speed limit, seat information parking information. I have created the data grid in the dashboard which will show all the information in UI and the user will able to add/edit/delete the information from the frontend in ReactJS  I have created API in node js with static data which holds the information in JSON. I have used SQLite database to store the information."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Meijer E-commerce"
              description="Meijer is a retail Super Market that deals with selling various products Like Grocery items, Bakery, Meat, Gas Station, they have more than 235+ physical stores and online stores (E-commerce) in USA and Canada. I have created components like checkout module, DLP, CLP, SLP, PLP. Validation for all the components. fixes production bugs in high priority."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="{Confidential}"
              description="I worked for a US client {confidential} in Capgemini. It is a retail company that deals with selling various products mainly shoes and bags. They have more than 115+ stores all over the world mainly in the USA, Canada, and Japan. Worked as a database developer in oracle 11g. Used to write PL/SQL code according to the requirement from the client. Perform DML, DDL Operations as per the Business requirement."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="{Confidential}"
              description="I worked for a US client {confidential} in Capgemini. It is a retail company that deals with selling various products mainly child clothes. Worked as a database developer in oracle 11g. Used to write PL/SQL code according to the requirement from the client. Perform DML, DDL Operations as per the Business requirement."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects