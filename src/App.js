import { useState } from "react";
import "./App.css";
import Leftbar from "./leftbar/Leftbar";
import Nabbar from "./navbar/Nabbar";
import Rightbar from "./rightbar/Rightbar";

function App() {
  const [open, setOpen] = useState(true);
  const drawerOpenClose = () => {
    setOpen(!open);
  };

  return (
    <div className="all page">
      <Nabbar drawerOpenClose={drawerOpenClose} />
      <div className="homepage">
        <span className="leftbarpage">{open && <Leftbar />}</span>
        <span className="rightbarpage">
          <Rightbar />
        </span>
      </div>
    </div>
  );
}

export default App;
