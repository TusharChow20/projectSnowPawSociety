import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import axios from "axios";
import Login from "../Pages/LoginOrRegister/Login";
import Register from "../Pages/LoginOrRegister/Register";
import Service from "../Pages/Service";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home,
        loader: () => axios("/data.json"),
      },
      {
        path: "/home",
        Component: Home,
        loader: () => axios("/data.json"),
      },
      {
        path: "/service",
        Component: Service,
        loader: () => axios("/data.json"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    element: <p>Error</p>,
  },
]);
export default router;
