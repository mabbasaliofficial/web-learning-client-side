import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSideNav from "../Components/LeftSideNav";

const Course = () => {
  const courses = useLoaderData();
  return (
    <div  className="m-5">
      <div>
        {courses.map((course) => (
          <LeftSideNav key={course.id} course={course}></LeftSideNav>
        ))}
      </div>
    </div>
  );
};

export default Course;
