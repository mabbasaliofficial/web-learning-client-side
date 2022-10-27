import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../Components/CourseDetails";
import LeftSideNav from "../Components/LeftSideNav";

const Course = () => {
  return (
    <Container>
        <Row>
          <Col lg='4'>
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg='8'>
            <CourseDetails></CourseDetails>
          </Col>
        </Row>
      </Container>
  );
};

export default Course;
