import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HotelList from "./HotelList/hotelList.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HotelList />
  </React.StrictMode>
);
