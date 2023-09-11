import React from "react";
import { IN_MIND_URL } from "../Utils/Constese";

function WhatsInMindCard(props) {
  const { listData } = props;
  const { imageId } = listData;
  return (
    <div className="main-card">
      <div className="img-card">
        <img src={IN_MIND_URL + imageId} alt="" />
      </div>
    </div>
  );
}

export default WhatsInMindCard;
