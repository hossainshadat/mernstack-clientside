import { createBrowserRouter } from "react-router-dom";
import Main from "./../layout/Main";
import Home from "./../components/Home";
import Faq from "../components/Faq";
import Courses from "../components/Courses";
import Blog from "../components/Blog";
import Login from "../components/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
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
