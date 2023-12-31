import React from "react";
import "./rightbar.css";
import { BiLaptop } from "react-icons/bi";
import Cards from "../cards/Cards";
import { AiOutlineSearch } from "react-icons/ai";

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
          <div className="searchbar">
            <span className="search-icon">
              <AiOutlineSearch />
            </span>
            <input placeholder="Search,For Here" className="searchname"></input>
          </div>
        </div>
      </div>

      <div className="rightnavbnar-container">
        <div className="container2">
          <Cards name="My Profile" />
          <Cards name="Student Manager" />
          <Cards name="Class Manager" />
          <Cards name="Subject Manager" />
        </div>

        <div className="container2">
          <Cards name="Result Manager" />
          <Cards name="Fee Manager" />
          <Cards name="Staff Manager" />
          <Cards name="View Users" />
        </div>

        <div className="container2">
          <Cards name="Print Slip" />
          <Cards name="Calendar" />
          <Cards name="Reset Password" />
          <Cards name="Mails" />
        </div>
        <button className="last-btn">More About</button>
      </div>
    </div>
  );
}
