import React from 'react';

const LeftSideNav = ({course}) => {
    return ( 
        <div className='border border-primary rounded w-25 mt-3 bg-light text-dark'>
          <p className='m-3 fw-bold'>{course.name}</p>
        </div>
    );
};

export default LeftSideNav;