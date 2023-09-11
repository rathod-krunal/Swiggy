import React from "react";
import { LOGO_URL } from "../Utils/Constese";
import {AiOutlineDown} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
import {TbDiscount2} from "react-icons/tb"
import {IoIosHelpBuoy} from 'react-icons/io'
import {AiOutlineUser} from "react-icons/ai"
import {BsBag} from "react-icons/bs"

function Navbar() {
  return (
    <div className="Nav">
      <div className="left-nav">
        <div className="logo">
          <img src={LOGO_URL} alt="" />
        </div>
        <div className="location">
          <span>Other</span>
          <span>Ahmedabad,Gujrat,India <AiOutlineDown/> </span>
        </div>
      </div>
      <div className="right-nav">
        <div className="search"> <FiSearch/> Search</div>
        <div className="offers"> <TbDiscount2/>  ofefers</div>
        <div className="help"> <IoIosHelpBuoy/> help</div>
        <div className="signin"> <AiOutlineUser/> signin</div>
        <div className="cart"> <BsBag/> cart</div>
      </div>
    </div>
  );
}

export default Navbar;
