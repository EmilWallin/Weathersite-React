import React from "react";

//Array
import conditionsArray from "../WeatherConditions";

//Components
import "./weatherBox.css";
import RainCloud from "../RainCloud";
import SnowCloud from "../SnowCloud";
import Sun from "../Sun";
import Cloudy from "../Cloudy";
import Overcast from "../Overcast";
import Fog from "../Fog";
import Mist from "../Mist";
import Clear from "../Clear";
//Hook
import useGetVisuals from "../../hooks/useGetWeatherVisuals";

function GetVisuals(weatherType, weatherAmount) {
    let amount = 0;
    switch (weatherAmount) {
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

    switch (weatherType) {
        case "rain":
        case "drizzle":
            return <RainCloud amount={{ value: amount }} />;
        case "snow":
            return <SnowCloud amount={{ value: amount }}></SnowCloud>;
        case "sun":
            return <Sun></Sun>;
        case "clear":
            return <Clear></Clear>;
        case "cloudy":
            return <Cloudy></Cloudy>;
        case "overcast":
            return <Overcast></Overcast>;
        case "fog":
            return <Fog></Fog>;
        case "mist":
            return <Mist></Mist>;
        default:
            return <div></div>;
    }
}

function GetBackgroundColor(weather, localTime) {
    let returnStr = "";

    switch (weather) {
        case "sun":
            returnStr = "#5ad9ff";
            break;
        case "overcast":
        case "drizzle":
        case "rain":
            returnStr = "#d9e1e7";
            break;
        case "fog":
        case "mist":
            returnStr = "#e7e7e7";
            break;
        default:
            break;
    }

    if (localTime === "") return "#e5f3f8";
    const hour = parseInt(localTime.substr(0, 2));

    if (hour >= 8 && hour <= 18 && returnStr === "") {
        returnStr = "#a6d1e2";
    }

    if (hour < 8 || hour > 18) {
        returnStr = "#333333";
    }

    return returnStr;
}

export const WeatherBox = ({ weather, temp, localTime }) => {
    const { weatherType, weatherAmount } = useGetVisuals(weather);

    return (
        <div
            className="WeatherBox"
            style={{ background: GetBackgroundColor(weatherType, localTime) }}
        >
            {GetVisuals(weatherType, weatherAmount)}
            <div className="WeatherDiv" key={weather}>
                <p className="WeatherText">{weather}</p>
                <p className="TempText">{temp}</p>
            </div>
        </div>
    );
};

export default WeatherBox;
