import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs";
import Course from "../Pages/Course";
import Home from "../Pages/Home";
import FAQ from "../Pages/FAQ";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import CourseDetails from "../Components/CourseDetails";
import AllCourses from "../Components/AllCourses";
import Courses from "../Components/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/course",
    element: <Course></Course>,
    children: [
      {
        path: "category/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://myapp-mabbasaliofficial.vercel.app/category/${params.id}`),
      },
      {
        path: "/course",
        element: <AllCourses></AllCourses>,
        loader: () => fetch("https://myapp-mabbasaliofficial.vercel.app/allCourses"),
      },
      {
        path: "/course/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(`https://myapp-mabbasaliofficial.vercel.app/allCourses/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Not Found This Routes</h1>
      </div>
    ),
  },
]);
