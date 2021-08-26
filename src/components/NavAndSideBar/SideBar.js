import React from 'react';
import { Link } from 'react-router-dom';
import card from './card.JPG';


let SideBar = () => {
    return(
        <div>
          <div className ="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu">
            <Link to = "/" className ="item" style = {{marginBottom: "40px"}}>
              <i className ="home icon"></i>
              NexWeave
            </Link>


            <Link to = "" className ="item"><i className ="rocket icon"></i>Get Started</Link>
            <Link to = "" className ="item"><i className ="th icon"></i>Templates</Link>
            <Link to = "/Campaign" className ="item"><i className ="bullhorn icon"></i>Campaigns</Link>
            <Link to = "" className ="item"><i className ="cogs icon"></i>Integrations</Link>
            <Link to = "" className ="item"><i className ="sync icon"></i>Manage Websites</Link>
            <Link to = "" className ="item"><i className ="setting icon"></i>Settings</Link>

           <a class="ui card">
              <div class="image">
                <img src= {card}/>
              </div>
            </a>

            <a className ="item" style = {{position: "absolute", bottom: "0", marginLeft: "2em"}}>
              <i className ="sign-out icon"></i>
              Logout
            </a>
            
          </div>
        </div>
      );
  }

export default SideBar;