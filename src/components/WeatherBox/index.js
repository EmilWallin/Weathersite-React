import React from 'react';

//Array
import conditionsArray from "../WeatherConditions";

//Components
import './weatherBox.css';
import RainCloud from '../RainCloud';
import SnowCloud from '../SnowCloud';
import Sun from '../Sun';
import Cloudy from '../Cloudy';
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
            return (<SnowCloud amount={{value: amount}}></SnowCloud>)
        case "sun":
            return (<Sun></Sun>)
        case "clear":
            return (<div>clear {weatherAmount}</div>)
        case "cloudy":
            return (<Cloudy></Cloudy>)
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