import { createBrowserRouter } from "react-router-dom";
import Main from "./../layout/Main";
import Home from "./../components/Home";
import Faq from "../components/Faq";
import Courses from "../components/Courses";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Login from "./../components/Login";
import CourseDetail from "../components/CourseDetail";
import PrivateRoute from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://mern-development-server.vercel.app/courses"),
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () =>
          fetch("https://mern-development-server.vercel.app/courses"),
      },
      {
        path: "/category/:id",
        element: <Courses />,
        loader: ({ params }) =>
          fetch(
            `https://mern-development-server.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/course/:id",
        element: (
          <PrivateRoute>
            <CourseDetail />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://mern-development-server.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
