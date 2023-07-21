import "./leftbar.css";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillChatHeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLaptop } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import { FcAlarmClock } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";


export default function Leftbar() {
  return (
    <div>
      <div className="leftBar-components">
        <div className="topbar">
          <img className="firstimg" src="./images/img.png" alt="" />
          <span className="account">Rajan shahi.</span>
        </div>

        <div className="react-icondshboard">
          <div className="topreact-dashboard">
            <AiFillDashboard />
            <span className="react-name">Dashboard</span>
          </div>
        </div>

        <div className="all-react-icon">
          <div className="react-icon">
            <span>
              <BsFillChatHeartFill />
            </span>
            <span  className="react-name">Portal Request</span>
          </div>

          <div className="react-icon">
            <span>
              <CgProfile />
            </span>
            <span  className="react-name">Profile</span>
          </div>

          <div className="react-icon">
            <span>
              <AiOutlineLaptop />
            </span>
            <span  className="react-name">Administrative manager</span>
          </div>

          <div className="react-icon">
            <span>
              <BsLaptop />
            </span>
            <span  className="react-name">Student Management</span>
          </div>

          <div className="react-icon">
            <span>
              <FcAlarmClock />
            </span>
            <span  className="react-name">Class Attendance</span>
          </div>

          <div className="react-icon">
            <span>
              <AiFillEye />
            </span>
            <span  className="react-name">View Attendance Record</span>
          </div>

          <div className="react-icon">
            <span>
              <BsBook />
            </span>
            <span  className="react-name">Subject Management</span>
          </div>

          <div className="react-icon">
            <span>
              <BsFillJournalBookmarkFill />
            </span>
            <span  className="react-name">Result Management</span>
          </div>
        </div>
      </div>
    </div>
  );
}
