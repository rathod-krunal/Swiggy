import React, { useEffect, useState } from "react";
import { Restaurant_With_Online_Delivery } from "../DataBase/DB";
import RestroWithOnlineCard from "./RestroWithOnlineCard";

function RestroWithOnline() {
  const [restrolist, setRestrolist] = useState(null);

  useEffect(() => {
    setRestrolist(Restaurant_With_Online_Delivery.restaurants);
  });

  if (!restrolist?.length) return <h1> Loading </h1>;
  return (
    <div className="online-resto-list-main-div">
      <h1>Restaurants with online food delivery in Ahmedabad</h1>
      <div className="online-restro-list-map-div">
        {restrolist.map((list) => {
          return <RestroWithOnlineCard key={list.info.id} listData={list} />;
        })}
      </div>
    </div>
  );
}

export default RestroWithOnline;
