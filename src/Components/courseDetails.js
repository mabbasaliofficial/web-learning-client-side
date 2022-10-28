import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "./CoursesCard";

const CourseDetails = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <h1 className="m-3 text-center">This Category Course {courses.length}</h1>
      <div className="row row-cols-3">
        {courses.map((course) => (
          <CoursesCard key={course._id} courses={course}></CoursesCard>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
