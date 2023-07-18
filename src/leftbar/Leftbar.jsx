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
            <span>Dashboard</span>
          </div>
        </div>

        <div className="all-react-icon">
          <div className="react-icon">
            <span>
              <BsFillChatHeartFill />
            </span>
            <span>Portal Request</span>
          </div>

          <div className="react-icon">
            <span>
              <CgProfile />
            </span>
            <span>Profile</span>
          </div>

          <div className="react-icon">
            <span>
              <AiOutlineLaptop />
            </span>
            <span>Administrative manager</span>
          </div>

          <div className="react-icon">
            <span>
              <BsLaptop />
            </span>
            <span>Student Management</span>
          </div>

          <div className="react-icon">
            <span>
              <FcAlarmClock />
            </span>
            <span>Class Attendance</span>
          </div>

          <div className="react-icon">
            <span>
              <AiFillEye />
            </span>
            <span>View Attendance Record</span>
          </div>

          <div className="react-icon">
            <span>
              <BsBook />
            </span>
            <span>Subject Management</span>
          </div>

          <div className="react-icon">
            <span>
              <BsFillJournalBookmarkFill />
            </span>
            <span>Result Management</span>
          </div>
        </div>
      </div>
    </div>
  );
}
