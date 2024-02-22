import React from "react";
import ReactDOM from "react-dom";
import { resList } from "../data.js";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = ({res}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          res.data.cloudinaryImageId
        }
      />
      <h3>{res.data.name}</h3>
      <h4>{res.data.cuisines.join(",")}</h4>
      <h4>₹{res.data.costForTwo / 100}</h4>
      <h4>{res.data.rating}</h4>
      <h4>{res.data.deliveryTime}min</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" className="search" placeholder="Search..." />
      </div>
      <div className="res-container">
        {resList.map((res) => (
          <RestaurentCard key={res.id} res={res} />
        ))}
        {/* <RestaurentCard res={resList}/> */}
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
