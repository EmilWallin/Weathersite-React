import React from 'react';

import './weatherBox.css';

//Array
import conditionsArray from "../WeatherConditions";

//Components
import RainCloud from '../RainCloud';
//Hook
import useGetVisuals from '../../hooks/useGetWeatherVisuals';

function GetVisuals(weatherType, weatherAmount) {
    let amount = 0;
    switch(weatherAmount) {
        case "light":
            amount = 30;
            break;
        case "moderate":
            amount = 80;
            break;
        case "heavy":
            amount = 150;
            break;
        default:
            amount = 60;
            break;
    }

    switch(weatherType) {
        case "rain":
            return (<RainCloud amount={{value: amount}}/>)
        case "snow":
            return (<div>snow {weatherAmount}</div>)
        case "sun":
            return (<div>sun {weatherAmount}</div>)
        case "clear":
            return (<div>clear {weatherAmount}</div>)
        case "cloudy":
            return (<div>cloudy {weatherAmount}</div>)
        default:
            return (<div>ingen type {weatherAmount}</div>)        
    }
}

export const WeatherBox = ({weather, temp}) => {
    
    const {weatherType, weatherAmount} = useGetVisuals(weather);

    return(
        <div className="WeatherBox">
            {
                GetVisuals(weatherType, weatherAmount)
            }

            <div className="WeatherDiv" key={weather}>
                <p className="WeatherText">{weather}</p>
                <p className="TempText">{temp}</p>
            </div>
            
        </div>
    )
}

export default WeatherBox;