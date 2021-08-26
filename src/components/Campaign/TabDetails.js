import React from 'react';
import campDet from './CampaignDetails.json';

let TabDetails = () => {
    return(
        campDet.map((camp) => {
            console.log(camp);
            return(
                    <tbody className ="">
                        <tr className ="">
                            <td className ="left aligned">
                            <div className ="ui checkbox">
                                <input type="checkbox" className ="hidden" readonly="" tabindex="0"/>
                                    <label style = {{color: "white"}}>
                                        {camp.campaignName}
                                    </label>
                            </div> 
                            </td>
                            <td className ="center aligned">
                            <button className ="ui button" style = {{backgroundColor : `${camp.backColor}`,borderRadius: "40px"}}>
                                <span style = {{color : `${camp.textColor}`}}>{camp.status}</span>
                            </button>
                            </td>
                            <td className ="center aligned">
                                {camp.createdAt}
                            </td>
                            <td className ="center aligned">
                                {camp.method}
                            </td>
                            <td className ="center aligned">
                            <i className =" video icon"></i>
                                {camp.Media}
                            </td>
                            <td className ="center aligned">
                            <div className ="ui buttons">
                                <button className ="ui button" style = {{backgroundColor : "whitesmoke", marginLeft: "5px"}}>
                                    <i className ="delete icon " style = {{color : "green"}} />
                                </button>
                                <button class="ui button" style = {{backgroundColor : "whitesmoke", marginLeft: "5px"}}>
                                    <i className ="download icon" style = {{color : "blue"}} />
                                </button>
                                <button class="ui button" style = {{backgroundColor : "whitesmoke", marginLeft: "5px"}}>
                                    <i className ="calendar outline icon" style = {{color : "teal"}} />
                                </button>
                            </div>
                            </td>
                        </tr>
                    </tbody>
            

            );
        })
        
    );
}

export default TabDetails;