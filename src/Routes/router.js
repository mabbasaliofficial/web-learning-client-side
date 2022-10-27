import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs";
import Course from "../Pages/Course";
import Home from "../Pages/Home";
import FAQ from "../Pages/FAQ";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import CourseDetails from "../Components/CourseDetails";

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
        path: "/courses",
        loader: () => {
          return fetch('https://myapp-silk-ten.vercel.app/courses');
        }, 
        element: <Course></Course>,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({params}) => {
          return fetch(`https://myapp-silk-ten.vercel.app/courses/${params.id}`);
        },
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path:"/faq",
        element: <FAQ></FAQ>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },
]);
