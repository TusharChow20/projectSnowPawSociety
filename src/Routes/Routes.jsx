import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import axios from "axios";
import Login from "../Pages/LoginOrRegister/Login";
import Register from "../Pages/LoginOrRegister/Register";
import Service from "../Pages/Service";
import ForgotPassword from "../Pages/LoginOrRegister/ForgetPassword";
import Profile from "../Pages/Profile/Profile";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Pages/LoadingError/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
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
      {
        path: "/forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: () => axios("/data.json"),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
export default router;
