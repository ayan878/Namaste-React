import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2361932&lng=84.36669119999999&restaurantId=346064&catalog_qa=undefined&submitAction=ENTER"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const data = await res.json();
        console.log(data);
        setResInfo(data.data);
      } catch (error) {
        console.error("Error fetching menu data:", error.message);
      }
    };
    fetchMenu();
  }, []);

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div>
      <img src={cloudinaryImageId} alt={name} />
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;
