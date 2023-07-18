import React from "react";
import "./navbar.css";
import { BsFillPersonFill } from "react-icons/bs";

export default function Nabbar({drawerOpenClose}) {
  return (
    <div>
      <div className="navbar-componetns">
        <div className="narbar-rightcomponents">
          <span>NKST SEC SCH</span>
        </div>

        <div className="right">
       
          <div onClick={drawerOpenClose} className="homebar">
            <span></span>
            <span ></span>
            <span></span>
          </div>
        </div>

        <div className="rightContiiner">
          <p>18-jul-2023 9:45:52</p>
          <span>
            <BsFillPersonFill  />
          </span>
        </div>
      </div>
    </div>
  );
}
