import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../Components/CourseDetails";
import LeftSideNav from "../Components/LeftSideNav";

const Course = () => {
  const courses = useLoaderData();
  return (
    // <div className="m-5 d-flex">
    //   <div className="w-100">
    //     {courses.map((course) => (
    //       <LeftSideNav key={course.id} course={course}></LeftSideNav>
    //     ))}
    //   </div>
    //   <div>
    //     <CourseDetails></CourseDetails>
    //   </div>
    // </div>
    <Container>
        <Row>
          <Col>
            <h2>Side Nav</h2>
          </Col>
          <Col>
            <h2>Main Courses</h2>
          </Col>
        </Row>
      </Container>
  );
};

export default Course;
