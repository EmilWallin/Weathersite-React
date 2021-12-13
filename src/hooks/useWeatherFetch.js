import {useEffect, useState} from 'react';
//import axios from 'axios';

import API from '../APICall';

export const useWeatherFecth = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState("");
    const [localTime, setLocalTime] = useState("");

    const fetchWeather = async (location) => {
        let obj;
        try {
            if(location !== "")
            {
                await API(location).then(data => obj = data);
                setWeather(obj.data.current.condition.text);
                setTemperature(`${obj.data.current.temp_c}°C`);
                setLocalTime(obj.data.location.localtime.substr(11));
            }
        }
        catch {
            console.log(`ERROR IN fetchweather`)
        }
    }

    useEffect(() => {
        if(!location) return;

        fetchWeather(location);
    })

    return {weather, temperature, localTime, setLocation};
}

