import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CoursesCard = ({ courses }) => {
    const {_id, image_url, title, details} = courses;
  return (
   <div className="col">
     <Card style={{ width: "16rem"}} className="my-3">
      <Card.Img variant="top" style={{ height: "12rem" }} className="img-fluid" src={image_url} />
      <Card.Body>
        <Card.Title className="fw-bold mb-3">{title}</Card.Title>
        <Card.Text>{details.length > 150 ? <p>{details.slice(0, 150) + '...'} <Link to={`/course/${_id}`}>Read More</Link></p> : <p>{details}</p>}</Card.Text>
        <Button variant="primary" className="w-100">
          Enroll Now
        </Button>
      </Card.Body>
    </Card>
   </div>
  );
};

export default CoursesCard;
