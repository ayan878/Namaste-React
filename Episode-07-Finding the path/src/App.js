import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import { Body } from "./components/Body.js";
import { createBorwserRputer } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
