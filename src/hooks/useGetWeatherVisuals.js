import { useEffect, useState } from "react";
import { type } from "../components/WeatherConditions";
import { amount } from "../components/WeatherConditions";

export const useGetWeatherFetch = ( props ) => {
    const [weatherType, setWeatherType] = useState("");
    const [weatherAmount, setWeatherAmount] = useState("");

    const compareStrings = (weather) => {
        let tempStr = weather.toLowerCase();

        type.map((n) => {
            if (tempStr.includes(n)) {
                setWeatherType(n);
            }
            return "";
        });
        amount.map((n) => {
            if (tempStr.includes(n)) {
                setWeatherAmount(n);
            }
            return "";
        });
    };

    useEffect(() => {
        if(!props){
            return; 
        }
        
        compareStrings(props);
    })

    return { weatherType, weatherAmount };
};

export default useGetWeatherFetch;
