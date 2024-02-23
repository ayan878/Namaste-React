import React, { useEffect, useState } from "react";
import { resList } from "../utils/data.js";
import { RestaurentCard } from "./Restaurent.js";
import Shimmer from "./Shimmer.js";

export const Body = () => {
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        const swiggiApi =
          data?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setFilteredResList(swiggiApi);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {filteredResList.length === 0 ? (
        <Shimmer />
      ) : (
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
              <RestaurentCard key={res.info.id} res={res} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
