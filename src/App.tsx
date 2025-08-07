import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage";
import { Dashboard } from "./screens/Dashboard";
import { StakingPage } from "./screens/StakingPage";
import { DAOPage } from "./screens/DAOPage";
import { ProjectsPage } from "./screens/ProjectsPage";
import { Documentation } from "./screens/Documentation";

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
    path: "/staking",
    element: <StakingPage />,
  },
  {
    path: "/dao",
    element: <DAOPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/documentation",
    element: <Documentation />,
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
