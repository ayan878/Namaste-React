
// React create a element (h1) is an Object 
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React by external Js File"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
