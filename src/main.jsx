import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import AddCoffe from "./Components/AddCoffe.jsx";
import UpdataCoffe from "./Components/UpdataCoffe.jsx";
import CoffeeDetails from "./Components/CoffeeDetails/CoffeeDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/addcoffe",
        element: <AddCoffe />,
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
        element: <UpdataCoffe />,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
