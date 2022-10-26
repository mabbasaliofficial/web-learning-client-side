import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs";
import Category from "../Components/Category";
import Course from "../Pages/Course";
import Home from "../Pages/Home";

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
        path: '/courses',
        element: <Course></Course>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ],
  },
]);
