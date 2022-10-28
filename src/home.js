import './App.css';
import './home.css';

import World from './world' ;
import Team from './team' ;
import Family from './family' ;
import { Route,Routes, Link, BrowserRouter as Router } from 'react-router-dom'


function home() {
  
    
  return (
   
      <Router>  
   

    <div class="container">
       <h2 class="">New this week</h2>
       
       
        <div class="image_di">
        <div class="box"> 
        
        <Link to='/world.js'><img src="camel.jpg"/></Link>
        
        </div>
        <div class="box"> 
        <Link to='/team.js'><img src="team.jpg"/></Link>
       
        </div>
        <div class="box"> 
        <Link to='/family.js'><img src="family1.jpg"/></Link>
          
        </div>
        
       
      </div>
    </div>

    <Routes>
    
    <Route exact path='/world.js' element={< World />}></Route>
    <Route exact path='/team.js' element={< Team />}></Route>
    <Route exact path='/family.js' element={< Family />}></Route>

    </Routes>
    
    
    </Router>
  );
}

export default home;
