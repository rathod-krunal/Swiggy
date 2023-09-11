import React from "react";
import { TOP_RESTO_URL } from "../Utils/Constese";

function RestroWithOnlineCard(props) {
  const { listData } = props;
  const { name, avgRating, cloudinaryImageId, cuisines } = listData.info;
  return (
    <div className="online-resto-list">
      <div className="online-resto-img">
        <img src={TOP_RESTO_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="details">
        <p> Restraurant Name : {name} </p>
        <p> Average Rating : {avgRating} </p>
        <p> Cuisines : {cuisines.join(",")} </p>
      </div>
    </div>
  );
}

export default RestroWithOnlineCard;
