// Create a React element (h1) as an object with specific attributes
const heading = React.createElement(
  "h1", // Element type
  { id: "heading" }, // Element attributes
  "Hello React by external Js File" // Element content
);

console.log(heading); // Output the created React element to the console

// Create a root for React rendering, select the DOM element with id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the 'heading' React element into the root
// The render method converts the 'heading' object into an h1 tag and places it in the DOM
root.render(heading);
