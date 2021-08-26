import React from 'react';

let NavBar = () => {
    return(
        <div className = "ui container fluid" >
            <div className ="ui fluid inverted huge menu">
            <a className ="item"><i className ="bars icon"></i></a>
            <span className ="item">How are you doing today User</span>
            <div className ="right menu" style = {{marginRight: "5px"}}>
                <div role="listbox" aria-expanded="false" class="ui selection dropdown" tabindex="0">
                    <div aria-atomic="true" aria-live="polite" role="alert" className ="divider default text">
                        Web Campaign
                    </div>
                    <i aria-hidden="true" className ="dropdown icon"></i>
                </div>
                <span className ="item">Credits : 200 </span>
                <a className ="item"><i className ="info circle icon"></i></a>
                <a className ="item"><i className ="user circle icon"></i></a>
            </div>
        </div>
    </div>

       
        



    );
}

export default NavBar;