// // Create a React element (h1) as an object with specific attributes
// const heading = React.createElement(
//   "h1", // Element type
//   { id: "heading" }, // Element attributes
//   "Hello React by external Js File" // Element content
// );

// console.log(heading); // Object

// // Create a root for React rendering, select the DOM element with id "root"
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Render the 'heading' React element into the root
// // The render method converts the 'heading' object into an h1 tag and places it in the DOM
// root.render(heading);

// **********************************************
/* How to create a nested div in react

<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div>

#ReactElement(Object)=>HTML(Browser Understands)
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm h1 tag")
//   )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// ***********************************************

// **************************************************
/* How to create a nested div we create a sibling element in react

<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

#ReactElement(Object)=>HTML(Browser Understands)
*/

/*const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
**************************************************/

// How to create a nested sibling div with sibling elements in React?

/* <div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> 
#ReactElement(Object)=>HTML(Browser Understands)*/

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