import React from 'react';
import Campaign from './components/Campaign/Campaign';
import NavBar from './components/NavAndSideBar/NavBar';
import SideBar from './components/NavAndSideBar/SideBar';
import {BrowserRouter, Route} from 'react-router-dom';

let App = () => {
  return(
    <BrowserRouter>
      <div>
        <SideBar />
        <div className = "ui container fluid" style = {{width: "91.5%", float: "right"}}>
          <NavBar />
        </div>
        <Route path = '/' exact></Route>
        <Route path = '/Campaign' component = {Campaign}></Route>
        
        
        
        
      </div>
    </BrowserRouter>
    
  
    

  );
  

}

export default App;