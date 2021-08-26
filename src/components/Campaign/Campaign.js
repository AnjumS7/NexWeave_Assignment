import React from 'react';
import Menu from '../NavAndSideBar/Menu';
import Pagination from './Pagination';
import Table from './Table';


let Campaign = () => {
    return(
        <div className = "ui container fluid" style = {{width: "91.5%", float: "right"}}>
            <div className = "ui container fluid" >
            <div className ="ui fluid  large menu">
                <div className ="ui large header" style = {{marginLeft: "20px", marginTop: "5px"}}>Campaigns</div>
                <div className ="right menu" style = {{marginRight: "5px"}}>
                    <a className ="item"><i className ="sync icon"></i></a>
                    <button className ="ui icon left labeled button">
                        <i aria-hidden="true" className ="plus icon"></i>
                            Create a new campaign
                    </button>
                </div>
            </div>
            <Menu />
            <div className = "ui container" style = {{margin: "10px"}}>
                <Table />
            </div>
            <div className = "ui container fluid" style = {{position: "absolute", bottom: "0"}}>
            <div className ="ui inverted raised segment" style = {{float: "right", marginRight: "150px"}}>Showing results 4 out of 25 <Pagination /></div>
                
            </div>
            
        </div>
          </div>
        

    );
}

export default Campaign;