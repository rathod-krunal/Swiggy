import React, { useEffect, useState } from "react";
import { RESTAURANT_DATA } from "../DataBase/DB";
import WhatsInMindCard from "./WhatsInMindCard";
import TopRestroCards from "./TopRestroCards";

function TopRestroList() {
  const [restroList, setRestroList] = useState(null);

  useEffect(() => {
    setRestroList(RESTAURANT_DATA?.data?.cards[2]?.data?.data?.cards);
  });

  if (!restroList?.length) return <h1> Loading </h1>;

  return (
    <div className="top-resto-list-main-div">
      <h1>Top Restaurant Chain in Ahmedabad</h1>
      <div className="top-restro-list-map-div">
        {restroList.map((list) => {
          return <TopRestroCards key={list.data.id} listData={list.data} />;
        })}
      </div>
    </div>
  );
}

export default TopRestroList;
