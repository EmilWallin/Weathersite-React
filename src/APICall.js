//import React from 'react';
import axios from 'axios';

const CallAPI = async (loc) => {
    const apiKey = process.env.APIKEY;
    const resp = axios.get
    (`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${loc}&aqi=no`)
    return resp;
}

export default CallAPI;