const heading = React.createElement(
  "h1",
  { id: "heading"},
  "Hello React by external Js File"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);