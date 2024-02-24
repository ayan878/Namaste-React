import React, { useEffect, useState } from "react";
import { resList } from "../utils/data.js";
import { RestaurentCard } from "./Restaurent.js";
import Shimmer from "./Shimmer.js";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        console.log(swiggiApi);
        setListOfRestaurants(swiggiApi);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  }, [listOfRestaurants, searchText]);

  return (
    <>
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <div className="search-box">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search..."
              />
              <button onClick={() => setSearchText("")}>Clear</button>
            </div>
            <button
              className="filter-btn"
              onClick={() => {
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurants(filteredList);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
          <div className="res-container">
            {filteredRestaurants.map((res) => (
              <RestaurentCard key={res.info.id} res={res} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
