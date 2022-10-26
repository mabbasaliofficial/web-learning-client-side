import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs";
import Course from "../Pages/Course";
import Home from "../Pages/Home";
import FAQ from "../Pages/FAQ";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";

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
        element: <Course></Course>,
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
