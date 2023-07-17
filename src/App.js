
import './App.css';
import Leftbar from './leftbar/Leftbar';
import Nabbar from './navbar/Nabbar';
import Rightbar from './rightbar/Rightbar';

function App() {
  return (
    <div className='all page'>
    <Nabbar/>
    <div className='homepage'>
    <span className='leftbarpage'>
    < Leftbar/>
    </span>
    <span className='rightbarpage'>
    <Rightbar/>
    </span>
    </div>

   
    </div>
  );
}

export default App;
