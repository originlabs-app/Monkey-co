import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { Dashboard } from "./screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
  {
    path: "/landing-page-1",
    element: <LandingPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
