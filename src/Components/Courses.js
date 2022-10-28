import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
           <h2>alfj{course.title}</h2>
        </div>
    );
};

export default Courses;