import { CDN_URL } from "../utils/constants";

export const RestaurentCard = ({ res }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + res?.info.cloudinaryImageId} />
      <h3>{res.info.name}</h3>
      <h4>{res.info.cuisines.join(",")}</h4>
      <h4>{res.info.costForTwo}</h4>
      <h4>{res.info.avgRating}</h4>
      <h4>{res.info.sla.deliveryTime}min</h4>
    </div>
  );
};