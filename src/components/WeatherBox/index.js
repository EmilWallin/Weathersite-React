import React from 'react';

import './weatherBox.css';



export const WeatherBox = ({weather, temp}) => {


    console.log({weather, temp});
    return(
        <div className="WeatherDiv" key={weather}>
            <p className="WeatherText">{weather}</p>
            <p className="TempText">{temp}</p>
        </div>
    )
}

export default WeatherBox;