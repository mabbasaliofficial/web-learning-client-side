import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({course}) => {
    return ( 
        <div className='border border-primary rounded w-25 mt-3 py-3 bg-light text-dark'>
          <Link to={`${course.id}`} className='text-decoration-none fw-bold d-block text-center'>{course.name}</Link>
        </div>
    );
};

export default LeftSideNav;