import {useEffect, useState} from 'react';
import axios from 'axios';

import API from '../APICall';

export const useWeatherFecth = () => {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState("");

    const fetchWeather = async (location) => {
        const apiKey = process.env.REACT_APP_APIKEY;
        let obj;
        try {
            if(location !== "")
            {
                await API(location).then(data => obj = data);
                setWeather(obj.data.current.condition.text);
                setTemperature(`${obj.data.current.temp_c}°C`);
            }
        }
        catch {
            setWeather("");
            setTemperature("");
            console.log(`ERROR IN fetchweather`)
        }
    }

    useEffect(() => {
        if(!location) return;

        fetchWeather(location);
    })

    return {location, weather, temperature, setLocation};
}
