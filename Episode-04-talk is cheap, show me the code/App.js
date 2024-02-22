import React from "react";
import ReactDOM from "react-dom";

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

const RestaurentCard = () => {
  return (
    <div className="res-card">
      <h3>Meghna Food</h3>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" className="search" placeholder="Search..."/>
      </div>
      <div className="res-container"><RestaurentCard/></div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

root.render(<Applayout />);
