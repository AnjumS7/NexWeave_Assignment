import React from 'react';
import TabDetails from './TabDetails';



let Table = () => {
    
    return(
        <div>
            <table className ="ui celled inverted selectable table"> 
            <thead className ="">
                <tr className ="">
                    <th className ="left aligned">
                    <div className ="ui checkbox">
                        <input type="checkbox" className ="hidden" readonly="" tabindex="0"/>
                            <label style = {{color: "white"}}>
                                Campaign Name
                            </label>
                    </div> 
                    </th>
                    <th className ="center aligned">
                        Status
                        <i aria-hidden="true" className ="dropdown icon"></i>
                    </th>
                    <th className ="center aligned">
                        Created at
                        <i aria-hidden="true" className ="dropdown icon"></i>
                    </th>
                    <th className ="center aligned">
                        Method
                        <i aria-hidden="true" className ="dropdown icon"></i>
                    </th>
                    <th className ="center aligned">
                        Media
                        <i aria-hidden="true" className ="dropdown icon"></i>
                    </th>
                    <th className ="center aligned">
                        Actions
                    </th>
                </tr>
            </thead>
            <TabDetails />
        </table>


        </div>
        

    );
}

export default  Table;