import React, { useEffect, useState } from "react";
import { Whats_On_Your_Mind } from "../DataBase/DB";
import WhatsInMindCard from "./WhatsInMindCard";

function WhatInMindList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    setList(Whats_On_Your_Mind.info);
  });

  if (!list?.length) return <h1> Loading </h1>;

  return (
    <div className="list-div">
      <h1>What's In Your Mind</h1>
      <div className="lists">
        {list.map((list) => {
          return <WhatsInMindCard key={list.id} listData={list} />;
        })}
      </div>
    </div>
  );
}

export default WhatInMindList;
