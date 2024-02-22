import { resList } from "../utils/data.js";
import { RestaurentCard } from "./Restaurent.js";
export const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" className="search" placeholder="Search..." />
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurentCard key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};
