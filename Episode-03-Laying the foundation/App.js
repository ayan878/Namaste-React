import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

// JSX - it is not HTML in JS.
// JSX is transpilled before it reaches the JS ENGINE.Transpilling is done by PARCEL. PARCEL gives the transpilation to BABEL(it install by PARCEl) is JS compiler.

// How JSX works
// JSX=>React.createElement=>React-Element-JS Object =>HTMLElement(render)
// This is React  element
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX 🚀
  </h1>
);

console.log(jsxHeading);

// React Components
// Class based Components -OLD
// Functional Components -NEW -React Functional Components is function which return some JSX pieces of the code
// This is React function components
const HeadingComponents = () => {
  <h1>Namaste React Functional Components</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
