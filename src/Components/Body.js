import React from "react";
import WhatInMindList from "./WhatInMindList";
import TopRestroList from "./TopRestroList";
import RestroWithOnline from "./RestroWithOnline";
import Footer from "./Footer";

function Body() {
  return (
    <div className="body">
      <WhatInMindList />
      <TopRestroList/>
      <RestroWithOnline/>
      <Footer/>
    </div>
  );
}

export default Body;
