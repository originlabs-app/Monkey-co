import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LandingPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
