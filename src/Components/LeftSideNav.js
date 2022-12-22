import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://myapp-mabbasaliofficial.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      {courses.map((course) => (
        <div
          key={course.id}
          className="border border-primary rounded w-75 p-3 mt-3 bg-light text-dark"
        >
          <Link to={`category/${course.id}`} className="m-3 fw-bold text-decoration-none">
            {course.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
