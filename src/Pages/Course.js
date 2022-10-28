import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CourseDetails from "../Components/CourseDetails";
import LeftSideNav from "../Components/LeftSideNav";
import NavBar from "../Components/NavBar";

const Course = () => {
  return (
<div>
  <NavBar/>
<Container>
        <Row>
          <Col lg='3'>
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg='9'>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
</div>
  );
};

export default Course;
