import React from 'react';

let Menu = () => {
    return(
        <div>
            <div className ="ui pointing secondary menu">
                <a className ="active item">All Campaigns</a>
                <a className ="item">Quick Campaigns</a>
                <a className ="item">CSV Campaigns</a>
                <a className ="item">URL Override Campaigns</a>
                <div className ="right menu" style = {{marginRight: "20px"}}>
                    <div className ="ui checkbox">
                        <input type="checkbox" className ="hidden" readonly="" tabindex="0"/>
                        <label>Show Archived</label>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Menu;