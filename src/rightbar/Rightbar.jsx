import React from "react";
import "./rightbar.css";
import { BiLaptop } from "react-icons/bi";
import Cards from "../cards/Cards";

export default function Rightbar() {
  return (
    <div className="rightBar-components">
      <div className="rightnavbnar">
        <div className="FeeManagement">
          <span>
            <BiLaptop />
          </span>
          <span>fee Management</span>
          <h5>fee Payment</h5>
        </div>
      </div>
      <div className="rightnavbnar-container">
        <div className="container2">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          
        </div>

        <div className="container2">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        </div>

        
        <div className="container2">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        </div>
      </div>
    </div>
  );
}
