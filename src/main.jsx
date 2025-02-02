import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import UserUmrahPackages from "./Components/Pages/UserUmrahPackages/UserUmrahPackages";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Blog from "./Components/Pages/Blog/Blog";
import UnderConstruction from "./Components/Pages/UnderConstruction/UnderConstruction";
import DashBoardLayout from "./Components/Layout/DashBoardLayout";
import DashBoard from "./Components/Pages/AdminPanel/DashBoard/DashBoard";
import AdminLogin from "./Components/Pages/AdminPanel/AdminLogin/AdminLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // user section --------------------
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/umrah-packages",
        element: <UserUmrahPackages />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/under-construction",
        element: <UnderConstruction />,
      },
      {
        path: "/adminLogin",
        element: <AdminLogin/>
      },
    ],
  },
  {
    path: "/dp",
    element: <DashBoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dp",
        element: <DashBoard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
