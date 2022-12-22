import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const course = useLoaderData()
    const {image_url, details, title} = course;
    return (
        <div className='mt-5 w-75'>
           <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
            <Card.Title className='fw-bold'>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Courses;