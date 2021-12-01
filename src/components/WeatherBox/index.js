import React from 'react';

import './weatherBox.css';

//Array
import conditionsArray from "../WeatherConditions";

//Components
import RainCloud from '../RainCloud';


export const WeatherBox = ({weather, temp}) => {


    console.log({weather, temp});
    return(
        <div className="WeatherBox">
            <RainCloud/>

            <div className="WeatherDiv" key={weather}>
                <p className="WeatherText">{weather}</p>
                <p className="TempText">{temp}</p>
            </div>
        </div>
    )
}

export default WeatherBox;