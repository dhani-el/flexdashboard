import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./Home/Jsx";
import Analytics from "./Analytics/Jsx";
import Entry from "./Entry/Jsx";


const router  = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"analytics",
    element:<Analytics/>
  },
   {
    path:"entry",
    element:<Entry/>
  },
])

const App = () => (
  <RouterProvider router={router} />
);
ReactDOM.render(<App />, document.getElementById("app"));
