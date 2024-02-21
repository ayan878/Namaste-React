import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I'm h1 tag of child 1"),
    React.createElement("h2", {}, "I'm h2 tag of child 1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, "I'm h1 tag child 2"),
    React.createElement("h2", {}, "I'm h2 tag of child 2")
  ),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
