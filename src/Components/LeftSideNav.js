import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = ({ course }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id} className="border border-primary rounded w-75 p-3 mt-3 bg-light text-dark">
          <Link to={`/courses/${course.id}`} className="m-3 fw-bold ">{course.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
