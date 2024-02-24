import { useRouterError } from "react-router-dom";
function Error() {
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!!1</h2>
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  );
}

export default Error;
