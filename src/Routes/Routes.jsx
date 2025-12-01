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
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Jobs from "../Pages/FotterLInks/Jobs";
import TermsUse from "../Pages/FotterLInks/TermsUse";
import PrivacyPolicy from "../Pages/FotterLInks/PrivacyPolicy";
import CookiePolicy from "../Pages/FotterLInks/CookiePolicy";

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
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "contact",
        Component: Contact,
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
        path: "jobs",
        Component: Jobs,
      },
      {
        path: "terms-use",
        Component: TermsUse,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "cookie-policy",
        Component: CookiePolicy,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
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
