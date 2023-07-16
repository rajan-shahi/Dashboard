import React from 'react'
import "./rightbar.css"
import {BiLaptop} from "react-icons/bi"


export default function Rightbar() {
  return (
    <div>
    
      <div className="rightBar-components">
        <div className="rightnavbnar">

          <div className="FeeManagement">
           <span> <BiLaptop/></span>
            <span>fee Management</span>
            <h5>fee Payment</h5>
          </div>
        </div>
        <div className="rightnavbnar-container">
            <div className="rightnavrbar-home-containtre">Record Students Fees</div>
            <div className="rightBar-All-container">shahi</div>
        </div>
      </div>

    </div>
  )
}
