import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import { Body } from "./components/Body.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js";
import Cart from "./components/Cart.js";
import Contact from "./components/Contact.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
