import React from "react";
import "./navbar.css";
import {BsFillPersonFill} from "react-icons/bs"

export default function Nabbar() {
  return (
    <div>
      <div className="navbar-componetns">
        <div className="narbar-rightcomponents">
          <span>NKST SEC SCH</span>
        </div>

        <div className="right">
          <div className="homebar">
            <span className="1"></span>
            <span className="2"></span>
            <span className="3"></span>
          </div>
        </div>

        <div className="rightContiiner">
          <p>18-jul-2023 9:45:52</p>
          <span><BsFillPersonFill/></span>
          

        </div>
      </div>
    </div>
  );
}
