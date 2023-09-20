
import './App.css';
import {Routes,Route,Link}  from "react-router-dom";
import Home from './pages/home';
import Carrier from './pages/carrier';
import Cybersecurity from './pages/cybersecurity';

import All from './pages/all';
import Cfullstack from './pages/cfullstack';

function App() {
  return (
    <div className="App">
      <Home/>

      <div> 
      <Link to="/"> 
      <h3 className='aa'>ALL</h3>
      </Link>
      <Link to= "/cfullstack">
      <h3 className='aa'>Full Stack</h3>
      </Link>
      <Link to="/cybersecurity">
     
      <h3 className='aa'> CyberSecurity</h3>
      </Link>
      <Link to="/carrier" > 
      <h3 className='aa'> Carrier</h3>
      </Link>
      

      </div>

      

      <Routes>
      
        <Route path="/" Component={All}/>
        <Route path="/cfullstack" Component={Cfullstack}/>
        <Route path="/cybersecurity" Component={Cybersecurity}/>
        <Route path="/carrier" Component={Carrier}/>
      </Routes>
    </div>
  );
}

export default App;
