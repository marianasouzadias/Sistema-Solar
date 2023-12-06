import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import App from "./App";
import Home from "./routes/Home";
import PlanetDetail from "./PlanetDetail";
import ErroPage from "./routes/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/planetas/:nome",
        element: <PlanetDetail />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
