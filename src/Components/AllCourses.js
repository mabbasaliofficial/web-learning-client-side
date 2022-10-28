import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from './CoursesCard';

const AllCourses = () => {
    const allCourses = useLoaderData();
    return (
        <div className=''>
            <h1 className='text-center'>All Courses</h1>
          <div className='row row-cols-3'>
          {
                allCourses.map(courses => <CoursesCard
                key={courses._id}
                courses = {courses}
                >
                </CoursesCard>)
            }
          </div>
        </div>
    );
};

export default AllCourses;