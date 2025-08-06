import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { LandingPageScreen } from "./screens/LandingPageScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <LandingPage />,
  },
  {
    path: "/landing-page-1",
    element: <LandingPage />,
  },
  {
    path: "/landing-page",
    element: <LandingPageScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
