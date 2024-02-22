import { CDN_URL } from "../utils/constants";

export const RestaurentCard = ({ res }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + res.data.cloudinaryImageId} />
      <h3>{res.data.name}</h3>
      <h4>{res.data.cuisines.join(",")}</h4>
      <h4>₹{res.data.costForTwo / 100}</h4>
      <h4>{res.data.avgRating}</h4>
      <h4>{res.data.deliveryTime}min</h4>
    </div>
  );
};