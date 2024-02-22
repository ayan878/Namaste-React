import React, { useState } from "react";
import { resList } from "../utils/data.js";
import { RestaurentCard } from "./Restaurent.js";

export const Body = () => {
  
  const [filteredResList, setFilteredResList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter the resList based on the condition
            const filteredList = resList.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredResList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((res) => (
          <RestaurentCard key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};
