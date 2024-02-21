import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

// JSX - it is not HTML in JS.
// JSX is transpilled before it reaches the JS ENGINE.Transpilling is done by PARCEL. PARCEL gives the transpilation to BABEL(it install by PARCEl) is JS compiler.

// How JSX works
// JSX=>React.createElement=>React-Element-JS Object =>HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
